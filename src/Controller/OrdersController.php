<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * Orders Controller
 *
 * @property \App\Model\Table\OrdersTable $Orders
 * @property \Alaxos\Controller\Component\FilterComponent $Filter
 */
class OrdersController extends AppController
{

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
            'contain' => ['Restaurants', 'Users']
        ];
        $this->set('orders', $this->paginate($this->Filter->getFilterQuery()));
        $this->set('_serialize', ['orders']);
        
        $restaurants = $this->Orders->Restaurants->find('list', ['limit' => 200]);
        $users = $this->Orders->Users->find('list', ['limit' => 200]);
        $this->set(compact('restaurants', 'users'));
    }

    /**
     * View method
     *
     * @param string|null $id Order id.
     * @return void
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function view($id = null)
    {
        $order = $this->Orders->get($id, [
            'contain' => ['Restaurants', 'Users']
        ]);
        $this->set('order', $order);
        $this->set('_serialize', ['order']);
    }

    /**
     * Add method
     *
     * @return void Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $order = $this->Orders->newEntity();
        if ($this->request->is('post')) {
            $order = $this->Orders->patchEntity($order, $this->request->data);
            if ($this->Orders->save($order)) {
                $this->loadModel('Restaurants');
                $orderamount=$order->amount;
                debug($orderamount);
                debug($order->restaurant_id);
                $restaurant=$this->Restaurants->get($order->restaurant_id, [
            'contain' => []
        ]);
                $restaurantamount=$restaurant->amount;
                debug($restaurantamount);
                $newamount=$restaurantamount-$orderamount;
                $array=array();
                $array['amount']=$newamount;
                $restaurant = $this->Restaurants->patchEntity($restaurant, $array);
                $this->Restaurants->save($restaurant);
                $this->Flash->success(___('the order has been saved'), ['plugin' => 'Alaxos']);
                return $this->redirect(['action' => 'view', $order->id]);
            } else {
                $this->Flash->error(___('the order could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        $restaurants = $this->Orders->Restaurants->find('list', ['valueField' =>'name']);
        $users = $this->Orders->Users->find('list', ['valueField' =>'username']);
        $this->set(compact('order', 'restaurants', 'users'));
        $this->set('_serialize', ['order']);
    }

    /**
     * Edit method
     *
     * @param string|null $id Order id.
     * @return void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $order = $this->Orders->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $order = $this->Orders->patchEntity($order, $this->request->data);
            if ($this->Orders->save($order)) {
                $this->Flash->success(___('the order has been saved'), ['plugin' => 'Alaxos']);
                return $this->redirect(['action' => 'view', $order->id]);
            } else {
                $this->Flash->error(___('the order could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        $restaurants = $this->Orders->Restaurants->find('list', ['limit' => 200]);
        $users = $this->Orders->Users->find('list', ['limit' => 200]);
        $this->set(compact('order', 'restaurants', 'users'));
        $this->set('_serialize', ['order']);
    }

    /**
     * Delete method
     *
     * @param string|null $id Order id.
     * @return void Redirects to index.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $order = $this->Orders->get($id);
        
        try
        {
            if ($this->Orders->delete($order)) {
                $this->Flash->success(___('the order has been deleted'), ['plugin' => 'Alaxos']);
            } else {
                $this->Flash->error(___('the order could not be deleted. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        catch(\Exception $ex)
        {
            if($ex->getCode() == 23000)
            {
                $this->Flash->error(___('the order could not be deleted as it is still used in the database'), ['plugin' => 'Alaxos']);
            }
            else
            {
                $this->Flash->error(sprintf(__('The order could not be deleted: %s'), $ex->getMessage()), ['plugin' => 'Alaxos']);
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
            
            $query = $this->Orders->query();
            $query->delete()->where(['id IN' => $this->request->data['checked_ids']]);
            
            try{
                if ($statement = $query->execute()) {
                    $deleted_total = $statement->rowCount();
                    if($deleted_total == 1){
                        $this->Flash->set(___('the selected order has been deleted.'), ['element' => 'Alaxos.success']);
                    }
                    elseif($deleted_total > 1){
                        $this->Flash->set(sprintf(__('The %s selected orders have been deleted.'), $deleted_total), ['element' => 'Alaxos.success']);
                    }
                } else {
                    $this->Flash->set(___('the selected orders could not be deleted. Please, try again.'), ['element' => 'Alaxos.error']);
                }
            }
            catch(\Exception $ex){
                $this->Flash->set(___('the selected orders could not be deleted. Please, try again.'), ['element' => 'Alaxos.error', 'params' => ['exception_message' => $ex->getMessage()]]);
            }
        } else {
            $this->Flash->set(___('there was no order to delete'), ['element' => 'Alaxos.error']);
        }
        
        return $this->redirect(['action' => 'index']);
    }
    
    /**
     * Copy method
     *
     * @param string|null $id Order id.
     * @return void Redirects on successful copy, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function copy($id = null)
    {
        $order = $this->Orders->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $order = $this->Orders->newEntity();
            $order = $this->Orders->patchEntity($order, $this->request->data);
            if ($this->Orders->save($order)) {
                $this->Flash->success(___('the order has been saved'), ['plugin' => 'Alaxos']);
                return $this->redirect(['action' => 'view', $order->id]);
            } else {
                $this->Flash->error(___('the order could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        $restaurants = $this->Orders->Restaurants->find('list', ['limit' => 200]);
        $users = $this->Orders->Users->find('list', ['limit' => 200]);
        
        $order->id = $id;
        $this->set(compact('order', 'restaurants', 'users'));
        $this->set('_serialize', ['order']);
    }
}
