function CountryChanged(country) {
    var countryName = $(country).find('span').text();
    $.ajax({
        type: 'get',
        url: $('#updatecountrycookieurl').data('url'),
        data: { countryId: $(country).attr('data-value') },
        success: function (result) {

            if (result == "True") {
                var path = $('#CountryId').data('path');
                path = path.replace('{0}', $(country).find('.flag-country').attr('data-imgUrl'));

                $('#countryname').text(countryName);
                $('.flag-country').attr("src", path);

                $('#countryname').attr("title", countryName);
                $('.flag-country').attr("title", countryName);

                location.reload();
            }          
        }
    });
}

function OpenChangeCountryModal() {
    $('#country-selector-modal').show();
}

function CloseChangeCountryModal() {
    $('#country-selector-modal').hide();
}


