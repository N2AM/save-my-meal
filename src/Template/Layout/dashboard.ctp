
<!DOCTYPE html>
<html lang="ar">
<head>
	<?php echo $this->Html->charset(); ?>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script language="javascript">
		var urlForJs="<?php echo SITE_URL ?>";
	</script>

</head>

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php echo $this->element('Usermgmt.message_notification'); ?>
<?php echo $this->Html->charset();?>
<?php  echo $this->element('dashboard/header'); ?>

                      
                           
                <main><?php echo $this->fetch('content'); ?></main>
								
								</div>
        </div>
    </div>

  </div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="<?=URL?>js/bootstrap.min.js"></script>
    <!-- Nice Scroll -->
    <script src="<?=URL?>js/jquery.nicescroll.min.js"></script> 
    <!-- Customize script -->
    <script src="<?=URL?>js/script.js"></script>
    <script src="<?=URL?>js/sidebar.js"></script>
    
    <script>
      $("body").niceScroll();
    </script>
</body>

</html>



