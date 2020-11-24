
<div class="offers view mt-4">
	<h2><?php echo ___('offer'); ?></h2>
	
	<div class="panel panel-default">
		<div class="panel-heading">
		<?php
		echo $this->Navbars->actionButtons(['buttons_group' => 'view', 'model_id' => $offer->id]);
		?>
		</div>
		<div class="panel-body">
			<dl class="dl-horizontal">
			
				<dt><?php echo __('Restaurant'); ?></dt>
				<dd>
					<?php echo $offer->has('restaurant') ? $this->Html->link($offer->restaurant->id, ['controller' => 'Restaurants', 'action' => 'view', $offer->restaurant->id]) : '' ?>
				</dd>
					
				<dt><?= ___('percentage'); ?></dt>
				<dd>
					<?php 
					echo h($offer->percentage);
					?>
				</dd>
				
				<dt><?= ___('start_time'); ?></dt>
				<dd>
					<?php 
					echo h($offer->start_time);
					?>
				</dd>
				
				<dt><?= ___('end_time'); ?></dt>
				<dd>
					<?php 
					echo h($offer->end_time);
					?>
				</dd>
				
			</dl>
			<?php 
			echo $this->element('Alaxos.create_update_infos', ['entity' => $offer], ['plugin' => 'Alaxos']);
			?>
			<div>
			</div>
		</div>
	</div>
</div>
	
