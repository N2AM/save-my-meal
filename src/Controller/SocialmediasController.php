<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * Socialmedias Controller
 *
 * @property \App\Model\Table\SocialmediasTable $Socialmedias
 * @property \Alaxos\Controller\Component\FilterComponent $Filter
 */
class SocialmediasController extends AppController
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
        $this->set('socialmedias', $this->paginate($this->Filter->getFilterQuery()));
        $this->set('_serialize', ['socialmedias']);
    }

    /**
     * View method
     *
     * @param string|null $id Socialmedia id.
     * @return void
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function view($id = null)
    {
        $socialmedia = $this->Socialmedias->get($id, [
            'contain' => []
        ]);
        $this->set('socialmedia', $socialmedia);
        $this->set('_serialize', ['socialmedia']);
    }

    /**
     * Add method
     *
     * @return void Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $socialmedia = $this->Socialmedias->newEntity();
        if ($this->request->is('post')) {
            $socialmedia = $this->Socialmedias->patchEntity($socialmedia, $this->request->data);
            if ($this->Socialmedias->save($socialmedia)) {
                $this->Flash->success(___('the socialmedia has been saved'), ['plugin' => 'Alaxos']);
                return $this->redirect(['action' => 'view', $socialmedia->id]);
            } else {
                $this->Flash->error(___('the socialmedia could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        $this->set(compact('socialmedia'));
        $this->set('_serialize', ['socialmedia']);
    }

    /**
     * Edit method
     *
     * @param string|null $id Socialmedia id.
     * @return void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $socialmedia = $this->Socialmedias->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $socialmedia = $this->Socialmedias->patchEntity($socialmedia, $this->request->data);
            if ($this->Socialmedias->save($socialmedia)) {
                $this->Flash->success(___('the socialmedia has been saved'), ['plugin' => 'Alaxos']);
                return $this->redirect(['action' => 'view', $socialmedia->id]);
            } else {
                $this->Flash->error(___('the socialmedia could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        $this->set(compact('socialmedia'));
        $this->set('_serialize', ['socialmedia']);
    }

    /**
     * Delete method
     *
     * @param string|null $id Socialmedia id.
     * @return void Redirects to index.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $socialmedia = $this->Socialmedias->get($id);
        
        try
        {
            if ($this->Socialmedias->delete($socialmedia)) {
                $this->Flash->success(___('the socialmedia has been deleted'), ['plugin' => 'Alaxos']);
            } else {
                $this->Flash->error(___('the socialmedia could not be deleted. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        catch(\Exception $ex)
        {
            if($ex->getCode() == 23000)
            {
                $this->Flash->error(___('the socialmedia could not be deleted as it is still used in the database'), ['plugin' => 'Alaxos']);
            }
            else
            {
                $this->Flash->error(sprintf(__('The socialmedia could not be deleted: %s'), $ex->getMessage()), ['plugin' => 'Alaxos']);
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
            
            $query = $this->Socialmedias->query();
            $query->delete()->where(['id IN' => $this->request->data['checked_ids']]);
            
            try{
                if ($statement = $query->execute()) {
                    $deleted_total = $statement->rowCount();
                    if($deleted_total == 1){
                        $this->Flash->set(___('the selected socialmedia has been deleted.'), ['element' => 'Alaxos.success']);
                    }
                    elseif($deleted_total > 1){
                        $this->Flash->set(sprintf(__('The %s selected socialmedias have been deleted.'), $deleted_total), ['element' => 'Alaxos.success']);
                    }
                } else {
                    $this->Flash->set(___('the selected socialmedias could not be deleted. Please, try again.'), ['element' => 'Alaxos.error']);
                }
            }
            catch(\Exception $ex){
                $this->Flash->set(___('the selected socialmedias could not be deleted. Please, try again.'), ['element' => 'Alaxos.error', 'params' => ['exception_message' => $ex->getMessage()]]);
            }
        } else {
            $this->Flash->set(___('there was no socialmedia to delete'), ['element' => 'Alaxos.error']);
        }
        
        return $this->redirect(['action' => 'index']);
    }
    
    /**
     * Copy method
     *
     * @param string|null $id Socialmedia id.
     * @return void Redirects on successful copy, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function copy($id = null)
    {
        $socialmedia = $this->Socialmedias->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $socialmedia = $this->Socialmedias->newEntity();
            $socialmedia = $this->Socialmedias->patchEntity($socialmedia, $this->request->data);
            if ($this->Socialmedias->save($socialmedia)) {
                $this->Flash->success(___('the socialmedia has been saved'), ['plugin' => 'Alaxos']);
                return $this->redirect(['action' => 'view', $socialmedia->id]);
            } else {
                $this->Flash->error(___('the socialmedia could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        
        $socialmedia->id = $id;
        $this->set(compact('socialmedia'));
        $this->set('_serialize', ['socialmedia']);
    }
}
