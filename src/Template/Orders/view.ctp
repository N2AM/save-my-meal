<div class="col-md-12" style="margin: 25px auto;">
<div class="card mb-3">
            <img class="card-img-top" src="<?=URL?>img/food.jpg" alt="Card image cap">
          <!--              <div class="tag d-flex justify-content-between">
                <div>
                    <i class="fas fa-map-marker-alt"></i>
                    <span> 1km</span>
                </div>
                <div>
                    <button class='rate-btn' type="button" data-toggle="modal" data-target="#rateModal">
                    <span>(325)</span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span></button>

                </div>
            </div> -->
            <div class='bar d-flex justify-content-between'>
                <div class="d-flex">
                    <div class="stock"></div>
                    <span><?php 
					echo h($order->amount);
					?> Products</span>
                </div>
                <div class="price"><?php 
					echo h($order->total);
					?> L.E</div>
            </div>

            <div class="card-body">
                <h5 class="card-title">					<?php echo $order->has('restaurant') ? $this->Html->link($order->restaurant->name, ['controller' => 'Restaurants', 'action' => 'view', $order->restaurant->id]) : '' ?>
</h5>
                

            </div>
        </div>
</div>
<div class="orders view mt-4 col-md-12">
	<h2><?php echo ___('Description'); ?></h2>
	
	<div class="panel panel-default">
<!--		<div class="panel-heading">
		<?php
		echo $this->Navbars->actionButtons(['buttons_group' => 'view', 'model_id' => $order->id]);
		?>
		</div>-->
		<div class="panel-body">
			<dl class="dl-horizontal">
			
				<dt><?php echo __('Restaurant'); ?></dt>
				<dd>
					<?php echo $order->has('restaurant') ? $this->Html->link($order->restaurant->name, ['controller' => 'Restaurants', 'action' => 'view', $order->restaurant->id]) : '' ?>
				</dd>
					
				<dt><?php echo __('User'); ?></dt>
				<dd>
					<?php echo $order->has('user') ? $this->Html->link($order->user->username, ['controller' => 'Users', 'action' => 'view', $order->user->id]) : '' ?>
				</dd>
					
<!--				<dt><?= ___('amount'); ?></dt>
				<dd>
					<?php 
					echo h($order->amount);
					?>
				</dd>-->
				
<!--				<dt><?= ___('total'); ?></dt>
				<dd>
					<?php 
					echo h($order->total);
					?>
				</dd>-->
				
				<dt><?= ___('Payment Type'); ?></dt>
				<dd>
					<?php 
					echo h($order->type);
					?>
				</dd>
				
			</dl>
			<?php 
			echo $this->element('Alaxos.create_update_infos', ['entity' => $order], ['plugin' => 'Alaxos']);
			?>
			<div>
			</div>
		</div>
	</div>
</div>
	
<div class="modal" id="rateModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Clients Rates</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
       Rates
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="<?=URL?>js/orders.js"></script>