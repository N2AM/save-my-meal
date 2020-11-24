<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * Offers Controller
 *
 * @property \App\Model\Table\OffersTable $Offers
 * @property \Alaxos\Controller\Component\FilterComponent $Filter
 */
class OffersController extends AppController
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
            'contain' => ['Restaurants']
        ];
        $this->set('offers', $this->paginate($this->Filter->getFilterQuery()));
        $this->set('_serialize', ['offers']);
        
        $restaurants = $this->Offers->Restaurants->find('list', ['limit' => 200]);
        $this->set(compact('restaurants'));
    }

    /**
     * View method
     *
     * @param string|null $id Offer id.
     * @return void
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function view($id = null)
    {
        $offer = $this->Offers->get($id, [
            'contain' => ['Restaurants']
        ]);
        $this->set('offer', $offer);
        $this->set('_serialize', ['offer']);
    }

    /**
     * Add method
     *
     * @return void Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $offer = $this->Offers->newEntity();
        if ($this->request->is('post')) {
            $offer = $this->Offers->patchEntity($offer, $this->request->data);
            if ($this->Offers->save($offer)) {
                $this->Flash->success(___('the offer has been saved'), ['plugin' => 'Alaxos']);
                return $this->redirect(['action' => 'view', $offer->id]);
            } else {
                $this->Flash->error(___('the offer could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        $restaurants = $this->Offers->Restaurants->find('list', ['limit' => 200]);
        $this->set(compact('offer', 'restaurants'));
        $this->set('_serialize', ['offer']);
    }

    /**
     * Edit method
     *
     * @param string|null $id Offer id.
     * @return void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $offer = $this->Offers->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $offer = $this->Offers->patchEntity($offer, $this->request->data);
            if ($this->Offers->save($offer)) {
                $this->Flash->success(___('the offer has been saved'), ['plugin' => 'Alaxos']);
                return $this->redirect(['action' => 'view', $offer->id]);
            } else {
                $this->Flash->error(___('the offer could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        $restaurants = $this->Offers->Restaurants->find('list', ['limit' => 200]);
        $this->set(compact('offer', 'restaurants'));
        $this->set('_serialize', ['offer']);
    }

    /**
     * Delete method
     *
     * @param string|null $id Offer id.
     * @return void Redirects to index.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $offer = $this->Offers->get($id);
        
        try
        {
            if ($this->Offers->delete($offer)) {
                $this->Flash->success(___('the offer has been deleted'), ['plugin' => 'Alaxos']);
            } else {
                $this->Flash->error(___('the offer could not be deleted. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        catch(\Exception $ex)
        {
            if($ex->getCode() == 23000)
            {
                $this->Flash->error(___('the offer could not be deleted as it is still used in the database'), ['plugin' => 'Alaxos']);
            }
            else
            {
                $this->Flash->error(sprintf(__('The offer could not be deleted: %s'), $ex->getMessage()), ['plugin' => 'Alaxos']);
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
            
            $query = $this->Offers->query();
            $query->delete()->where(['id IN' => $this->request->data['checked_ids']]);
            
            try{
                if ($statement = $query->execute()) {
                    $deleted_total = $statement->rowCount();
                    if($deleted_total == 1){
                        $this->Flash->set(___('the selected offer has been deleted.'), ['element' => 'Alaxos.success']);
                    }
                    elseif($deleted_total > 1){
                        $this->Flash->set(sprintf(__('The %s selected offers have been deleted.'), $deleted_total), ['element' => 'Alaxos.success']);
                    }
                } else {
                    $this->Flash->set(___('the selected offers could not be deleted. Please, try again.'), ['element' => 'Alaxos.error']);
                }
            }
            catch(\Exception $ex){
                $this->Flash->set(___('the selected offers could not be deleted. Please, try again.'), ['element' => 'Alaxos.error', 'params' => ['exception_message' => $ex->getMessage()]]);
            }
        } else {
            $this->Flash->set(___('there was no offer to delete'), ['element' => 'Alaxos.error']);
        }
        
        return $this->redirect(['action' => 'index']);
    }
    
    /**
     * Copy method
     *
     * @param string|null $id Offer id.
     * @return void Redirects on successful copy, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function copy($id = null)
    {
        $offer = $this->Offers->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $offer = $this->Offers->newEntity();
            $offer = $this->Offers->patchEntity($offer, $this->request->data);
            if ($this->Offers->save($offer)) {
                $this->Flash->success(___('the offer has been saved'), ['plugin' => 'Alaxos']);
                return $this->redirect(['action' => 'view', $offer->id]);
            } else {
                $this->Flash->error(___('the offer could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        $restaurants = $this->Offers->Restaurants->find('list', ['limit' => 200]);
        
        $offer->id = $id;
        $this->set(compact('offer', 'restaurants'));
        $this->set('_serialize', ['offer']);
    }
}
