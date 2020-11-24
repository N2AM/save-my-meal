<?php
namespace App\Controller\Api;
use Cake\Event\Event;
use Cake\Network\Exception\UnauthorizedException;
use Cake\Utility\Security;
use Firebase\JWT\JWT;

class UsersController extends AppController
{
    public function initialize()
    {
        parent::initialize();
        $this->Auth->allow(['addusers','token','register','add']);
    }

    public function addusers(){
  $adduser=$this->Users->adddata($this->request->data);
 $this->set(compact('adduser'));
 $this->set('_serialize', ['adduser']);
}

  

    public function add()
{
    $this->Crud->on('afterSave', function(Event $event) {
        if ($event->subject->created) {
	 
            $this->set('data', [
                'id' => $event->subject->entity->id,
                'token' => JWT::encode(
                    [
                        'sub' => $event->subject->entity->id,
                        'exp' =>  time() + 604800
                    ],
                Security::salt())
            ]);
          
            $this->Crud->action()->config('serialize.data', 'data');
        }
    });

    return $this->Crud->execute();
}
public function token()
{
    $user = $this->Auth->identify();
    if (!$user) {
        throw new UnauthorizedException('Invalid username or password');
    }

    $this->set([
        'success' => true,
        'data' => [
            'id' => $user['id'],
            'usergroupid'=>$user['user_group_id'],
            'token' => JWT::encode([
                'sub' => $user['id'],
                'exp' =>  time() + 604800
            ],
            Security::salt())
        ],
        '_serialize' => ['success', 'data']
    ]);
}
public function register() {
  debug($this->request->data);
  $this->viewBuilder()->layout('default') ;
  $userId = $this->UserAuth->getUserId();
  if($userId) {
    $this->redirect(['action'=>'dashboard']);
  }
  if(SITE_REGISTRATION) {
    $this->loadModel('Usermgmt.UserGroups');
    $userGroups = $this->UserGroups->getGroupsForRegistration();
    if($this->request->is('post') && $this->UserAuth->canUseRecaptha('registration') && !$this->request->is('ajax')) {
      $this->request->data['Users']['captcha'] = (isset($this->request->data['g-recaptcha-response'])) ? $this->request->data['g-recaptcha-response'] : "";
    }
    $userEntity = $this->Users->newEntity($this->request->data, ['validate'=>'forRegister']);
    if($this->request->is('post')) {
      $errors = $userEntity->errors();
      if($this->request->is('ajax')) {
        if(empty($errors)) {
          $response = ['error'=>0, 'message'=>'success'];
        } else {
          $response = ['error'=>1, 'message'=>'failure'];
          $response['data']['Users'] = $errors;
        }
        echo json_encode($response);exit;
      } else {
        if(empty($errors)) {
          if(!isset($this->request->data['Users']['user_group_id'])) {
            $userEntity['user_group_id'] = DEFAULT_GROUP_ID;
          }
          if(!EMAIL_VERIFICATION) {
            $userEntity['email_verified'] = 1;
          }
          $userEntity['active'] = 1;
          $userEntity['ip_address'] = $this->request->clientIp();
          $userEntity['password'] = $this->UserAuth->makeHashedPassword($userEntity['password']);
           $userEntity['first_name'] = $userEntity['first_name'];
           $userEntity['last_name'] = $userEntity['last_name'];
          if($this->Users->save($userEntity, ['validate'=>false])) {
            $userId = $userEntity['id'];


            $this->loadModel('Usermgmt.UserDetails');
            $userDetailEntity = $this->UserDetails->newEntity();
            $userDetailEntity['user_id'] = $userId;
            $this->UserDetails->save($userDetailEntity, ['validate'=>false]);
            if(EMAIL_VERIFICATION) {
              $this->Users->sendVerificationMail($userEntity);
            }
            if(SEND_REGISTRATION_MAIL) {
              $this->Users->sendRegistrationMail($userEntity);
            }
            if(isset($userEntity['active']) && $userEntity['active'] && !EMAIL_VERIFICATION) {
              $user = $this->Users->getUserById($userId);
              $user = $user->toArray();
              $this->UserAuth->login($user);
              $this->redirect($this->Auth->redirectUrl());
            } else {
              $this->Flash->success(__('We have sent an email to you, please confirm your registration'));
              //$this->redirect(['action'=>'login']);
            }
          } else {
            $this->Flash->error(__('Unable to register user, please try again'));
          }
        }
      }
    }
    $this->set(compact('userGroups', 'userEntity'));
  } else {
    $this->Flash->info(__('Sorry new registration is currently disabled, please try again later'));
    $this->redirect(['action'=>'login']);
  }
}
}
