<?php
namespace App\Controller;

use App\Controller\AppController;

/**
 * Reviews Controller
 *
 * @property \App\Model\Table\ReviewsTable $Reviews
 * @property \Alaxos\Controller\Component\FilterComponent $Filter
 */
class ReviewsController extends AppController
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
        $this->set('reviews', $this->paginate($this->Filter->getFilterQuery()));
        $this->set('_serialize', ['reviews']);
        
        $restaurants = $this->Reviews->Restaurants->find('list', ['limit' => 200]);
        $users = $this->Reviews->Users->find('list', ['limit' => 200]);
        $this->set(compact('restaurants', 'users'));
    }

    /**
     * View method
     *
     * @param string|null $id Review id.
     * @return void
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function view($id = null)
    {
        $review = $this->Reviews->get($id, [
            'contain' => ['Restaurants', 'Users']
        ]);
        $this->set('review', $review);
        $this->set('_serialize', ['review']);
    }

    /**
     * Add method
     *
     * @return void Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $review = $this->Reviews->newEntity();
        if ($this->request->is('post')) {
            $review = $this->Reviews->patchEntity($review, $this->request->data);
            if ($this->Reviews->save($review)) {
                $this->Flash->success(___('the review has been saved'), ['plugin' => 'Alaxos']);
                return $this->redirect(['action' => 'view', $review->id]);
            } else {
                $this->Flash->error(___('the review could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        $restaurants = $this->Reviews->Restaurants->find('list', ['limit' => 200]);
        $users = $this->Reviews->Users->find('list', ['limit' => 200]);
        $this->set(compact('review', 'restaurants', 'users'));
        $this->set('_serialize', ['review']);
    }

    /**
     * Edit method
     *
     * @param string|null $id Review id.
     * @return void Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $review = $this->Reviews->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $review = $this->Reviews->patchEntity($review, $this->request->data);
            if ($this->Reviews->save($review)) {
                $this->Flash->success(___('the review has been saved'), ['plugin' => 'Alaxos']);
                return $this->redirect(['action' => 'view', $review->id]);
            } else {
                $this->Flash->error(___('the review could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        $restaurants = $this->Reviews->Restaurants->find('list', ['limit' => 200]);
        $users = $this->Reviews->Users->find('list', ['limit' => 200]);
        $this->set(compact('review', 'restaurants', 'users'));
        $this->set('_serialize', ['review']);
    }

    /**
     * Delete method
     *
     * @param string|null $id Review id.
     * @return void Redirects to index.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $review = $this->Reviews->get($id);
        
        try
        {
            if ($this->Reviews->delete($review)) {
                $this->Flash->success(___('the review has been deleted'), ['plugin' => 'Alaxos']);
            } else {
                $this->Flash->error(___('the review could not be deleted. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        catch(\Exception $ex)
        {
            if($ex->getCode() == 23000)
            {
                $this->Flash->error(___('the review could not be deleted as it is still used in the database'), ['plugin' => 'Alaxos']);
            }
            else
            {
                $this->Flash->error(sprintf(__('The review could not be deleted: %s'), $ex->getMessage()), ['plugin' => 'Alaxos']);
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
            
            $query = $this->Reviews->query();
            $query->delete()->where(['id IN' => $this->request->data['checked_ids']]);
            
            try{
                if ($statement = $query->execute()) {
                    $deleted_total = $statement->rowCount();
                    if($deleted_total == 1){
                        $this->Flash->set(___('the selected review has been deleted.'), ['element' => 'Alaxos.success']);
                    }
                    elseif($deleted_total > 1){
                        $this->Flash->set(sprintf(__('The %s selected reviews have been deleted.'), $deleted_total), ['element' => 'Alaxos.success']);
                    }
                } else {
                    $this->Flash->set(___('the selected reviews could not be deleted. Please, try again.'), ['element' => 'Alaxos.error']);
                }
            }
            catch(\Exception $ex){
                $this->Flash->set(___('the selected reviews could not be deleted. Please, try again.'), ['element' => 'Alaxos.error', 'params' => ['exception_message' => $ex->getMessage()]]);
            }
        } else {
            $this->Flash->set(___('there was no review to delete'), ['element' => 'Alaxos.error']);
        }
        
        return $this->redirect(['action' => 'index']);
    }
    
    /**
     * Copy method
     *
     * @param string|null $id Review id.
     * @return void Redirects on successful copy, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function copy($id = null)
    {
        $review = $this->Reviews->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $review = $this->Reviews->newEntity();
            $review = $this->Reviews->patchEntity($review, $this->request->data);
            if ($this->Reviews->save($review)) {
                $this->Flash->success(___('the review has been saved'), ['plugin' => 'Alaxos']);
                return $this->redirect(['action' => 'view', $review->id]);
            } else {
                $this->Flash->error(___('the review could not be saved. Please, try again.'), ['plugin' => 'Alaxos']);
            }
        }
        $restaurants = $this->Reviews->Restaurants->find('list', ['limit' => 200]);
        $users = $this->Reviews->Users->find('list', ['limit' => 200]);
        
        $review->id = $id;
        $this->set(compact('review', 'restaurants', 'users'));
        $this->set('_serialize', ['review']);
    }
}
