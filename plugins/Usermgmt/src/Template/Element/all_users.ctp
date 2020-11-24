 <link href="<?= URL ?>Usermgmt/css/umstyle.css" rel="stylesheet" type="text/css" />


<div class="row">
    <div class="col-sm-12">
        <div id="updateUsersIndex" style="direction:  rtl;text-align: center;">
            <?php echo $this->Search->searchForm('Users', ['legend' => false, 'updateDivId' => 'updateUsersIndex']); ?>
            <?php echo $this->element('Usermgmt.paginator', ['updateDivId' => 'updateUsersIndex']); ?>

            <style>
                .styley{

                    border: solid 1px #ddd;
                    background-color: #3498db;
                    color: white;
                    padding: 22px;
                    border-radius: 8px;
                    font-family: inherit;
                    font-style: inherit;
                    font-weight: 600;
                    font-size: 18px; }
                </style>

                <table class="table table-striped table-bordered table-condensed table-hover"style="text-align: center;">
                <thead style="text-align: center;">
                    <tr style="text-align: center;">
                        <th class="psorting" style="text-align: center;"><?php echo $this->Paginator->sort('Users.id', __(' رقم العضوية')); ?></th>
                        <th class="psorting"style="text-align: center;"><?php echo $this->Paginator->sort('Users.username', __('اسم المستخدم')); ?></th>
                        <th style="text-align: center;"class="psorting"><?php echo $this->Paginator->sort('Users.active', __('الحالة')); ?></th>
                        <th style="text-align: center;"class="psorting"></th>
                    </tr>

                </thead>
                <tbody>
                    <?php
                    if (!empty($users)) {
                        $page = $this->request->params['paging']['Users']['page'];
                        $limit = $this->request->params['paging']['Users']['perPage'];
                        $i = ($page - 1) * $limit;
                        foreach ($users as $row) {
                            $i++;

                            echo "<tr>";
                            echo "<td>" . $row['id'] . "</td>";
                            echo "<td>" . h($row['username']) . "</td>";
                            echo "<td>";
                            if ($row['active']) {
                                echo "<span class='label label-success'>" . __(' مفعل') . "</span>";
                                ?>

                                <?php
                            } else {
                                echo "<span class='label label-danger'>" . __('  معطل') . "</span>";
                            }
                            echo"</td>";

                            /////////////////////////
                            ?>

                            <?php
                            ////////////////
                            echo "<td style='    padding-left: 35px;' class='actions'>";
                            echo "<div class='btn-group' style='width: 73px;'>";
                            ?>

                <a  class='dropdown-toggle col-sm-12' data-toggle='dropdown'  style="    margin: 1px;width: 50px;cursor: pointer;">

                   <span  class="actionsheight">.</span>
                    <span  class=" actionsheight" >.</span>
                    <span  class="actionsheight">.</span>
                </a>

                           <?php
                 //    echo "<button class='btn btn-primary btn-sm dropdown-toggle' data-toggle='dropdown'>" . __('خصائص العضوية') . " <span class='caret'></span></button>";


                            echo "<ul class='dropdown-menu'>";



                            echo "<li>" . $this->Html->link(__('تعديل بيانات العضوية '), ['controller' => 'Users', 'action' => 'editUser', $row['id'], 'page' => $page], ['escape' => false]) . "</li>";
                            echo "<li>" . $this->Html->link(__('تغيير الرقم السرى '), ['controller' => 'Users', 'action' => 'changeUserPassword', $row['id'], 'page' => $page], ['escape' => false]) . "</li>";
                            if ($row['id'] != 1 && strtolower($row['username']) != 'admin') {

                                echo "<li>" . $this->Form->postLink(__('حذف العضوية '), ['controller' => 'Users', 'action' => 'deleteUser', $row['id'], 'page' => $page], ['escape' => false, 'confirm' => __('Are you sure you want to delete this user?')]) . "</li>";
                            }
                            echo "<li style='border-bottom:none !important'>" . $this->Html->link(__('عرض بيانات العضو'), ['controller' => 'Users', 'action' => 'viewUser', $row['id']], ['escape' => false]) . "</li>";
                            echo "</ul>";
                            ?>

                            <?php
                            echo "</div>";
                            echo "</td>";
                            echo "</tr>";
                        }
                    } else {
                        echo "<tr><td colspan=10 ><br/><br/>" . __('No Records Available') . "</td></tr>";
                    }

                    ?>

                </tbody>
            </table>
            <?php
            if (!empty($users)) {
                echo $this->element('Usermgmt.pagination', ['paginationText' => __('Number of Users')]);
            }
            ?>
        </div>
    </div>
</div>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="<?=URL?>/js/bootstrap.min.js"></script>
