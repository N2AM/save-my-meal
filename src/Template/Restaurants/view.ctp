
<div class="restaurants view mt-4 col-md-12">
<!--	<h2><?php echo ___('restaurant'); ?></h2>
        
        <div class="panel panel-default">
                <div class="panel-heading">
		<?php
		echo $this->Navbars->actionButtons(['buttons_group' => 'view', 'model_id' => $restaurant->id]);
		?>
                </div>
                <div class="panel-body">
                        <dl class="dl-horizontal">
                        
                                <dt><?php echo __('City'); ?></dt>
                                <dd>
					<?php echo $restaurant->has('city') ? $this->Html->link($restaurant->city->name, ['controller' => 'Cities', 'action' => 'view', $restaurant->city->id]) : '' ?>
                                </dd>
                                        
                                <dt><?= ___('description'); ?></dt>
                                <dd>
					<?php 
					echo h($restaurant->description);
					?>
                                </dd>
                                
                                <dt><?= ___('price'); ?></dt>
                                <dd>
					<?php 
					echo h($restaurant->price);
					?>
                                </dd>
                                
                                <dt><?= ___('photo'); ?></dt>
                                <dd>
					<?php 
					echo h($restaurant->photo);
					?>
                                </dd>
                                
                                <dt><?= ___('res_lat'); ?></dt>
                                <dd>
					<?php 
					echo h($restaurant->res_lat);
					?>
                                </dd>
                                
                                <dt><?= ___('res_long'); ?></dt>
                                <dd>
					<?php 
					echo h($restaurant->res_long);
					?>
                                </dd>
                                
                                <dt><?php echo __('Category'); ?></dt>
                                <dd>
					<?php echo $restaurant->has('category') ? $this->Html->link($restaurant->category->name, ['controller' => 'Categories', 'action' => 'view', $restaurant->category->id]) : '' ?>
                                </dd>
                                        
                        </dl>
			<?php 
			echo $this->element('Alaxos.create_update_infos', ['entity' => $restaurant], ['plugin' => 'Alaxos']);
			?>
                        <div>
                        </div>
                </div>
        </div>-->
    <div class="card mb-3">
        <img class="card-img-top" src="" alt="Card image cap">
        <div class="tag d-flex justify-content-between">
            <div>
                <i class="fas fa-map-marker-alt"></i>
                <!--<span> 1km</span>-->
            </div>
            <div>
                <button class='rate-btn' type="button" data-toggle="modal" data-target ="#rateModal" >
                    <span class='rate-count'></span>
                    <span class="far fa-star"></span>
                    <span class="far fa-star"></span>
                    <span class="far fa-star"></span>
                    <span class="far fa-star"></span>
                    <span class="far fa-star"></span></button>

            </div>
        </div>
        <!--        <div class='bar d-flex justify-content-between'>
                    <div class="d-flex">
                        <div class="stock"></div>
                        <span></span>
                    </div>
                    <div class="price">10 L.E</div>
                </div>-->

        <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>

        </div>
    </div>
    <div class="description">
        <h5>Description</h5>
        <p></p>

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
                    <li class="d-flex justify-content-between">

                    </li>
                </ul>
                <!--<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>-->
            </div>

        </div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<!--<script src="<?=URL?>js/sidebar.js"></script>-->
<script src="<?=URL?>js/script.js"></script>
<script src="<?=URL?>js/restaurant.js"></script>
<script src="<?=URL?>js/map.js"></script>
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtM4_bB1Po3RGL2FtSKjP0BiyNRtx0E8A&callback=initMap">
</script>
