
<div class="cities form">
    
    <fieldset>
        <legend><?= ___('add city') ?></legend>
        
        <div class="panel panel-default">
            <div class="panel-heading">
            <?php
            echo $this->Navbars->actionButtons(['buttons_group' => 'add']);
            ?>
            </div>
            <div class="panel-body col-md-6 col-sm-12 col-12 p-0">
            
            <?php
            echo $this->AlaxosForm->create($city, ['class' => 'form-horizontal', 'role' => 'form', 'novalidate' => 'novalidate']);
            
            echo '<div class="form-group">';
            echo $this->AlaxosForm->label('name', __('Name'), ['class' => 'col-sm-12 control-label']);
            echo '<div class="col-lg-12 col-md-12 col-sm-12 col-12">';
            echo $this->AlaxosForm->input('name', ['label' => false, 'class' => 'form-control']);
            echo '</div>';
            echo '</div>';
            
            echo '<div class="form-group">';
            echo $this->AlaxosForm->label('country_id', __('Country ID'), ['class' => 'col-sm-12 control-label']);
            echo '<div class="col-lg-12 col-md-12 col-sm-12 col-12">';
            echo $this->AlaxosForm->input('country_id', ['options' => $countries, 'label' => false, 'class' => 'form-control']);
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
