
<div class="socialmedias view">
	<h2><?php echo ___('socialmedia'); ?></h2>
	
	<div class="panel panel-default">
		<div class="panel-heading">
		<?php
		echo $this->Navbars->actionButtons(['buttons_group' => 'view', 'model_id' => $socialmedia->id]);
		?>
		</div>
		<div class="panel-body">
			<dl class="dl-horizontal">
			
				<dt><?= ___('link'); ?></dt>
				<dd>
					<?php 
					echo h($socialmedia->link);
					?>
				</dd>
				
				<dt><?= ___('name'); ?></dt>
				<dd>
					<?php 
					echo h($socialmedia->name);
					?>
				</dd>
				
			</dl>
			<?php 
			echo $this->element('Alaxos.create_update_infos', ['entity' => $socialmedia], ['plugin' => 'Alaxos']);
			?>
			<div>
			</div>
		</div>
	</div>
</div>
	
