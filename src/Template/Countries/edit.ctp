
<div class="countries form">
    
    <fieldset>
        <legend><?= ___('edit country') ?></legend>
        
        <div class="panel panel-default">
            <div class="panel-heading">
            <?php
            echo $this->Navbars->actionButtons(['buttons_group' => 'edit', 'model_id' => $country->id]);
            ?>
            </div>
            <div class="panel-body col-md-6 col-sm-12 col-12 p-0">
            
            <?php
            echo $this->AlaxosForm->create($country, ['class' => 'form-horizontal', 'role' => 'form', 'novalidate' => 'novalidate']);
            debug($country);
            echo '<div class="form-group">';
            echo $this->AlaxosForm->label('name', __('Name'), ['class' => 'col-sm-2 control-label']);
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
