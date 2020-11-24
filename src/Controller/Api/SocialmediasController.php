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
class SocialmediasController extends AppController
{
 public function initialize()
    {
        parent::initialize();
        $this->loadComponent('RequestHandler');
          $this->loadComponent('Paginator');
                  $this->Auth->allow(['getsocialmedia']); // the pages that available to user without need api token.
    }
    
public function getsocialmedia(){
  $data=  $this->Socialmedias->find('all')->toarray();
 $this->set('_serialize', ['data']);
 $this->set(compact('cities', 'data'));
}
    

 
}