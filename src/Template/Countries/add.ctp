
<div class="countries form mt-4">
    
    <fieldset>
        <legend><?= ___('add country') ?></legend>
        
        <div class="panel panel-default">
<!--            <div class="panel-heading">
            <?php
            echo $this->Navbars->actionButtons(['buttons_group' => 'add']);
            ?>
            </div>-->
            <div class="panel-body col-md-6 col-sm-12 col-12 p-0 mt-3">
            
            <?php
            echo $this->AlaxosForm->create($country, ['class' => 'form-horizontal', 'role' => 'form', 'novalidate' => 'novalidate']);
            
            echo '<div class="form-group">';
            
            echo $this->AlaxosForm->label('name', __('Name'), ['class' => 'col-sm-12 control-label']);
            echo '<div class="col-lg-12 col-md-12 col-sm-12 col-12">';
            echo $this->AlaxosForm->input('name', ['label' => false, 'class' => 'form-control']);
            echo '</div>';
            echo '</div>';
            
            echo '<div class="form-group">';
            echo '<div class="col-sm-offset-2 col-lg-12 col-md-12 col-sm-12 col-12">';
            echo $this->AlaxosForm->button(___('submit'), ['class' => 'btn btn-default']);
            echo '</div>';
            echo '</div>';
            
            echo $this->AlaxosForm->end(); 
            ?>
            </div>
        </div>
        
    </fieldset>
    
</div>
