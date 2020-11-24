
<div class="users view mt-4">
	<h2><?php echo ___('user'); ?></h2>
	
	<div class="panel panel-default">
<!--		<div class="panel-heading">
		<?php
		echo $this->Navbars->actionButtons(['buttons_group' => 'view', 'model_id' => $user->id]);
		?>
		</div>-->
		<div class="panel-body mt-3">
			<dl class="dl-horizontal">
			
				<dt><?php echo __('User Group'); ?></dt>
				<dd>
					<?php echo $user->has('user_group') ? $this->Html->link($user->user_group->name, ['controller' => 'UserGroups', 'action' => 'view', $user->user_group->id]) : '' ?>
				</dd>
					
				<dt><?= ___('username'); ?></dt>
				<dd>
					<?php 
					echo h($user->username);
					?>
				</dd>
				
				<dt><?= ___('active'); ?></dt>
				<dd>
					<?php 
					echo h($user->active);
					?>
				</dd>
				
				<dt><?= ___('email Verified'); ?></dt>
				<dd>
					<?php 
					echo h($user->email_verified);
					?>
				</dd>
				
				<dt><?= ___('email'); ?></dt>
				<dd>
					<?php 
					echo h($user->email);
					?>
				</dd>
				
				<dt><?= ___('mobile'); ?></dt>
				<dd>
					<?php 
					echo h($user->mobile);
					?>
				</dd>
				
			</dl>
			<?php 
			echo $this->element('Alaxos.create_update_infos', ['entity' => $user], ['plugin' => 'Alaxos']);
			?>
			<div>
			</div>
		</div>
	</div>
</div>
	
