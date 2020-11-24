<!--<div class="orders index mt-4">
        
        <h2><?= ___('orders'); ?></h2>
        
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
                                <th><?php echo $this->Paginator->sort('restaurant_id', ___('restaurant ID')); ?></th>
                                <th><?php echo $this->Paginator->sort('user_id', ___('user ID')); ?></th>
                                <th><?php echo $this->Paginator->sort('amount', ___('amount')); ?></th>
                                <th><?php echo $this->Paginator->sort('total', ___('total')); ?></th>
                                <th><?php echo $this->Paginator->sort('type', ___('type')); ?></th>
                                <th style="width:160px;"><?php echo $this->Paginator->sort('created', ___('created')); ?></th>
                                <th style="width:160px;"><?php echo $this->Paginator->sort('modified', ___('modified')); ?></th>
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
					echo $this->AlaxosForm->filterField('restaurant_id');
					?>
                                </td>
                                <td>
					<?php
					echo $this->AlaxosForm->filterField('user_id');
					?>
                                </td>
                                <td>
					<?php
					echo $this->AlaxosForm->filterField('amount');
					?>
                                </td>
                                <td>
					<?php
					echo $this->AlaxosForm->filterField('total');
					?>
                                </td>
                                <td>
					<?php
					echo $this->AlaxosForm->filterField('type');
					?>
                                </td>
                                <td>
					<?php
					echo $this->AlaxosForm->filterDate('created');
					?>
                                </td>
                                <td>
					<?php
					echo $this->AlaxosForm->filterDate('modified');
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
                        
                        <tbody class="users">
			<?php foreach ($orders as $i => $order): ?>
                                <tr>
                                        <td>
						<?php
						echo $this->AlaxosForm->checkBox('Order.' . $i . '.id', array('value' => $order->id, 'class' => 'model_id'));
						?>
                                        </td>
                                        <td>
						<?php echo $order->has('restaurant') ? $this->Html->link($order->restaurant->id, ['controller' => 'Restaurants', 'action' => 'view', $order->restaurant->id]) : ''; ?>
                                        </td>
                                        <td>
						<?php echo $order->has('user') ? $this->Html->link($order->user->id, ['controller' => 'Users', 'action' => 'view', $order->user->id]) : ''; ?>
                                        </td>
                                        <td>
						<?php echo h($order->amount) ?>
                                        </td>
                                        <td>
						<?php echo h($order->total) ?>
                                        </td>
                                        <td>
						<?php echo h($order->type) ?>
                                        </td>
                                        <td>
						<?php echo h($order->to_display_timezone('created')); ?>
                                        </td>
                                        <td>
						<?php echo h($order->to_display_timezone('modified')); ?>
                                        </td>
                                        <td class="actions">
						<?php 
// 						echo $this->Navbars->actionButtons(['buttons_group' => 'list_item', 'buttons_list_item' => [['view', 'edit', 'delete']], 'model_id' => $order->id]);
						?>
                                                
						<?php 
// 						echo $this->Html->link('<span class="glyphicon glyphicon-search"></span> ' . __d('alaxos', 'view'), ['action' => 'view', $order->id], ['class' => 'to_view', 'escape' => false]);
// 						echo ' ';
// 						echo $this->Html->link('<span class="glyphicon glyphicon-pencil"></span> ' . __d('alaxos', 'edit'), ['action' => 'edit', $order->id], ['escape' => false]);
// 						echo ' ';
// 						echo $this->Form->postLink('<span class="glyphicon glyphicon-trash"></span> ' . __d('alaxos', 'delete'), ['action' => 'delete', $order->id], ['confirm' => __('Are you sure you want to delete # {0}?', $order->id), 'escape' => false]);
						?>
                                                
						<?php 
						echo $this->Html->link('<span class="glyphicon glyphicon-search"></span>', ['action' => 'view', $order->id], ['class' => 'to_view', 'escape' => false]);
						echo '&nbsp;&nbsp;';
						echo $this->Html->link('<span class="glyphicon glyphicon-pencil"></span>', ['action' => 'edit', $order->id], ['escape' => false]);
						echo '&nbsp;&nbsp;';
						echo $this->Form->postLink('<span class="glyphicon glyphicon-trash"></span>', ['action' => 'delete', $order->id], ['confirm' => __('Are you sure you want to delete # {0}?', $order->id), 'escape' => false]);
						?>
                                        </td>
                                </tr>
			<?php endforeach; ?>
                        </tbody>
                        
                        </table>
                        
                        </div>
                        
			<?php
			if(isset($orders) && $orders->count() > 0)
			{
				echo '<div class="row">';
				echo '<div class="col-md-1">';
				echo $this->AlaxosForm->postActionAllButton(__d('alaxos', 'Delete All'), ['action' => 'delete_all'], ['confirm' => __d('alaxos', 'do you really want to delete the selected items ?')]);
				echo '</div>';
				echo '</div>';
			}
			?>
                        
                        <div class="paging text-center">
                                <ul class="pagination d-flex justify-content-center pagination-sm">
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

</div>-->
<div class="row mt-3" style="height: 100%">
    <div class="col-md-11 scroll">



    </div>
</div>

<script type="text/javascript">
    jQuery(document).ready(function () {
        Alaxos.start();
    });
</script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<script src="<?=URL?>js/orders.js"></script>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtM4_bB1Po3RGL2FtSKjP0BiyNRtx0E8A&callback=initMap">
</script>