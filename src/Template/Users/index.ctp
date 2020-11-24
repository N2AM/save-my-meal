<div class="users index mt-4">
	
	<h2><?= ___('users'); ?></h2>
	
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
				<th><?php echo $this->Paginator->sort('user_group_id', ___('User Group ID')); ?></th>
				<th><?php echo $this->Paginator->sort('username', ___('Username')); ?></th>
				<th><?php echo $this->Paginator->sort('active', ___('Active')); ?></th>
				<th><?php echo $this->Paginator->sort('email_verified', ___('E-mail Verified')); ?></th>
				<th><?php echo $this->Paginator->sort('email', ___('Email')); ?></th>
				<th><?php echo $this->Paginator->sort('mobile', ___('Mobile')); ?></th>
				<!--<th class="actions col-md-2"></th>-->
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
					echo $this->AlaxosForm->filterField('user_group_id');
					?>
				</td>
				<td>
					<?php
					echo $this->AlaxosForm->filterField('username');
					?>
				</td>
				<td>
					<?php
					echo $this->AlaxosForm->filterField('active');
					?>
				</td>
				<td>
					<?php
					echo $this->AlaxosForm->filterField('email_verified');
					?>
				</td>
				<td>
					<?php
					echo $this->AlaxosForm->filterField('email');
					?>
				</td>
				<td>
					<?php
					echo $this->AlaxosForm->filterField('mobile');
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
			<?php foreach ($users as $i => $user): ?>
				<tr>
					<td>
						<?php
						echo $this->AlaxosForm->checkBox('User.' . $i . '.id', array('value' => $user->id, 'class' => 'model_id'));
						?>
					</td>
					<td>
						<?php echo $user->has('user_group') ? $this->Html->link($user->user_group->name, ['controller' => 'UserGroups', 'action' => 'view', $user->user_group->id]) : ''; ?>
					</td>
					<td>
						<?php echo h($user->username) ?>
					</td>
					<td>
						<?php echo h($user->active) ?>
					</td>
					<td>
						<?php echo h($user->email_verified) ?>
					</td>
					<td>
						<?php echo h($user->email) ?>
					</td>
					<td>
						<?php echo h($user->mobile) ?>
					</td>
					<td class="actions">
						<?php 
// 						echo $this->Navbars->actionButtons(['buttons_group' => 'list_item', 'buttons_list_item' => [['view', 'edit', 'delete']], 'model_id' => $user->id]);
						?>
						
						<?php 
// 						echo $this->Html->link('<span class="glyphicon glyphicon-search"></span> ' . __d('alaxos', 'view'), ['action' => 'view', $user->id], ['class' => 'to_view', 'escape' => false]);
// 						echo ' ';
// 						echo $this->Html->link('<span class="glyphicon glyphicon-pencil"></span> ' . __d('alaxos', 'edit'), ['action' => 'edit', $user->id], ['escape' => false]);
// 						echo ' ';
// 						echo $this->Form->postLink('<span class="glyphicon glyphicon-trash"></span> ' . __d('alaxos', 'delete'), ['action' => 'delete', $user->id], ['confirm' => __('Are you sure you want to delete # {0}?', $user->id), 'escape' => false]);
						?>
						
						<?php 
						echo $this->Html->link('<span class="far fa-eye"></span>', ['action' => 'view', $user->id], ['class' => 'to_view', 'escape' => false]);
						echo '&nbsp;&nbsp;';
						echo $this->Html->link('<span class="fas fa-edit"></span>', ['action' => 'edit', $user->id], ['escape' => false]);
						echo '&nbsp;&nbsp;';
						echo $this->Form->postLink('<span class="fas fa-trash-alt"></span>', ['action' => 'delete', $user->id], ['confirm' => __('Are you sure you want to delete # {0}?', $category->id), 'escape' => false]);
						?>
					</td>
				</tr>
			<?php endforeach; ?>
			</tbody>
			
			</table>
			
			</div>
			
			<?php
			if(isset($users) && $users->count() > 0)
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