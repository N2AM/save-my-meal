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
class CategoriesController extends AppController
{
 public function initialize()
    {
        parent::initialize();
        $this->loadComponent('RequestHandler');
          $this->loadComponent('Paginator');
                  $this->Auth->allow(['getcategories']); // the pages that available to user without need api token.
    }
    
    public function getcategories(){
        $data=  $this->Categories->find('all')->toarray();
        $this->set(compact('data'));
	$this->set('_serialize', ['data']);
        
    }
    

 
}