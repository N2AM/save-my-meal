<style>
    .panel-primary{    direction: rtl; color:#b0b0b0 !important }
    .btns{   float: left !important; }
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
            margin-top: 20px;
    margin-left: -16px;
        width: 160px !important;  left: 60px;  top: 240px; POSITION: ABSOLUTE;  padding-right: 6px;
        color:#8fd94e;border-bottom: 1px solid #8fd94e;border-bottom-width: 1px;
    }


    @media  (min-width :360px) and (max-width :960px)
    {

        .max{    max-width: 35px;
                 max-height: 35px;}
        .astyle {
            width: 160px !important;
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
    li{list-style: none;}
</style>

<div class="courses index">
<div class="panel panel-primary">

<h2><?php echo __('عرض العميل '); ?></h2>
    <div class="panel-body">
        <div class="table-condensedd" style="display:inline-block;">
            <?php if (!empty($alluser)) { ?>
                <table class="table-condensed" style="width:auto">
                    <tbody>

                        <tr>
                            <td class="col-sm-3" style="text-align:right"><strong><?php echo __('إسم المستخدم'); ?>:</strong></td>
                            <td class="col-sm-3"><?php echo h($alluser[0]['username']); ?></td>
                            <td class="col-sm-3"></td>
                        </tr>
                        <tr>
                            <td class="col-sm-3" style="text-align:right"><strong><?php echo __('البريد الإلكترونى'); ?>:</strong></td>
                            <td class="col-sm-3"><?php echo h($alluser[0]['email']); ?></td>
                            <td class="col-sm-3"></td>
                        </tr>

                    <?php } ?>
                </tbody>
            </table>
            <?php //} ?>
        </div>
    </div>
</div>
</div>
