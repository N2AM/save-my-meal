<?php
namespace App\Controller\Api;

use App\Controller\Api\AppController;
use Braintree\Gateway;
/**
 * Deals Controller
 *
 * @property \App\Model\Table\DealsTable $Deals
 * @property \Alaxos\Controller\Component\FilterComponent $Filter
 */
class OrdersController extends AppController
{
 public function initialize()
    {
        parent::initialize();
        $this->loadComponent('RequestHandler');
          $this->loadComponent('Paginator');
                  $this->Auth->allow(['getuserorder','addorder','getordersweb','editorder']); // the pages that available to user without need api token.
    }
    
public function getuserorder($userid){
    $data=  $this->Orders->find('all')->contain(['Users','Restaurants'])->where(['Orders.user_id'=>$userid])->toarray();
     $this->set('_serialize', ['data']);
 $this->set(compact('cities', 'data'));
}

public function addorder(){
     $order = $this->Orders->newEntity();
        if ($this->request->is('post')) {
            $this->request->data['order_status']=1;
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
              //  $this->Flash->success(___('the order has been saved'), ['plugin' => 'Alaxos']);
              //  return $this->redirect(['action' => 'view', $order->id]);
            } else {
               // $this->Flash->error(___('the order could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        //$restaurants = $this->Orders->Restaurants->find('list', ['limit' => 200]);
       // $users = $this->Orders->Users->find('list', ['limit' => 200]);
        $this->set(compact('order'));
        $this->set('_serialize', ['order']);
}

public function getordersweb(){
    $data=  $this->Orders->find('all')->contain(['Restaurants'=>function($res){
                    return $res->select(['Restaurants.id','Restaurants.name']);
        
    },'Users'=>function($user){
        return $user->select(['Users.id','Users.username']);
    }])->toarray();
     $this->set(compact('data'));
        $this->set('_serialize', ['data']);
}

public function editorder($id){
    $order = $this->Orders->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $order = $this->Orders->patchEntity($order, $this->request->data);
            if ($this->Orders->save($order)) {
               // $this->Flash->success(___('the order has been saved'), ['plugin' => 'Alaxos']);
                //return $this->redirect(['action' => 'view', $order->id]);
            } else {
               // $this->Flash->error(___('the order could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
       
        $this->set(compact('order'));
        $this->set('_serialize', ['order']);
}


    
 
}