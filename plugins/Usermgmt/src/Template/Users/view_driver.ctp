<style>
    .panel-primary{    direction: rtl; color:#b0b0b0 !important }
    .btns{   float: left; }
        .panel-primary > .panel-heading {   background-color: #ffffff;  color: black; }
.btnsstyle{  cursor: pointer !important;    color:#d41e29;
}
.imgstyle{text-align: left;}
.imgstyle2{height: 17px;width: 17px;}
 .profile img{    height: 55px;
    width: 55px;
    border-radius: 29px;}
 .table-condensedd{ width: 100% !important}
 .table-condensed{     width: 90% !important;
    margin-right: 5%;}
 .panel .panel-body {
    padding: 0;
}
.panel-heading{
    padding: 15px;
}
  table > tbody > tr {   border-bottom: 1px solid #ddd;  } 
  table > tbody > tr > td{  padding-right: 25px !important; text-align: right !important;  } 
  textarea{    height: 100px;  border: 1px #ddd solid;}
  .userchat{   border: none !important;}
  
  .astyle{
          width: 170px !important;  left: 60px;  top: 240px; POSITION: ABSOLUTE;  padding-right: 6px;
          color:#8fd94e;border-bottom: 1px solid #8fd94e;border-bottom-width: 1px;
  }
  
  
   @media  (min-width :360px) and (max-width :960px) 
{

  .max{    max-width: 35px;
    max-height: 35px;}
  .astyle {
    width: 170px !important;
    left: 164px;
    top: 279px;
    POSITION: ABSOLUTE;
    padding-right: 6px;
    color: #8fd94e;
    border-bottom: 1px solid #8fd94e;
    border-bottom-width: 1px;
}

.userchat{
    position: absolute;
    left: 57px;
    top: 277px;
}
}
</style>
<h5> <strong>لوحة التحكم</strong> /  عرض جميع المناديب/  عرض مندوب</h5>
<div class="panel panel-primary">
	
      
    <div class="panel-heading">
		<span class="panel-title">
			<?php echo __('عرض مندوب '); ?>
		</span>
		<?php //$page = (isset($this->request->query['page'])) ? $this->request->query['page'] : 1; ?>
            <div class="btns">
                
           
                <div class="col-sm-3"></div>
		<span class="panel-title-right">
		 
                    <a class="col-sm-3 btnsstyle" href="<?=URL?>usermgmt/users/editUser/<?php echo $userId ?>">
                      
                        <img class="col-sm-4 max " src="<?=URL?>images/stop.png">
                          <span class="col-sm-8">تعطيل</span>
		</a>
                            
                </span>
		<span class="panel-title-right">
		 
                    <a class="col-sm-3 btnsstyle" href="<?=URL?>usermgmt/users/editUser/<?php echo $userId ?>">
                         <img class="col-sm-4 max" src="<?=URL?>images/edit.png">
                        <span class="col-sm-8">تعديل</span>
                 
		</a>
                            
                </span>
		<span class="panel-title-right">
		 
                    <a class="col-sm-3 btnsstyle" href="<?=URL?>usermgmt/users/editUser/<?php echo $userId ?>">
                       
                        <img class="col-sm-4 max " src="<?=URL?>images/delete-user.png">
                         <span class="col-sm-8">حذف</span>
		</a>
                            
                </span>
            </div>
        </div>
	<div class="panel-body">
		<div class="table-condensedd" style="display:inline-block;">
			<?php if(!empty($alluser)) { ?>
			<table class="table-condensed" style="width:auto">
				<tbody>
                                   
                                    <tr    style="border-bottom: 1px solid #f6f6f6;border-top: 1px solid #f6f6f6;">
                               
                                                <td class="col-sm-3">
                                                  
							<div class="profile">
								<img alt="<?php echo h($alluser[0]['first_name'].' '.$alluser[0]['last_name']); ?>" src="<?php echo $this->Image->resize('library/'.IMG_DIR, $alluser[0]['photo'], 200, null, true);?>">
                                                                
                                                        </div>
						</td>
                                         	 
                                                <td class="col-sm-3"> 
                                            <?php     if($alluser[0]['active']==1):  ?>
                                                
                                        <button class="btn-success" style="border:none;background:#8fd94e !important ;color:white ">
                                                        <?php echo ($alluser[0]['active']) ? : __('<span>' . ' مفعل' .  '</span>');?>
                                                    </button>
                                                    <?php    endif;  ?>
                                                    
                                                        <?php     if($alluser[0]['active']==0):  ?>
                                                
                                        <button class="btn-danger" style="min-width:90px;border:none;color:white ">
                                                        <?php echo ($alluser[0]['active']) ? : __('<span>' . ' غير مفعل' .  '</span>');?>
                                                    </button>
                                                    <?php    endif;  ?>
                                                </td>
                                                <td class="col-sm-3">
                                                  
                                                    <a  href="#" class=" userchat">
                                                        
								<img alt="<?php  echo h($alluser[0]['first_name'].' '.$alluser[0]['last_name']); ?>" src="<?php echo $this->Image->resize('img', 'chat-button.png', 100, null, true);?>">
                                                                
                                                        </a>
                                                    <br> <a href="#" style="" class="astyle">
                                                        <strong>
                                                            عرض جميع طلبات المندوب
                                                        </strong>
                                                        </a>
						</td>
                                            
                                	  
                                  
					</tr>
                              
                                  
					<tr>
                                            <td  class="col-sm-3" style="text-align:right"><strong><?php echo __('الإسم');?>:</strong></td>
						<td class="col-sm-3"><?php echo h($alluser[0]['first_name']);?> 
						 <?php echo h($alluser[0]['last_name']);?></td>
                                                <td class="col-sm-3"></td>
						 
					</tr>
                                          
					<tr>
						<td class="col-sm-3" style="text-align:right"><strong><?php echo __('إسم المستخدم');?>:</strong></td>
						<td class="col-sm-3"><?php echo h($alluser[0]['username']);?></td>
                                                  <td class="col-sm-3"></td>
					</tr>
                                          
					<tr>
						<td class="col-sm-3" style="text-align:right"><strong><?php echo __('رقم العضوية');?>:</strong></td>
						<td class="col-sm-3"><?php echo h($alluser[0]['id']);?></td>
                                                  <td class="col-sm-3"></td>
					</tr>
                                        <tr>
						<td class="col-sm-3" style="text-align:right"><strong><?php echo __('النوع');?>:</strong></td>
						<td class="col-sm-3"><?php  echo h($alluser[0]['gender']);?></td>
                                                  <td class="col-sm-3"></td>
					</tr>
					<tr>
						<td class="col-sm-3" style="text-align:right"><strong><?php echo __('البريد الإلكترونى');?>:</strong></td>
						<td class="col-sm-3"><?php echo h($alluser[0]['email']);?></td>
                                                  <td class="col-sm-3"></td>
					</tr>
				      <tr>
						<td class="col-sm-3" style="text-align:right"><strong><?php echo __('رقم الهاتف');?>:</strong></td>
						<td class="col-sm-3"><?php echo ($alluser[0]['mobile']); ?></td>
                                                  <td class="col-sm-3"></td>
					</tr>
					<tr>
						<td class="col-sm-3" style="text-align:right"><strong><?php echo __('الحالة');?>:</strong></td>
						<td class="col-sm-3"><?php echo ($alluser[0]['active']) ? __('<strong style="color:#8fd94e ">' .'مفعل'.  '</strong>') : __('<strong style="color:red">' . 'غبر مفعل' .  '</strong>');?></td>
					       <td class="col-sm-3"></td>
                                        </tr>
					
					<tr>
						<td class="col-sm-3" style="text-align:right"><strong><?php echo __('تم تأكيد البريد');?></strong></td>
						<td class="col-sm-3"><?php echo ($alluser[0]['email_verified']) ? __('<strong style="color:#8fd94e ">' . 'نعم' . '</strong>') : __('<strong style="color:red">' . 'لا'. '</strong>');?></td>
					 <td class="col-sm-3"></td>
                                        </tr>
					 
					<tr>
						<td class="col-sm-3" style="text-align:right"><strong><?php echo __('إجمالى مدفوعات العميل');?>:</strong></td>
						<td class="col-sm-3"><?php //echo $alluser['created']->format('d-M-Y');?></td>
                                                  <td class="col-sm-3"></td>
					</tr>
					 
					<tr style=" border: none !important">
						<td class="col-sm-3" style="text-align:right; "><strong><?php echo __('آخر دخول ');?>:</strong></td>
						<td class="col-sm-3"><?php echo ($alluser[0]['last_login']) ? $alluser[0]['last_login']->format('d-M-Y') : '';?></td>
					  <td class="col-sm-3"></td>
                                        </tr>
                                        <tr style=" border: none !important">
						<td class="col-sm-3" style="text-align:right;"><strong><?php echo __('ملاحظات');?>:</strong></td>
						<td class="col-sm-9">
                                                    <textarea  class="col-sm-12">  
                                                    <?php //echo ($alluser[0]['last_login']) ? $alluser[0]['last_login']->format('d-M-Y') : '';?>
					     </textarea></td>
                                        <td class="col-sm-3"></td>
                                        </tr>
                                                <?php //if($alluser[0]['active']==0){?>
					<tr style=" border: none !important; height:150px" >
						<td  class="col-sm-3" style="text-align:right"><strong><?php echo __('سبب تعليق العضوية');?>:</strong></td>
						<td  class="col-sm-9">
                                                    <textarea  class="col-sm-12">     <?php //echo h($alluser[0]['pause']);?></textarea>
                                                </td>
					</tr>
                                        
                                          <?php }?>
				</tbody>
			</table>
			<?php //} ?>
		</div>
	</div>
</div>