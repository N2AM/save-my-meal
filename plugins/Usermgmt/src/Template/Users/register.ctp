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
        <style>
        /*****************registration*****************/



input {
    font-size: 1em;
    line-height: 1.5em;
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
}

.Registro {
    margin: 50px auto;
    text-align: center;
    direction: rtl;

}

.Registro span {
    color: #3c3c3c;
    display: block;
    height: 48px;
    line-height: 48px;
    position: absolute;
    text-align: center;
    width: 36px;
}

.Registro input {
    border: none;
    height: 48px;
    outline: none;
}

.Registro input[type="text"] {
    background-color: #fff;
    border-bottom: 2px solid #c1c1c1;
    border-radius: 10px;
    margin-bottom: 10px;
    color: #000000;
    padding-right: 36px;

}
.Registro select {
    background-color: #fff;
    border-bottom: 2px solid #c1c1c1;
    border-radius: 10px;
    margin-bottom: 10px;
    color: #000000;
    padding-right: 36px;

}

.Registro input[type="password"] {
    background-color: #fff;
    border-bottom: 2px solid #c1c1c1;
    border-radius: 10px;
    margin-bottom: 10px;
    color: #000000;
    padding-right: 36px;

}

.Registro button[type="submit"] {
    background-color: #12264b;
    border: 1px solid #12264b;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    line-height: 48px;
    text-align: center;
    text-transform: uppercase;
    width: 240px;margin-top: 15px;
}

.Registro button[type="submit"]:hover {
    background-color: #78909c;
    border: #78909c;
    box-shadow: 2px 2px 20px  #c1c1c1, #fff 0 -1px 2px;
}

.texto {
    color: black;
    font-weight: 100;
    font-size: 25px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #ffb607;
    text-align: center;
    text-shadow: 1px 2px 1px rgba(0,0,0,.5);
    border-radius: 12px;}

@media (min-width: 768px){
    .Registro {
        width: 450px;}
    .Registro input[type="text"] {
        width: 450px;
    }
    .Registro select {
        width: 450px;
    }
    .Registro input[type="password"] {
        width: 450px;}
}

@media (max-width: 767px){
    .Registro {
        width: 242px;}
    .Registro input[type="text"] {
        width: 240px;
    }
 .Registro select {
        width: 240px;
    }
    .Registro input[type="password"] {
        width: 240px;}
}

        </style>
<div class="col-md-12 col-sm-12 " style="padding: 0">
                <div class="topheaderhdiv">
                    <h3 class="topheaderh" style="text-align: center;">الاشتراك</h3>
                </div>

                <script>
                    $(document).ready(function () {
                        $(".slideselect").click(function (e) {
                            e.preventDefault();
                            $(this).siblings('a.active').removeClass("active");
                            $(this).addClass("active");
                            var index = $(this).index();
                            console.log(index)
                            $(".slideactive").removeClass("active");
                            $(".slideactive").eq(index).addClass("active");
                        });


                    });
                </script>

                <!------   ------>
                <div class="col-sm-12 lowernewssmdiv1 displaybigscren margtopside" >
                    <div class="row rowwidthyone" style="width: 100%;">

                        <section class="mbr-section mbr-after-navbar" id="midreg" style="">
                            <div class="mbr-section__container container mbr-section__container-">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <figure class="mbr-figure mbr-figure--wysiwyg mbr-figure--full-width mbr-figure--caption-inside-bottom">

                                            <p class="texto">قم بتسجيل بياناتك الشخصية للاشتراك معنا</p>
                                            <div class="Registro">
                                                <?php echo $this->element('Usermgmt.ajax_validation', ['formId'=>'registerForm', 'submitButtonId'=>'registerSubmitBtn']);?>
				<?php debug($userEntity); echo $this->Form->create($userEntity, ['url'=>URL.'register','id'=>'registerForm', 'class'=>'form-horizontal', 'novalidate'=>true]);?>
                                                <span class="fa fa-user"></span>	
						<?php echo $this->Form->input('Users.username', ['type'=>'text', 'label'=>false, 'div'=>false,'placeholder'=>'اسم المستخدم', 'class'=>'form-control']);?>

                                               						<?php echo $this->Form->input('Users.email', ['placeholder'=>'الايميل','type'=>'text', 'label'=>false, 'div'=>false, 'class'=>'form-control']);?>

	<?php echo $this->Form->input('Users.password', ['placeholder'=>'كلمة المرور','type'=>'password', 'label'=>false, 'div'=>false, 'class'=>'form-control']);?>

                                                <span class="fa fa-key"></span>						<?php echo $this->Form->input('Users.cpassword', ['placeholder'=>'تاكيد كلمة المرور','type'=>'password', 'label'=>false, 'div'=>false, 'class'=>'form-control']);?>

                                                <button type="submit" >تسجيل<img src="<?= URL ?>images/registerpage.png"  class="mbr-figure__img appsanim3" style="width: 30px;margin: 3px;"></button>
                                                <?php echo $this->Form->end();?>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </div>



        </div>
<!-- <div class="login-section">
              <div class="container">
              	<div class="row">
                  <div class="loginSectionForm">
              			<div class="panel panel-default">
              				<div class="panel-heading">
                            		<?php echo __('تسجيل حساب جديد'); ?>
              				</div>
              				<div class="panel-body">
              				<?php echo $this->element('Usermgmt.ajax_validation', ['formId'=>'registerForm', 'submitButtonId'=>'registerSubmitBtn']);?>
				<?php debug($userEntity); echo $this->Form->create($userEntity, ['url'=>URL.'register','id'=>'registerForm', 'class'=>'form-horizontal', 'novalidate'=>true]);?>
                                                
                            <form class="form-horizontal" id="registerForm">
                              <div class="um-form-row form-group">
                                <label for="user" class="col-sm-3 control-label"><?php echo __('اسم المستخدم'); ?></label>

                                <div class="col-sm-9">
                                <?php echo $this->Form->input('Users.username', ['type'=>'text', 'label'=>false, 'div'=>false,'placeholder'=>'اسم المستخدم', 'class'=>'form-control']);?>
                                </div>
                              </div>
                              <div class="um-form-row form-group">
                                <label for="password" class="col-sm-3 control-label"><?php echo __('كلمه السر'); ?></label>

                                <div class="col-sm-9">
                                <?php echo $this->Form->input('Users.password', ['placeholder'=>'كلمة المرور','type'=>'password', 'label'=>false, 'div'=>false, 'class'=>'form-control']);?>
                                </div>
                              </div>
                              <div class="um-form-row form-group">
                                <label for="confirmpassword" class="col-sm-3 control-label"><?php echo __('تاكيد كلمة السر'); ?></label>

                                <div class="col-sm-9">
                                <?php echo $this->Form->input('Users.cpassword', ['placeholder'=>'تاكيد كلمة المرور','type'=>'password', 'label'=>false, 'div'=>false, 'class'=>'form-control']);?>
                                </div>
                              </div>

                              <div class="um-form-row form-group">
                                <label for="email" class="col-sm-3 control-label"><?php echo __('البريد الإليكتروني'); ?></label>

                                <div class="col-sm-9">
                                <?php echo $this->Form->input('Users.email', ['placeholder'=>'الايميل','type'=>'text', 'label'=>false, 'div'=>false, 'class'=>'form-control']);?>
                                </div>
                              </div>
                              <div class=" um-form-row form-group">
                                <div class="col-sm-offset-3 col-sm-9">
              					 <?php echo $this->Form->Submit(__('تسجيل حساب جديد'), ['div'=>false, 'class'=>'btn btn-default', 'id'=>'newAccountBtn']); ?>
                                </div>
                              </div>
                            </form>
              				<?php echo $this->Form->end(); ?>
              				<?php echo $this->element('Usermgmt.provider'); ?>
                          </div>
              			</div>

              		</div>
                </div>
                </div>
            </div> -->
