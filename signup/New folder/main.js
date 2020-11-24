
// Function to allow writing only numbers, you need to call it on input keypress: onkeypress = "return isNumber(event)"
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function SaveClinicService(actionUrl) {

    $.ajax({
        url: actionUrl,
        type: 'POST',
        async: false,
        data: { urlname: url, urlnameArabic: urlArabic },
        success: function (results) {

        },
        error: function(error) {
            
        }
    });
}

function ChangeConfirmation() {
    $('#confirmationsavebtn').removeAttr("disabled"); 
    $('#confirmationsavebtn').css("background-color", "#EB1C23");
}
