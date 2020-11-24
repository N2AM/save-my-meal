$(document).ready(function () {

    var url = window.location.href;
    id = url.substring(url.lastIndexOf('/') + 1);
    id = id.match(/\d+/)[0];
    $.ajax({
        url: "http://savemymeal.codesroots.com/api/restaurants/getrestaurantreview/" + id + ".json",
        data: {
            format: 'json'
        },
        error: function () {
        },
        success: function (data) {
            console.log(data);
//            console.log(data.data[0].total_rating[0].count)
            $('.card-img-top').attr('src', data.data[0].photo);
            $('.stock ~ span').text(data.data[0].amount + ' Left');
            if (data.data[0].total_rating.length) {
                $('.rate-count').text('( ' + data.data[0].total_rating[0].count + ' )');
                $('.rate-circle').text(Math.round(data.data[0].total_rating[0].stars/data.data[0].total_rating[0].count));
                
                            if (data.data[0].total_rating.length) {

                    for (i = 0; i <= (data.data[0].total_rating[0].stars/data.data[0].total_rating[0].count) ; i++) {
                        $('.rate-btn .fa-star').each(function (index, value) {

                            if (i < index+1) {
                                $(this).addClass('far').removeClass('fas checked');
                            } else {
                                
                                    $(this).addClass('fas checked').removeClass('far');
                                
                            }
                        })
                    }
                }

                
                
                
                
                           $('.modal-header').append(`<h2 class="modal-title">Clients Rates</h2>
        <!--<button type="button" class="close" data-dismiss="modal">&times;</button>-->
        <div class="rate-cover ">
                    <div class="rate-circle text-center">
                        <p>${(data.data[0].total_rating[0].stars/data.data[0].total_rating[0].count)}</p>
                    </div>
                   <div class="star-cover" style="text-align: center;">
                        <div class="stars inline ratio"><a href="#" class="fas fa-star"></a><a href="#" class="fas fa-star"></a><a href="#" class="fas fa-star"></a><a href="#" class="far fa-star"></a><a href="#" class="far fa-star"></a></div>
               <!--         <div class="rate inline starCount" style="display:inline-block;">0</div> -->
                    </div>
                </div>`)
//                    console.log(index);

                    for (i = 0; i <= (data.data[0].total_rating[0].stars/data.data[0].total_rating[0].count) ; i++) {
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
            $('.card-title').text(data.data[0].name);
            $('.card-text').text(data.data[0].start_time_joined + ' - ' + data.data[0].end_time_joined);
            $('.description p').html(data.data[0].description);
            $.each(data.data[0].reviews, function (index, value) {
                console.log(value)
                var dt = new Date(value.modified);
                var dtMod = dt.getHours() + ':' + dt.getMinutes() + ':' + dt.getSeconds() + ', ' + dt.getDate( ) + '/' + (dt.getMonth( ) + 1) + '/' + dt.getFullYear( );
//                console.log()
                $('.modal-footer ul').append(`<li class="d-flex justify-content-between"><h6>Ahmed</h6>
                        <div>
                <div class='review-time'></div>
                   <div class="star-cover" style="text-align: center;">
                                <div class="star inline ratio"><a href="#" class="far fa-star"></a><a href="#" class="far fa-star"></a><a href="#" class="far fa-star"></a><a href="#" class="far fa-star"></a><a href="#" class="far fa-star"></a></div>
                                <!--<div class="rate inline starCount" style="display:inline-block;">0</div>-->
                            </div></div></li>`)
                for (var i = 0; i <= value.rate; i++) {
                    $('.modal-footer .fa-star').each(function (index, value) {

                         if (i < index+1) {
                                $(this).addClass('far').removeClass('fas checked-rate');
                            } else {
                                
                                    $(this).addClass('fas checked-rate').removeClass('far');
                                
                            }
                    })
                }
                $('.review-time').text(dtMod);
            })
        },
        type: 'GET'
    });
    $.ajax({
        url: "http://savemymeal.codesroots.com/api/Restaurants/getrestaurantdescription/" + id + ".json",
        success: function (data) {
//            console.log(data);

        },
        type: 'GET',
        error: function () {},
        data: {
            format: 'json'
        }
    })



})



