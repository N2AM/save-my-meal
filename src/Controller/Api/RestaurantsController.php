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
class RestaurantsController extends AppController
{
 public function initialize()
    {
        parent::initialize();
        $this->loadComponent('RequestHandler');
          $this->loadComponent('Paginator');
                  $this->Auth->allow(['getrestaurants','viewrestaurants','getrestaurantsweb','getrestaurantdescription','getrestaurantreview','getrestaurantreviewapp','addcover','getrestaurantinfo']); // the pages that available to user without need api token.
    }
    
public function getrestaurants($cityid,$catid=null){
    $dataa=$this->Restaurants->find();
       $date = $dataa->func()->date_format([
                   'Restaurants.start_time' => 'literal',
                    "'%h:%i'" => 'literal'
                ]);
       
        $dateto = $dataa->func()->date_format([
                   'Restaurants.end_time' => 'literal',
                    "'%h:%i'" => 'literal'
                ]);
  $data=  $this->Restaurants->find('all')->select(['id','amount','name','res_lat','res_long','description','photo','logo','start_time_joined'=>$date,'end_time_joined'=>$dateto])->where(['Restaurants.city_id'=>$cityid,'Restaurants.status'=>1])->orwhere(['Restaurants.category_id'=>$catid,'Restaurants.status'=>1])->contain(['Reviews','TotalRating'=>function($user){
      $user->select(['TotalRating.restaurant_id','stars'=>$user->func()->sum('TotalRating.rate'),'count'=>$user->func()->count('TotalRating.user_id')])->group(['TotalRating.restaurant_id']);
      return $user;
  }])->toarray();
 $this->set('_serialize', ['data']);
 $this->set(compact('cities', 'data'));
}

public function viewrestaurants(){
    $array=  $this->request->data['arrayofres'];
    $dataa=$this->Restaurants->find();
       $date = $dataa->func()->date_format([
                   'Restaurants.start_time' => 'literal',
                    "'%h:%i:%s'" => 'literal'
                ]);
       
        $dateto = $dataa->func()->date_format([
                   'Restaurants.end_time' => 'literal',
                    "'%h:%i:%s'" => 'literal'
                ]);
  $data=  $this->Restaurants->find('all')->select(['id','amount','name','res_lat','res_long','description','start_time_joined'=>$date,'end_time_joined'=>$dateto])->where(['Restaurants.id IN'=>$array])->contain(['Reviews','TotalRating'=>function($user){
      $user->select(['TotalRating.restaurant_id','stars'=>$user->func()->sum('TotalRating.rate'),'count'=>$user->func()->count('TotalRating.user_id')])->group(['TotalRating.restaurant_id']);
      return $user;
  }])->toarray();
 $this->set('_serialize', ['data']);
 $this->set(compact('cities', 'data'));
    
}

public function getrestaurantsweb(){
     $dataa=$this->Restaurants->find();
       $date = $dataa->func()->date_format([
                   'Restaurants.start_time' => 'literal',
                    "'%h:%i'" => 'literal'
                ]);
       
        $dateto = $dataa->func()->date_format([
                   'Restaurants.end_time' => 'literal',
                    "'%h:%i'" => 'literal'
                ]);
  $data=  $this->Restaurants->find('all')->select(['id','amount','name','res_lat','res_long','description','logo','photo','start_time_joined'=>$date,'end_time_joined'=>$dateto])->contain(['Reviews','TotalRating'=>function($user){
      $user->select(['TotalRating.restaurant_id','stars'=>$user->func()->sum('TotalRating.rate'),'count'=>$user->func()->count('TotalRating.user_id')])->group(['TotalRating.restaurant_id']);
      return $user;
  }])->toarray();
 $this->set('_serialize', ['data']);
 $this->set(compact('cities', 'data'));
}

public function getrestaurantdescription($id){
        $dataa=$this->Restaurants->find();
       $date = $dataa->func()->date_format([
                   'Restaurants.start_time' => 'literal',
                    "'%h:%i'" => 'literal'
                ]);
       
        $dateto = $dataa->func()->date_format([
                   'Restaurants.end_time' => 'literal',
                    "'%h:%i'" => 'literal'
                ]);
  $data=  $this->Restaurants->find('all')->select(['id','amount','name','res_lat','res_long','description','photo','start_time_joined'=>$date,'end_time_joined'=>$dateto])->where(['Restaurants.id'=>$id])->contain(['Reviews','TotalRating'=>function($user){
      $user->select(['TotalRating.restaurant_id','stars'=>$user->func()->sum('TotalRating.rate'),'count'=>$user->func()->count('TotalRating.user_id')])->group(['TotalRating.restaurant_id']);
      return $user;
  }])->toarray();
 $this->set('_serialize', ['data']);
 $this->set(compact('cities', 'data'));
}

public function getrestaurantreview($id){
        $dataa=$this->Restaurants->find();
       $date = $dataa->func()->date_format([
                   'Restaurants.start_time' => 'literal',
                    "'%h:%i'" => 'literal'
                ]);
       
        $dateto = $dataa->func()->date_format([
                   'Restaurants.end_time' => 'literal',
                    "'%h:%i'" => 'literal'
                ]);
    $data=  $this->Restaurants->find('all')->select(['id','amount','name','res_lat','res_long','description','photo','start_time_joined'=>$date,'end_time_joined'=>$dateto])->where(['Restaurants.id'=>$id])->contain(['Reviews','TotalRating'=>function($user){
        $user->select(['TotalRating.restaurant_id','stars'=>$user->func()->sum('TotalRating.rate'),'count'=>$user->func()->count('TotalRating.user_id')])->group(['TotalRating.restaurant_id']);
        return $user;
    }])->toarray();
     $this->set('_serialize', ['data']);
 $this->set(compact('cities', 'data'));
}

public function getrestaurantreviewapp($id){
    $this->loadModel('Reviews');
        $dataa=$this->Restaurants->find();
       $date = $dataa->func()->date_format([
                   'Restaurants.start_time' => 'literal',
                    "'%h:%i'" => 'literal'
                ]);
       
        $dateto = $dataa->func()->date_format([
                   'Restaurants.end_time' => 'literal',
                    "'%h:%i'" => 'literal'
                ]);
    $data=  $this->Restaurants->find('all')->select(['id','amount','name','res_lat','res_long','description','start_time_joined'=>$date,'end_time_joined'=>$dateto])->where(['Restaurants.id'=>$id])->contain(['Reviews'=>['Users'=>function($user){
        return $user->select(['Users.id','Users.username']);
    }],'TotalRating'=>function($user){
        $user->select(['TotalRating.restaurant_id','stars'=>$user->func()->sum('TotalRating.rate'),'count'=>$user->func()->count('TotalRating.user_id')])->group(['TotalRating.restaurant_id']);
        return $user;
    }])->toarray();
     $rate5=  $this->Reviews->find('all')->where(['Reviews.restaurant_id'=>$id,'Reviews.rate'=>5])->count();
        $rate4=$this->Reviews->find('all')->where(['Reviews.restaurant_id'=>$id,'Reviews.rate'=>4.0])->orwhere(['Reviews.restaurant_id'=>$id,'Reviews.rate'=>4.5])->count();
        $rate3=$this->Reviews->find('all')->where(['Reviews.restaurant_id'=>$id,'Reviews.rate'=>3.0])->orwhere(['Reviews.restaurant_id'=>$id,'Reviews.rate'=>3.5])->count();
        $rate2=$this->Reviews->find('all')->where(['Reviews.restaurant_id'=>$id,'Reviews.rate'=>2.0])->orwhere(['Reviews.restaurant_id'=>$id,'Reviews.rate'=>2.5])->count();
        $rate1=$this->Reviews->find('all')->where(['Reviews.restaurant_id'=>$id,'Reviews.rate'=>1.0])->orwhere(['Reviews.restaurant_id'=>$id,'Reviews.rate'=>1.5])->count(); 
     $this->set('_serialize', ['data','rate1','rate2','rate3','rate4','rate5']);
 $this->set(compact('cities', 'data','rate1','rate2','rate3','rate4','rate5'));
}

public function addcover($id){
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
               // $this->Flash->success(___('the restaurant has been saved'), ['plugin' => 'Alaxos']);
               // return $this->redirect(['action' => 'view', $restaurant->id]);
            } else {
               // $this->Flash->error(___('the restaurant could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        $this->set(compact('restaurant', 'cities', 'categories'));
        $this->set('_serialize', ['restaurant']);
}
 
public function getrestaurantinfo($id){
    $data=  $this->Restaurants->find('all')->select(['name','photo','logo','price','amount'])->where(['Restaurants.id'=>$id])->toarray();
    $this->set(compact('data'));
        $this->set('_serialize', ['data']);
}
}