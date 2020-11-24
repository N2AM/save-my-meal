<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * Restaurants Controller
 *
 * @property \App\Model\Table\RestaurantsTable $Restaurants
 * @property \Alaxos\Controller\Component\FilterComponent $Filter
 */
class RestaurantsController extends AppController
{
//           public function beforeFilter(Event $event)
//{
// parent::beforeFilter($event);
//
//     //this line is not necessary if you pass the _csrfToken
//    $this->Security->config('unlockedFields', ['description']);
//   $this->Security->config('unlockedActions', ['add','edit']);
//}

    /**
     * Helpers
     *
     * @var array
     */
    public $helpers = ['Alaxos.AlaxosHtml', 'Alaxos.AlaxosForm', 'Alaxos.Navbars'];

    /**
     * Components
     *
     * @var array
     */
    public $components = ['Alaxos.Filter'];

    /**
    * Index method
    *
    * @return void
    */
    public function index()
    {
        $this->paginate = [
            'contain' => ['Cities', 'Categories']
        ];
        $this->set('restaurants', $this->paginate($this->Filter->getFilterQuery()));
        $this->set('_serialize', ['restaurants']);
        
        $cities = $this->Restaurants->Cities->find('list', ['limit' => 200]);
        $categories = $this->Restaurants->Categories->find('list', ['limit' => 200]);
        $this->set(compact('cities', 'categories'));
    }

    /**
     * View method
     *
     * @param string|null $id Restaurant id.
     * @return void
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function view($id = null)
    {
        $restaurant = $this->Restaurants->get($id, [
            'contain' => ['Cities', 'Categories', 'Offers', 'Orders', 'Reviews']
        ]);
        $this->set('restaurant', $restaurant);
        $this->set('_serialize', ['restaurant']);
    }

    /**
     * Add method
     *
     * @return void Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
       
        $restaurant = $this->Restaurants->newEntity();
        if ($this->request->is('post')) {
                  if(!empty($this->request->data['photo']['name'])){
         $path_info = pathinfo($this->request->data['photo']['name']);
         chmod($this->request->data['photo']['tmp_name'], 0644);
         $photoo = time().mt_rand().".".$path_info['extension'];
         //$fullpath = WWW_ROOT."library".'/'.'rwnak'.'/salons';
         $fullpath = WWW_ROOT."library".'/'.'restaurantphoto';
         $mypath=URL."library".'/'.'restaurantphoto';
         if(!is_dir($fullpath)) {
         mkdir($fullpath, 0777, true);
         }
         move_uploaded_file($this->request->data['photo']['tmp_name'], $fullpath.DS.$photoo);
         $this->request->data['photo'] = $mypath.DS.$photoo;
       }
       
                 if(!empty($this->request->data['logo']['name'])){
         $path_info = pathinfo($this->request->data['logo']['name']);
         chmod($this->request->data['logo']['tmp_name'], 0644);
         $photoo = time().mt_rand().".".$path_info['extension'];
         //$fullpath = WWW_ROOT."library".'/'.'rwnak'.'/salons';
         $fullpath = WWW_ROOT."library".'/'.'restaurantlogo';
         $mypath=URL."library".'/'.'restaurantlogo';
         if(!is_dir($fullpath)) {
         mkdir($fullpath, 0777, true);
         }
         move_uploaded_file($this->request->data['logo']['tmp_name'], $fullpath.DS.$photoo);
         $this->request->data['logo'] = $mypath.DS.$photoo;
       }
            $restaurant = $this->Restaurants->patchEntity($restaurant, $this->request->data);
            if ($this->Restaurants->save($restaurant)) {
                $this->Flash->success(___('the restaurant has been saved'), ['plugin' => 'Alaxos']);
                return $this->redirect(['action' => 'view', $restaurant->id]);
            } else {
                $this->Flash->error(___('the restaurant could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        $cities = $this->Restaurants->Cities->find('list', ['limit' => 200]);
        $categories = $this->Restaurants->Categories->find('list', ['limit' => 200]);
        $this->set(compact('restaurant', 'cities', 'categories'));
        $this->set('_serialize', ['restaurant']);
    }

    /**
     * Edit method
     *
     * @param string|null $id Restaurant id.
     * @return void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $restaurant = $this->Restaurants->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
                       if(!empty($this->request->data['photo']['name'])){
         $path_info = pathinfo($this->request->data['photo']['name']);
         chmod($this->request->data['photo']['tmp_name'], 0644);
         $photoo = time().mt_rand().".".$path_info['extension'];
         //$fullpath = WWW_ROOT."library".'/'.'rwnak'.'/salons';
         $fullpath = WWW_ROOT."library".'/'.'restaurantphoto';
           $mypath=URL."library".'/'.'restaurantphoto';
         if(!is_dir($fullpath)) {
         mkdir($fullpath, 0777, true);
         }
         move_uploaded_file($this->request->data['photo']['tmp_name'], $fullpath.DS.$photoo);
         $this->request->data['photo'] =$mypath.DS.$photoo;
       }else{
          $this->request->data['photo']= $restaurant['photo'];
      }
      
                     if(!empty($this->request->data['logo']['name'])){
         $path_info = pathinfo($this->request->data['logo']['name']);
         chmod($this->request->data['logo']['tmp_name'], 0644);
         $photoo = time().mt_rand().".".$path_info['extension'];
         //$fullpath = WWW_ROOT."library".'/'.'rwnak'.'/salons';
         $fullpath = WWW_ROOT."library".'/'.'restaurantlogo';
           $mypath=URL."library".'/'.'restaurantlogo';
         if(!is_dir($fullpath)) {
         mkdir($fullpath, 0777, true);
         }
         move_uploaded_file($this->request->data['logo']['tmp_name'], $fullpath.DS.$photoo);
         $this->request->data['logo'] =$mypath.DS.$photoo;
       }else{
          $this->request->data['logo']= $restaurant['logo'];
      }
            $restaurant = $this->Restaurants->patchEntity($restaurant, $this->request->data);
            if ($this->Restaurants->save($restaurant)) {
                $this->Flash->success(___('the restaurant has been saved'), ['plugin' => 'Alaxos']);
                return $this->redirect(['action' => 'view', $restaurant->id]);
            } else {
                $this->Flash->error(___('the restaurant could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        $cities = $this->Restaurants->Cities->find('list', ['limit' => 200]);
        $categories = $this->Restaurants->Categories->find('list', ['limit' => 200]);
        $this->set(compact('restaurant', 'cities', 'categories'));
        $this->set('_serialize', ['restaurant']);
    }

    /**
     * Delete method
     *
     * @param string|null $id Restaurant id.
     * @return void Redirects to index.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $restaurant = $this->Restaurants->get($id);
        
        try
        {
            if ($this->Restaurants->delete($restaurant)) {
                $this->Flash->success(___('the restaurant has been deleted'), ['plugin' => 'Alaxos']);
            } else {
                $this->Flash->error(___('the restaurant could not be deleted. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        catch(\Exception $ex)
        {
            if($ex->getCode() == 23000)
            {
                $this->Flash->error(___('the restaurant could not be deleted as it is still used in the database'), ['plugin' => 'Alaxos']);
            }
            else
            {
                $this->Flash->error(sprintf(__('The restaurant could not be deleted: %s'), $ex->getMessage()), ['plugin' => 'Alaxos']);
            }
        }
        
        return $this->redirect(['action' => 'index']);
    }
    
    /**
     * Delete all method
     */
    public function delete_all() {
        $this->request->allowMethod('post', 'delete');
        
        if(isset($this->request->data['checked_ids']) && !empty($this->request->data['checked_ids'])){
            
            $query = $this->Restaurants->query();
            $query->delete()->where(['id IN' => $this->request->data['checked_ids']]);
            
            try{
                if ($statement = $query->execute()) {
                    $deleted_total = $statement->rowCount();
                    if($deleted_total == 1){
                        $this->Flash->set(___('the selected restaurant has been deleted.'), ['element' => 'Alaxos.success']);
                    }
                    elseif($deleted_total > 1){
                        $this->Flash->set(sprintf(__('The %s selected restaurants have been deleted.'), $deleted_total), ['element' => 'Alaxos.success']);
                    }
                } else {
                    $this->Flash->set(___('the selected restaurants could not be deleted. Please, try again.'), ['element' => 'Alaxos.error']);
                }
            }
            catch(\Exception $ex){
                $this->Flash->set(___('the selected restaurants could not be deleted. Please, try again.'), ['element' => 'Alaxos.error', 'params' => ['exception_message' => $ex->getMessage()]]);
            }
        } else {
            $this->Flash->set(___('there was no restaurant to delete'), ['element' => 'Alaxos.error']);
        }
        
        return $this->redirect(['action' => 'index']);
    }
    
    /**
     * Copy method
     *
     * @param string|null $id Restaurant id.
     * @return void Redirects on successful copy, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function copy($id = null)
    {
        $restaurant = $this->Restaurants->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $restaurant = $this->Restaurants->newEntity();
            $restaurant = $this->Restaurants->patchEntity($restaurant, $this->request->data);
            if ($this->Restaurants->save($restaurant)) {
                $this->Flash->success(___('the restaurant has been saved'), ['plugin' => 'Alaxos']);
                return $this->redirect(['action' => 'view', $restaurant->id]);
            } else {
                $this->Flash->error(___('the restaurant could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        $cities = $this->Restaurants->Cities->find('list', ['limit' => 200]);
        $categories = $this->Restaurants->Categories->find('list', ['limit' => 200]);
        
        $restaurant->id = $id;
        $this->set(compact('restaurant', 'cities', 'categories'));
        $this->set('_serialize', ['restaurant']);
    }
}
