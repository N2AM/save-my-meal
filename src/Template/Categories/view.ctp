
<div class="categories view mt-4">
	<h2><?php echo ___('category'); ?></h2>
	
	<div class="panel panel-default">
		<div class="panel-heading">
		<?php
		echo $this->Navbars->actionButtons(['buttons_group' => 'view', 'model_id' => $category->id]);
		?>
		</div>
		<div class="panel-body">
			<dl class="dl-horizontal">
			
				<dt><?= ___('name'); ?></dt>
				<dd>
					<?php 
					echo h($category->name);
					?>
				</dd>
				
			</dl>
			<?php 
			echo $this->element('Alaxos.create_update_infos', ['entity' => $category], ['plugin' => 'Alaxos']);
			?>
			<div>
			</div>
		</div>
	</div>
</div>
	
