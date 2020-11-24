$(document).ready(function () {
    $.ajax({
        url: "http://savemymeal.codesroots.com/api/orders/getordersweb.json",
        data: {
            format: 'json'
        },
        error: function () {
        },
//dataType: 'jsonp',
        success: function (data) {
            console.log(data.data)
            var orders = data.data;
            $.each(orders, function (index, value) {
//                console.log(index, value);
                $(`<div class="card mb-4">
    
            <a href="/orders/view/${value.id}">
            <img class="card-img-top" src="http://savemymeal.codesroots.com/img/food.jpg" alt="Card image cap"></a>
         <div class='bar d-flex justify-content-between'>
                <div class="d-flex">
                    <div class="stock"></div>
                    <span>${value.amount} Products</span>
                </div>
                <div class="price">${value.total}  L.E</div>
            </div>

            <div class="card-body">
                <a href="/restaurants/view/${value.id}">
                <h5 class="card-title">${value.restaurant.name}</h5></a>

            </div></div>`, {
                }).appendTo('.col-md-11.scroll');
            });

        },
        type: 'GET'
    });

});

