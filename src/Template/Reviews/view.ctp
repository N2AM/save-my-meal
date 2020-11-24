
<div class="reviews view mt-4">
	<h2><?php echo ___('review'); ?></h2>
	
	<div class="panel panel-default">
<!--		<div class="panel-heading">
		<?php
		echo $this->Navbars->actionButtons(['buttons_group' => 'view', 'model_id' => $review->id]);
		?>
		</div>-->
		<div class="panel-body">
			<dl class="dl-horizontal">
			
				<dt><?php echo __('Restaurant'); ?></dt>
				<dd>
					<?php echo $review->has('restaurant') ? $this->Html->link($review->restaurant->id, ['controller' => 'Restaurants', 'action' => 'view', $review->restaurant->id]) : '' ?>
				</dd>
					
				<dt><?php echo __('User'); ?></dt>
				<dd>
					<?php echo $review->has('user') ? $this->Html->link($review->user->id, ['controller' => 'Users', 'action' => 'view', $review->user->id]) : '' ?>
				</dd>
					
				<dt><?= ___('rate'); ?></dt>
				<dd>
					<?php 
					echo h($review->rate);
					?>
				</dd>
				
				<dt><?= ___('comment'); ?></dt>
				<dd>
					<?php 
					echo h($review->comment);
					?>
				</dd>
				
			</dl>
			<?php 
			echo $this->element('Alaxos.create_update_infos', ['entity' => $review], ['plugin' => 'Alaxos']);
			?>
			<div>
			</div>
		</div>
	</div>
</div>
	
