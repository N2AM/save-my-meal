$(document).ready(function () {

    $('#rateModal').on('hidden.bs.modal', function () {
        // do something…
        $('.modal-footer ul').empty();
        $('.modal-header').empty();
        console.log('empty')
    })
    $('.map').css('display', 'none');
    $.ajax({
        url: "http://savemymeal.codesroots.com/api/Restaurants/getrestaurantsweb.json",
        data: {
            format: 'json'
        },
        error: function () {
        },
        success: function (data) {
            console.log(data.data);
            var restaurants = data.data;
            $.each(restaurants, function (index, value) {
//                console.log(value);
                $(`<div class="card mb-4">
    
            <a href="/restaurants/view/${value.id}">
            <img class="card-img-top" src="${value.photo}" alt="Restaurant Image">
</a>
                <div id='rest-logo'><img class="card-img-ontop" src="${value.logo}" alt="Restaurant Image"></div>
            <div class="tag d-flex justify-content-between">
                <div>
                <a href='#' id="location-${value.id}" title='Location'>
                    <i class="fas fa-map-marker-alt"></i></a>
            <!--        <span> 1km</span> -->
                </div>
                <div>
                    <button class='rate-btn-${index}' type="button" data-toggle="modal" data-target="#rateModal">
                    <span>( ${value.reviews.length} )</span>
                    <span class="far fa-star"></span>
                    <span class="far fa-star"></span>
                    <span class="far fa-star"></span>
                    <span class="far fa-star"></span>
                    <span class="far fa-star"></span></button>

                </div>
            </div>
            <div class="card-body">
                <a href="/restaurants/view/${value.id}">
                <h5 class="card-title">${value.name}</h5></a>
                <p class="card-text">${value.start_time_joined + ' - ' + value.end_time_joined}</p>

            </div></div>`, {
                }).appendTo('.col-md-6.scroll');
                $('#location-' + value.id).on('click', function () {
                    $('.map').css('display', 'block');
                    console.log(value.res_lat, value.res_long)
                    initMap(value.res_lat, value.res_long);
                });
                if (value.total_rating.length) {

                    for (i = 0; i <= (value.total_rating[0].stars/value.total_rating[0].count) ; i++) {
                        $('.rate-btn-' + index + ' .fa-star').each(function (index, value) {

                            if (i < index+1) {
                                $(this).addClass('far').removeClass('fas checked');
                            } else {
                                
                                    $(this).addClass('fas checked').removeClass('far');
                                
                            }
                        })
                    }
                }

                $('.rate-btn-' + index).css({'background': 'transparent',
                    'border': 'none',
                    'color': '#fff',
                    'outline': 'none',
                    'cursor': 'pointer',})
                $('.rate-btn-' + index).on('click', function () {
//                    if (!value.total_rating.length){
//                        $("#rateModal").modal('toggle')
//                    }
                    $('.modal-header').append(`        <h2 class="modal-title">Clients Rates</h2>
        <!--<button type="button" class="close" data-dismiss="modal">&times;</button>-->
        <div class="rate-cover ">
                    <div class="rate-circle text-center">
                        <p>${Math.round((value.total_rating[0].stars/value.total_rating[0].count))}</p>
                    </div>
                   <div class="star-cover" style="text-align: center;">
                        <div class="stars inline ratio"><a href="#" class="fas fa-star"></a><a href="#" class="fas fa-star"></a><a href="#" class="fas fa-star"></a><a href="#" class="far fa-star"></a><a href="#" class="far fa-star"></a></div>
               <!--         <div class="rate inline starCount" style="display:inline-block;">0</div> -->
                    </div>
                </div>`)
                    console.log(index);
                               if (value.total_rating.length) {

                    for (i = 0; i <= (value.total_rating[0].stars/value.total_rating[0].count) ; i++) {
                        $('.stars .fa-star').each(function (index, value) {

                            if (i < index+1) {
                                $(this).addClass('far').removeClass('fas');
                            } else {
                                {
                                    $(this).addClass('fas').removeClass('far');
                                }
                            }
                        })
                    }
                }

                        $.each(value.reviews, function (index, value) {
                            console.log(value);
                            dt = new Date(value.modified);
                            dtMod = dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds() + ', ' + dt.getDate( ) + '/' + (dt.getMonth( ) + 1) + '/' + dt.getFullYear( );
//                console.log()
                            $('.modal-footer ul').append(`<li id='review-${value.id}' class="d-flex justify-content-between"></li>`);
                            $('.modal-footer ul #review-' + value.id).append(`<h6>Ahmed</h6>
                        <div>
                <div class='review-time'>${dtMod}</div>
                   <div class="star-cover" style="text-align: center;">
                                <div class="star-${index} inline ratio"><a href="#" class="far fa-star"></a><a href="#" class=" far fa-star"></a><a href="#" class="far fa-star"></a><a href="#" class="far fa-star"></a><a href="#" class="far fa-star"></a></div>
                                <!--<div class="rate inline starCount" style="display:inline-block;">0</div>-->
                            </div></div>`);
//                        console.log(value.rate - 1)
                            for (i = 0; i <= value.rate; i++) {
                                $('.star-' + index + ' .fa-star').each(function (index, value) {

                                    if (i < index+1) {
                                        $(this).addClass('far').removeClass('fas');
                                    } else {
                                        {
                                            $(this).addClass('fas').removeClass('far');
                                        }
                                    }
                                });
                            }
                        });

                    });
                });
        },
        type: 'GET'
    });

});


function initMap(lat, lng) {
    // The location of Uluru
    var uluru = {lat: lat, lng: lng};
    // The map, centered at Uluru
    var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 8, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}
