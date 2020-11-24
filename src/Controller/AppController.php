<?php
namespace App\Controller;

use Cake\Controller\Controller;
use Cake\Event\Event;
use Cake\ORM\Table;
class AppController extends Controller {

	public $components = ['Flash', 'Auth', 'Usermgmt.UserAuth', /*'Security', 'Csrf'*/];
	public $helpers = ['Usermgmt.UserAuth', 'Usermgmt.Image', 'Form'];

	/* Override functions */
	public function paginate($object = null) {
		$sessionKey = sprintf('UserAuth.Search.%s.%s', $this->request['controller'], $this->request['action']);
		if($this->request->session()->check($sessionKey)) {
			$persistedData = $this->request->session()->read($sessionKey);
			if(!empty($persistedData['page_limit'])) {
				$this->paginate['limit'] = $persistedData['page_limit'];
			}
		}
		return parent::paginate($object);
	}

    public function beforefilter(Event $event){


        $this->viewBuilder()->layout('dashboard');
       
      
        }


public function beforeRender(Event $event) {
    $this->loadModel('Categories');
    $this->loadModel('Restaurants');
    $this->loadModel('Orders');
    $this->loadModel('Countries');
    $this->loadModel('Cities');
     $this->loadModel('Users');
    $categorycount= $this->Categories->find('all')->count();
    $restaurantcount= $this->Restaurants->find('all')->count();
    $orderscount= $this->Orders->find('all')->count();
    $countrycount= $this->Countries->find('all')->count();
    $citycount= $this->Cities->find('all')->count();
    $usercount=$this->Users->find('all')->where(['Users.user_group_id'=>2])->count();
$this->set(compact('categorycount','orderscount','restaurantcount','countrycount','citycount','usercount'));
  $this->set('_serialize', ['categorycount','orderscount','restaurantcount','countrycount','citycount','usercount']);

		if(!array_key_exists('_serialize', $this->viewVars) && in_array($this->response->type(), ['application/json', 'application/xml'])) {
			$this->set('_serialize', true);
		}

	}
}
