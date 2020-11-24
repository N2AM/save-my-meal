<!--<div class="restaurants index">
        
        <h2><?= ___('restaurants'); ?></h2>
        
        <div class="panel panel-default">
                <div class="panel-heading">
		<?php
		echo $this->Navbars->actionButtons(['paginate_infos' => true, 'select_pagination_limit' => true]);
		?>
                </div>
                <div class="panel-body">
                        
                        <div class="table-responsive">
                        
                        <table cellpadding="0" cellspacing="0" class="table table-striped table-hover table-condensed">
                        <thead>
                        <tr class="sortHeader">
                                <th></th>
                                <th><?php echo $this->Paginator->sort('city_id', ___('city_id')); ?></th>
                                <th><?php echo $this->Paginator->sort('description', ___('description')); ?></th>
                                <th><?php echo $this->Paginator->sort('price', ___('price')); ?></th>
                                <th><?php echo $this->Paginator->sort('photo', ___('photo')); ?></th>
                                <th><?php echo $this->Paginator->sort('res_lat', ___('res_lat')); ?></th>
                                <th><?php echo $this->Paginator->sort('res_long', ___('res_long')); ?></th>
                                <th><?php echo $this->Paginator->sort('category_id', ___('category_id')); ?></th>
                                <th class="actions"></th>
                        </tr>
                        <tr class="filterHeader">
                                <td>
				<?php
				echo $this->AlaxosForm->checkbox('_Tech.selectAll', ['id' => 'TechSelectAll']);
				
				echo $this->AlaxosForm->create($search_entity, array('url' => [], 'class' => 'form-horizontal', 'role' => 'form', 'novalidate' => 'novalidate'));
				?>
                                </td>
                                <td>
					<?php
					echo $this->AlaxosForm->filterField('city_id');
					?>
                                </td>
                                <td>
					<?php
					echo $this->AlaxosForm->filterField('description');
					?>
                                </td>
                                <td>
					<?php
					echo $this->AlaxosForm->filterField('price');
					?>
                                </td>
                                <td>
					<?php
					echo $this->AlaxosForm->filterField('photo');
					?>
                                </td>
                                <td>
					<?php
					echo $this->AlaxosForm->filterField('res_lat');
					?>
                                </td>
                                <td>
					<?php
					echo $this->AlaxosForm->filterField('res_long');
					?>
                                </td>
                                <td>
					<?php
					echo $this->AlaxosForm->filterField('category_id');
					?>
                                </td>
                                <td>
					<?php
					echo $this->AlaxosForm->button(___('filter'), ['class' => 'btn btn-default']);
					echo $this->AlaxosForm->end();
					?>
                                </td>
                        </tr>
                        </thead>
                        
                        <tbody>
			<?php foreach ($restaurants as $i => $restaurant): ?>
                                <tr>
                                        <td>
						<?php
						echo $this->AlaxosForm->checkBox('Restaurant.' . $i . '.id', array('value' => $restaurant->id, 'class' => 'model_id'));
						?>
                                        </td>
                                        <td>
						<?php echo $restaurant->has('city') ? $this->Html->link($restaurant->city->name, ['controller' => 'Cities', 'action' => 'view', $restaurant->city->id]) : ''; ?>
                                        </td>
                                        <td>
						<?php echo h($restaurant->description) ?>
                                        </td>
                                        <td>
						<?php echo h($restaurant->price) ?>
                                        </td>
                                        <td>
						<?php echo h($restaurant->photo) ?>
                                        </td>
                                        <td>
						<?php echo h($restaurant->res_lat) ?>
                                        </td>
                                        <td>
						<?php echo h($restaurant->res_long) ?>
                                        </td>
                                        <td>
						<?php echo $restaurant->has('category') ? $this->Html->link($restaurant->category->name, ['controller' => 'Categories', 'action' => 'view', $restaurant->category->id]) : ''; ?>
                                        </td>
                                        <td class="actions">
						<?php 
// 						echo $this->Navbars->actionButtons(['buttons_group' => 'list_item', 'buttons_list_item' => [['view', 'edit', 'delete']], 'model_id' => $restaurant->id]);
						?>
                                                
						<?php 
// 						echo $this->Html->link('<span class="glyphicon glyphicon-search"></span> ' . __d('alaxos', 'view'), ['action' => 'view', $restaurant->id], ['class' => 'to_view', 'escape' => false]);
// 						echo ' ';
// 						echo $this->Html->link('<span class="glyphicon glyphicon-pencil"></span> ' . __d('alaxos', 'edit'), ['action' => 'edit', $restaurant->id], ['escape' => false]);
// 						echo ' ';
// 						echo $this->Form->postLink('<span class="glyphicon glyphicon-trash"></span> ' . __d('alaxos', 'delete'), ['action' => 'delete', $restaurant->id], ['confirm' => __('Are you sure you want to delete # {0}?', $restaurant->id), 'escape' => false]);
						?>
                                                
						<?php 
						echo $this->Html->link('<span class="fas fa-search"></span>', ['action' => 'view', $category->id], ['class' => 'to_view', 'escape' => false]);
						echo '&nbsp;&nbsp;';
						echo $this->Html->link('<span class="fas fa-edit"></span>', ['action' => 'edit', $category->id], ['escape' => false]);
						echo '&nbsp;&nbsp;';
						echo $this->Form->postLink('<span class="fas fa-trash-alt"></span>', ['action' => 'delete', $category->id], ['confirm' => __('Are you sure you want to delete # {0}?', $category->id), 'escape' => false]);
						?>
                                        </td>
                                </tr>
			<?php endforeach; ?>
                        </tbody>
                        
                        </table>
                        
                        </div>
                        
			<?php
			if(isset($restaurants) && $restaurants->count() > 0)
			{
				echo '<div class="row">';
				echo '<div class="col-md-1">';
				echo $this->AlaxosForm->postActionAllButton(__d('alaxos', 'delete all'), ['action' => 'delete_all'], ['confirm' => __d('alaxos', 'do you really want to delete the selected items ?')]);
				echo '</div>';
				echo '</div>';
			}
			?>
                        
                        <div class="paging text-center">
                                <ul class="pagination pagination-sm">
				<?php
				$this->Paginator->templates(['ellipsis' => '<li class="ellipsis"><span>...</span></li>']);
				echo $this->Paginator->prev('< ' . __('previous'));
				echo $this->Paginator->numbers(['first' => 2, 'last' => 2]);
				echo $this->Paginator->next(__('next') . ' >');
				?>
                                </ul>
                        </div>
                        
                </div>
        </div>
</div>

<script type="text/javascript">
jQuery(document).ready(function(){
        Alaxos.start();
});
</script>-->
<div class="row mt-3" style="height: 100%">
    <div class="col-md-6 scroll">



    </div>
    <div class="col-md-6">
        <div class='map'>
            <div id="map"></div>
        </div>
    </div>
</div>

<div class="modal" id="rateModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">

      </div>

      <!-- Modal body -->
      <div class="modal-body">
          <h3>Rates</h3> 
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
          <ul>

          </ul>
        <!--<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>-->
      </div>

    </div>
  </div>
</div>

<!--Load the API from the specified URL
* The async attribute allows the browser to render the page while the API loads
* The key parameter will contain your own API key (which is not needed for this tutorial)
* The callback parameter executes the initMap() function
-->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <script src="<?=URL?>js/restaurants.js"></script>
      <!--<script src="<?=URL?>js/map.js"></script>-->
      <!--<script src="<?=URL?>js/sidebar.js"></script>-->
      <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtM4_bB1Po3RGL2FtSKjP0BiyNRtx0E8A&callback=initMap">
      </script>
