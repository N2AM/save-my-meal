<!DOCTYPE html>
<html lang="ar">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>codesroots</title>

    <!-- Bootstrap -->
    
    <link href="<?=URL?>css/bootstrap.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/css/bootstrap-datepicker.min.css" >
    <!-- Bootstrap RTL -->
    <link href="<?=URL?>css/bootstrap-rtl.min.css" rel="stylesheet">

    <!-- Fontawesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossorigin="anonymous">

    <!-- Main style -->
    <link rel="stylesheet" media="screen" type="text/css" href="css/colorpicker.css" />

    <link href="<?=URL?>css/stylen.css" rel="stylesheet">
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="<?=URL?>js/bootstrap.min.js"></script>
    <!-- Nice Scroll -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js
"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
    <div class="dashboard">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-2">
                    <div class="sideMenu">
                        <div class="person">
                            <div class="user-image" style="padding: 95px 0;">
                                                                   <?php
				 if($this->UserAuth->getGroupId()==1)
				 {
                            if($adminofphoto=="" || $adminofphoto== null){?>
	<img  width="100%" style="padding: 0"src="<?=URL?>img/no.png">

<?php
}else{?>
		<img  width="100%" style="padding: 0" src="<?=$adminofphoto?>">
<?php
}
				 }
                                 
                                 if($this->UserAuth->getGroupId()==3){
                         if($storephoto=="" || $storephoto== null){?>
	<img  width="100%" style="padding: 20px"src="<?=URL?>img/no.png">

<?php
}else{?>
		<img  width="100%" style="padding: 20px" src="<?=$storephoto?>">
<?php
}   
                                 }
                                 ?> 	
                            </div>
                            <nav>
				
                                <ul class="sideMenuList">
				   <?php
                        if($this->UserAuth->getGroupId()==1){?>
            <?php  echo $this->element('headergroups/adminheader'); ?>
		  <?php
			}if($this->UserAuth->getGroupId()==2){?>
       <?php  echo $this->element('headergroups/companyheader'); ?>

                <?php
                }else if($this->UserAuth->getGroupId()==3){?>
               <?php  echo $this->element('headergroups/storeheader'); ?>
<?php
			}?> 
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="header row">
                            <div class="col-sm-1 col-xs-6">
				
                                <button class=" btn btn-default collapse-sideMenu"><i class="fas fa-bars"></i></button>
				    

                            </div>
			 
                            <div class="col-sm-11  col-xs-6">
                                 <?php if($this->UserAuth->getGroupId()==1){ ?>
              <div id="" class="pull-right" style="color:white"><?= $adminname ?> </div>
                            <?php }else if($this->UserAuth->getGroupId()==3){?>
                                <div id="" class="pull-right" style="color:white"><?= $storename ?> </div>
                            <?php    
                            }
                            
                            
                            ?>
                             
                                <div class="btn-group pull-left">
                                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-cog"></i> </span>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a href="<?=URL?>Companies/profile">الصفحه الشخصية</a></li>
                                        <li><a href="<?=URL?>logout">تسجيل خروج</a></li>
                                    </ul>
                                </div>
				    <div>
                          
                            
                        </div>
                            </div>

                        </div>
                    </div>
                    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="<?=URL?>js/bootstrap.min.js"></script>
    <!-- Customize script -->
    <script src="<?=URL?>plugins/ckeditor/ckeditor.js"></script>