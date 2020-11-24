<!DOCTYPE html>
<html lang="ar">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>codesroots</title>

    <!-- Bootstrap -->
    <!-- <link href="<?=URL?>css/bootstrap.css" rel="stylesheet"> -->
    <link href="<?=URL?>css/header.css" rel="stylesheet">
    <!-- Bootstrap RTL -->
    <!-- <link href="<?=URL?>css/bootstrap-rtl.min.css" rel="stylesheet"> -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <!-- Fontawesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossorigin="anonymous">

    <!-- Main style -->
    <link href="<?=URL?>css/style.css" rel="stylesheet">
    <link href="<?=URL?>css/dashboard.css" rel="stylesheet">
    <link href="<?=URL?>css/sidebar.css" rel="stylesheet">


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <script src="<?=URL?>js/sidebar.js"></script>
      <script src="<?=URL?>js/script.js"></script>


    <![endif]-->
</head>

<body>
   <!-- <div class="container" style="background-image: url(https://savemymeal.com/wp-content/uploads/2019/03/salad-2068220_1920.jpg);">
        <div class='overlay'></div> -->
        <div class="row">
            <div class="col-md-4 col-sm-6 col-12 mt-5">
                <div class="category"><a href="<?=URL?>categories"><img src="<?=URL?>img/categories.svg"><h5 class='mt-4' >Categories</h5>
                    </a>
                    <div class='numbers'><h5><?=$categorycount?></h5></div></div>
</div>
            <div class="col-md-4 col-sm-6 col-12 mt-5">
                <div class="category">
                    <a href="<?=URL?>restaurants"><img src="<?=URL?>img/restaurants.svg">
                        <h5 class='mt-4' >Restaurants</h5>
                    </a>
                    <div class='numbers'><h5><?=$restaurantcount?></h5></div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 col-12 mt-5">
                <div class="category"><a href="<?=URL?>orders"><img src="<?=URL?>img/orders.svg"><h5 class='mt-4' >Orders</h5>
                    </a>
                    <div class='numbers'><h5><?=$orderscount?></h5></div></div>
</div>
            <div class="col-md-4 col-sm-6 col-12 mt-5">
                <div class="category"><a href="<?=URL?>countries"><img src="<?=URL?>img/countries.svg"><h5 class='mt-4' >Countries</h5>
                    </a>
                    <div class='numbers'><h5><?=$countrycount?></h5></div></div>
</div>
            <div class="col-md-4 col-sm-6 col-12 mt-5">
                <div class="category"><a href="<?=URL?>cities"><img src="<?=URL?>img/cities.svg"><h5 class='mt-4' >Cities</h5>
                    </a>
                    <div class='numbers'><h5><?=$citycount?></h5></div></div>
</div>
            <div class="col-md-4 col-sm-6 col-12 mt-5">
                <div class="category"><a href="<?=URL?>Users"><img src="<?=URL?>img/clients.svg"><h5 class='mt-4' >Users</h5>
                    </a>
                    <div class='numbers'><h5><?=$usercount?></h5></div></div>
</div>
            
        </div>
  <!--  </div> -->
</body>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="<?=URL?>js1/bootstrap.min.js"></script>
    <script src="<?=URL?>js1/jquery.nicescroll.min.js"></script>
    <script src="<?=URL?>js1/script.js"></script>
</body>

</html>

