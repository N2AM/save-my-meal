
<!DOCTYPE html>
<html lang="en">

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
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

    <!-- Main style -->
    <link href="<?=URL?>css/style.css" rel="stylesheet">
    <link href="<?=URL?>css/sidebar.css" rel="stylesheet">
<!-- Rating -->
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
<link rel="stylesheet" href="fontawesome-stars.css">
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
      <script src="<?=URL?>js/restaurants.js"></script>
      <script src="<?=URL?>js/map.js"></script>
      <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtM4_bB1Po3RGL2FtSKjP0BiyNRtx0E8A&callback=initMap">
      </script>
    <![endif]-->
</head>

<body>
    <div class="dashboard">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-2 col-md-2 col-sm-2 col-2">
                    <div class="side-Menu">
                        <div class="person">
                            <div class="user-image">
                                <img src="<?=URL?>img/user.png" alt="">
                            </div>
                            <nav>
                                <ul>
                                    <li><a href="<?=URL?>users/dashboard"><i class="fas fa-home" title='Home'></i><span>Home</span></a></li>
                                                                        <li class="sidebar-dropdown">
                                        <a href="#">
                                            <i title='Categories' class="fas fa-cookie-bite"></i>
                                            <span>Categories</span>
                                            <i class="fa fa-caret-down pull-right"></i>
                                        </a>
                                    </li>
                                    <div class="sidebar-submenu-0">
                                        <ul>
                                            <li>
                                                <a href="<?=URL?>categories"><i title='List' class="fas fa-clipboard-list"></i>
<span>List</span>
                  </a>
                                            </li>
                                            <li>
                                                <a href="<?=URL?>categories/add">
                                                    <i title='Add' class="fas fa-plus-square"></i><span title='Add'>Add</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>







                                                                        <li class="sidebar-dropdown">
                                        <a href="#">
                                            <i title='Categories' class="fas fa-user-tie"></i>
                                            <span>Clients</span>
                                            <i class="fa fa-caret-down pull-right"></i>
                                        </a>
                                    </li>
                                    <div class="sidebar-submenu-1">
                                        <ul>
                                            <li>
                                                <a href="<?=URL?>users"><i title='List' class="fas fa-clipboard-list"></i>
<span>List</span>
                  </a>
                                            </li>
                                            <li>
                                                <a href="<?=URL?>users/add">
                                                    <i title='Add' class="fas fa-plus-square"></i><span title='Add'>Add</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <li class="sidebar-dropdown">
                                        <a href="#">
                                            <i title='Orders' class="fas fa-shopping-bag"></i>
                                            <span >Orders</span>
                                            <i class="fa fa-caret-down pull-right"></i>
                                        </a>
                                    </li>
                                    <div class="sidebar-submenu-2">
                                        <ul>
                                            <li>
                                                <a href="<?=URL?>orders"><i title='List' class="fas fa-clipboard-list"></i>
<span>List</span>
                  </a>
                                            </li>
                                            <li>
                                                <a href="<?=URL?>orders/add">
                                                    <i title='Add' class="fas fa-plus-square"></i><span>Add</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                              <!--      <li class="sidebar-dropdown">
                                        <a href="#">
                                            <i title='Reviews' class="fas fa-users"></i>
                                            <span>Reviews</span>
                                            <i class="fa fa-caret-down pull-right"></i>
                                        </a>
                                    </li>
                                    <div class="sidebar-submenu-3">
                                        <ul>
                                            <li>
                                                <a href="<?=URL?>reviews"><i title='List' class="fas fa-clipboard-list"></i>
<span>List</span>
                  </a>
                                            </li>
                                            <li>
                                                <a href="<?=URL?>reviews/add">
                                                    <i title='Add' class="fas fa-plus-square"></i><span>Add</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div> -->
                                    <li class="sidebar-dropdown">
                                        <a href="#">
                                            <i title='Restaurant' class="fas fa-utensils"></i>
                                            <span>Restaurants</span>
                                            <i class="fa fa-caret-down pull-right"></i>
                                        </a>
                                    </li>
                                    <div class="sidebar-submenu-3">
                                        <ul>
                                            <li>
                                                <a href="<?=URL?>Restaurants"><i title='List' class="fas fa-clipboard-list"></i>
                                                    <span>List</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="<?=URL?>restaurants/add">
                                                    <i title='Add' class="fas fa-plus-square"></i><span>Add</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <li class="sidebar-dropdown">
                                        <a href="#">
                                            <i title='Countries' class="fas fa-globe-africa"></i>
                                            <span>Countries</span>
                                            <i class="fa fa-caret-down pull-right"></i>
                                        </a>
                                    </li>
                                    <div class="sidebar-submenu-4">
                                        <ul>
                                            <li>
                                                <a href="<?=URL?>countries"><i title='List' class="fas fa-clipboard-list"></i>
<span>List</span>
                  </a>
                                            </li>
                                            <li>
                                                <a href="<?=URL?>countries/add">
                                                    <i title='Add' class="fas fa-plus-square"></i><span>Add</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <li class="sidebar-dropdown">
                                        <a href="#">
                                            <i title='Cities' class="fas fa-city"></i>
                                            <span>Cities</span>
                                            <i class="fa fa-caret-down pull-right"></i>
                                        </a>
                                    </li>
                                    <div class="sidebar-submenu-5">
                                        <ul>
                                            <li>
                                                <a href="<?=URL?>cities"><i title='List' class="fas fa-clipboard-list"></i>
<span>List</span>
                  </a>
                                            </li>
                                            <li>
                                                <a href="<?=URL?>cities/add">
                                                    <i title='Add' class="fas fa-plus-square"></i><span>Add</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                      <li class="sidebar-dropdown">
                                        <a href="#">

                                            <i title='SocialMedia' class="fas fa-hashtag"></i>
                                            <span>Social Media</span>
                                            <i class="fa fa-caret-down pull-right"></i>
                                        </a>
                                    </li>
                                       <div class="sidebar-submenu-6">
                                        <ul>
                                            <li>
                                                <a href="<?=URL?>socialmedias"><i title='List' class="fas fa-clipboard-list"></i>
<span>List</span>
                  </a>
                                            </li>
                                            <li>
                                                <a href="<?=URL?>socialmedias/add">
                                                    <i title='Add' class="fas fa-plus-square"></i><span>Add</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                    <div class='over-lay col-lg-10 col-md-10 col-sm-10 col-10'></div>

                <div class="col-lg-10 col-md-10 col-sm-10 col-10">
                    <div class="row">
                        <div class="header">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-between">
                            <div class='col-md-3 d-flex p-0'>    <button class=" btn btn-default collapse-sideMenu"><i class="fas fa-bars"></i></button>
                            <div class="user-name ml-3">
                                <p class="text-center">User name</p>
                            </div>
</div>
                                <div class="btn-group dropdown">
                                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id='dropdownMenuButton'>
                                        <i class="fas fa-cog"></i> </span>
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li><a href="<?=URL?>users/dashboard">Profile</a></li>
                                        <li><a href="#">Log out</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

</body>

</html>
      
    <!-- Customize script -->
    <script src="<?=URL?>plugins/ckeditor/ckeditor.js"></script>

