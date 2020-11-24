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
class CitiesController extends AppController
{
 public function initialize()
    {
        parent::initialize();
        $this->loadComponent('RequestHandler');
          $this->loadComponent('Paginator');
                  $this->Auth->allow(['searchbyword']); // the pages that available to user without need api token.
    }
    
 public function searchbyword() { 
    
        
         $conditions = $this->Cities->find('all')
         ->where(['Cities.name LIKE'=>$this->request->data(['name']).'%']) 
       ->orwhere(['Cities.name LIKE'=>'%'.$this->request->data(['name']).'%'])->toArray();
             $this->set('_serialize', ['conditions']);
               $this->set(compact('conditions'));
       
        
     
 }
    

 
}