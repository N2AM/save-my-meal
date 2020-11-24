<?php
/* Cakephp 3.x User Management Premium Version (a product of Ektanjali Softwares Pvt Ltd)
Website- http://ektanjali.com
Plugin Demo- http://cakephp3-user-management.ektanjali.com/
Author- Chetan Varshney (The Director of Ektanjali Softwares Pvt Ltd)
Plugin Copyright No- 11498/2012-CO/L

UMPremium is a copyrighted work of authorship. Chetan Varshney retains ownership of the product and any copies of it, regardless of the form in which the copies may exist. This license is not a sale of the original product or any copies.

By installing and using UMPremium on your server, you agree to the following terms and conditions. Such agreement is either on your own behalf or on behalf of any corporate entity which employs you or which you represent ('Corporate Licensee'). In this Agreement, 'you' includes both the reader and any Corporate Licensee and Chetan Varshney.

The Product is licensed only to you. You may not rent, lease, sublicense, sell, assign, pledge, transfer or otherwise dispose of the Product in any form, on a temporary or permanent basis, without the prior written consent of Chetan Varshney.

The Product source code may be altered (at your risk)

All Product copyright notices within the scripts must remain unchanged (and visible).

If any of the terms of this Agreement are violated, Chetan Varshney reserves the right to action against you.

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Product.

THE PRODUCT IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE PRODUCT OR THE USE OR OTHER DEALINGS IN THE PRODUCT. */
?>
<html lang="ar">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <!-- Bootstrap -->
  <!--<link href="<?=URL?>css/bootstrap.min.css" rel="stylesheet">-->
  <!-- RTL Version Bootstrap -->
 <!-- <link href="<?=URL?>css/bootstrap-rtl.min.css" rel="stylesheet"> -->

	<!-- Custom css -->
  <!--<link href="<?=URL?>css/style.css" rel="stylesheet" />-->
  <!-- Media Query Css -->
  <!--<link href="<?=URL?>css/media-Query.css" rel="stylesheet" />-->

  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
<!--  <script
			  src="https://code.jquery.com/jquery-3.4.0.js"
			  integrity="sha256-DYZMCC8HTC+QDr5QNaIcfR7VSPtcISykd+6eSmBW5qo="
			  crossorigin="anonymous"></script>-->
                          <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.js"></script>-->
</head>
<body>

	<!-- me-->
<div class="login-section">
 <!-- <div class="container"> -->
  	<div class="row">
      <div class="loginSectionForm col-md-12">
  			<div class="panel panel-default">
  				<div class="panel-heading p-3">
                		<?php echo __('Login'); ?>
  				</div>
  				<div class="panel-body">
  					<?php echo $this->element('Usermgmt.ajax_validation', ['formId'=>'loginForm', 'submitButtonId'=>'loginSubmitBtn']); ?>
  					<?php echo $this->Form->create($userEntity, ['id'=>'loginForm', 'class'=>'form-horizontal']); ?>
                <form class="form-horizontal" id="loginForm">
                  <div class="um-form-row form-group">
                    <label for="user" class="col-sm-3 control-label"><?php echo __('User name'); ?></label>

                    <div class="col-sm-9">
  					 	<?php echo $this->Form->input('Users.email', ['type'=>'text', 'label'=>false, 'div'=>false, 'placeholder'=>__('User name'), 'class'=>'form-control','id'=>"user"]); ?>
                    </div>
                  </div>
                  <div class="um-form-row form-group">
                    <label for="password" class="col-sm-3 control-label"><?php echo __('Password'); ?></label>

                    <div class="col-sm-9">
  					<?php echo $this->Form->input('Users.password', ['type'=>'password', 'label'=>false, 'div'=>false, 'placeholder'=>__('Password'), 'class'=>'form-control','id'=>'password']); ?>
                    </div>
                  </div>
                  <div class=" um-form-row form-group">
                    <div class="col-sm-offset-3 col-sm-9">
  					 <?php echo $this->Form->Submit(__('Login'), ['div'=>false, 'class'=>'btn btn-default', 'id'=>'loginSubmitBtn']); ?>
                    </div>
                  </div>
                </form>
  				<?php echo $this->Form->end(); ?>
  				<?php echo $this->element('Usermgmt.provider'); ?>
              </div>
  			</div>

  		</div>
    </div>
    <div class="row">
      <div class="helpSection col-md-12">
            <div class="signIn-help row">
              <div class="new-account col-lg-6 col-md-6 col-xs-12 col-12 p-4">
  			  <p><?php echo __("Don't have account ?"); ?></p>
                <a href="<?=URL?>register"><?php echo __('Sign up'); ?> </a>
              </div>
              <div class="loss-info col-lg-6 col-md-6 col-xs-12 col-12 p-4">
                <p><?php echo __('Forget your password ?'); ?></p>
                <a href="<?=URL?>forgotPassword"><?php echo __('Get your login information'); ?></a>
              </div>
            </div>
          </div>
  	</div>
  </div>
<!-- </div> -->

 <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

   Include all compiled plugins (below), or include individual files as needed -->
<!--  <script src="<?=URL?>js/bootstrap.min.js"></script>
   Nice Scroll
  <script src="<?=URL?>js/jquery.nicescroll.min.js"></script> 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.js"></script>
  Includer Custom Js file 
  <script src="<?=URL?>js/script.js"></script>-->
</body>
</html>
