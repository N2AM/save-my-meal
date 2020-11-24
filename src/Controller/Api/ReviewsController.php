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
class ReviewsController extends AppController
{
 public function initialize()
    {
        parent::initialize();
        $this->loadComponent('RequestHandler');
          $this->loadComponent('Paginator');
                  $this->Auth->allow(['addreview']); // the pages that available to user without need api token.
    }
    
public function addreview(){
    $review = $this->Reviews->newEntity();
        if ($this->request->is('post')) {
            $review = $this->Reviews->patchEntity($review, $this->request->data);
            if ($this->Reviews->save($review)) {
                //$this->Flash->success(___('the review has been saved'), ['plugin' => 'Alaxos']);
               // return $this->redirect(['action' => 'view', $review->id]);
            } else {
               // $this->Flash->error(___('the review could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        $this->set(compact('review', 'restaurants', 'users'));
        $this->set('_serialize', ['review']);
}
    

 
}