<div class="offers index mt-4">
	
	<h2><?= ___('offers'); ?></h2>
	
	<div class="panel panel-default">
<!--		<div class="panel-heading">
		<?php
		echo $this->Navbars->actionButtons(['paginate_infos' => true, 'select_pagination_limit' => true]);
		?>
		</div>-->
		<div class="panel-body">
			
			<div class="table-responsive">
			
			<table cellpadding="0" cellspacing="0" class="table table-striped table-hover table-condensed">
			<thead>
			<tr class="sortHeader">
				<th></th>
				<th><?php echo $this->Paginator->sort('restaurant_id', ___('Restaurant ID')); ?></th>
				<th><?php echo $this->Paginator->sort('percentage', ___('Percentage')); ?></th>
				<th><?php echo $this->Paginator->sort('start_time', ___('Start Time')); ?></th>
				<th><?php echo $this->Paginator->sort('end_time', ___('End Time')); ?></th>
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
					echo $this->AlaxosForm->filterField('percentage');
					?>
				</td>
				<td>
					<?php
					echo $this->AlaxosForm->filterField('start_time');
					?>
				</td>
				<td>
					<?php
					echo $this->AlaxosForm->filterField('end_time');
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
			<?php foreach ($offers as $i => $offer): ?>
				<tr>
					<td>
						<?php
						echo $this->AlaxosForm->checkBox('Offer.' . $i . '.id', array('value' => $offer->id, 'class' => 'model_id'));
						?>
					</td>
					<td>
						<?php echo $offer->has('restaurant') ? $this->Html->link($offer->restaurant->id, ['controller' => 'Restaurants', 'action' => 'view', $offer->restaurant->id]) : ''; ?>
					</td>
					<td>
						<?php echo h($offer->percentage) ?>
					</td>
					<td>
						<?php echo h($offer->start_time) ?>
					</td>
					<td>
						<?php echo h($offer->end_time) ?>
					</td>
					<td class="actions">
						<?php 
// 						echo $this->Navbars->actionButtons(['buttons_group' => 'list_item', 'buttons_list_item' => [['view', 'edit', 'delete']], 'model_id' => $offer->id]);
						?>
						
						<?php 
// 						echo $this->Html->link('<span class="glyphicon glyphicon-search"></span> ' . __d('alaxos', 'view'), ['action' => 'view', $offer->id], ['class' => 'to_view', 'escape' => false]);
// 						echo ' ';
// 						echo $this->Html->link('<span class="glyphicon glyphicon-pencil"></span> ' . __d('alaxos', 'edit'), ['action' => 'edit', $offer->id], ['escape' => false]);
// 						echo ' ';
// 						echo $this->Form->postLink('<span class="glyphicon glyphicon-trash"></span> ' . __d('alaxos', 'delete'), ['action' => 'delete', $offer->id], ['confirm' => __('Are you sure you want to delete # {0}?', $offer->id), 'escape' => false]);
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
			if(isset($offers) && $offers->count() > 0)
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
</div>

<script type="text/javascript">
jQuery(document).ready(function(){
	Alaxos.start();
});
</script>