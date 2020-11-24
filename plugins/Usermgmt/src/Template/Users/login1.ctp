	<div class="row">
	<div class="col-sm-6 col-sm-offset-3">
		<div class="panel panel-primary">
			<div class="panel-heading">
				<span class="panel-title">
					<?php echo __('الدخول إلى حسابي'); ?>
					
				</span>
				<?php if(SITE_REGISTRATION) { ?>
				<span class="panel-title-right">
					<?php echo $this->Html->link(__('Sign Up', true), ['controller'=>'Users', 'action'=>'register', 'plugin'=>'Usermgmt'], ['class'=>'btn btn-default']); ?>
				</span>
				<?php } ?>
			</div>
			<div class="panel-body">
				<?php echo $this->element('Usermgmt.ajax_validation', ['formId'=>'loginForm', 'submitButtonId'=>'loginSubmitBtn']); ?>
				<?php echo $this->Form->create($userEntity, ['id'=>'loginForm', 'class'=>'form-horizontal']); ?>
				<div class="um-form-row form-group">
					<label class="col-sm-4 control-label required"><?php echo __('Email / Username'); ?></label>
					<div class="col-sm-7">
						<?php echo $this->Form->input('Users.email', ['type'=>'text', 'label'=>false, 'div'=>false, 'placeholder'=>__('Email / Username'), 'class'=>'form-control']); ?>
					</div>
				</div>
				<div class="um-form-row form-group">
					<label class="col-sm-3 control-label required" for="password"><?php echo __('كلمه السر'); ?></label>
					<div class="col-sm-9">
						<?php echo $this->Form->input('Users.password', ['type'=>'password', 'label'=>false, 'div'=>false, 'placeholder'=>__('كلمه السر'), 'class'=>'form-control','id'=>'password']); ?>
					</div>
						
				</div>
				<?php if(USE_REMEMBER_ME) { ?>
					<div class="um-form-row form-group">
						<?php if(!isset($userEntity['remember'])) {
								$userEntity['remember'] = true;
							} ?>
						<label class="col-sm-4 control-label"><?php echo __('Remember me'); ?></label>
						<div class="col-sm-7">
							<?php echo $this->Form->input('Users.remember', ['type'=>'checkbox', 'label'=>false, 'div'=>false, 'style'=>'margin-left:0']); ?>
						</div>
					</div>
				<?php } ?>
				<?php if($this->UserAuth->canUseRecaptha('login')) {
					$errors = $userEntity->errors();
					$error = "";
					if(isset($errors['captcha']['_empty'])) {
						$error = $errors['captcha']['_empty'];
					} else if(isset($errors['captcha']['mustMatch'])) {
						$error = $errors['captcha']['mustMatch'];
					}?>
					<div class="um-form-row form-group">
						<label class="col-sm-4 control-label required"><?php echo __('Prove you\'re not a robot');?></label>
						<div class="col-sm-8">
							<?php echo $this->UserAuth->showCaptcha($error);?>
						</div>
					</div>
				<?php } ?>
				<div class="um-button-row">
					<?php echo $this->Form->Submit(__('Sign In'), ['div'=>false, 'class'=>'btn btn-primary', 'id'=>'loginSubmitBtn']); ?>
					<?php echo $this->Html->link(__('Forgot Password?'), '/forgotPassword', ['class'=>'btn btn-default pull-right um-btn']); ?>
					<?php echo $this->Html->link(__('Email Verification'), '/emailVerification', ['class'=>'btn btn-default pull-right um-btn']); ?>
				</div>
				<?php echo $this->Form->end(); ?>
				<?php echo $this->element('Usermgmt.provider'); ?>
			</div>
		</div>
	</div>
</div>