$(document).ready(function () {
    if (window.location.href.indexOf('login')>0){
        console.log('ggg')
      $('.btn-group.dropdown').css('display' , 'none');
    }
    else {
        $('.btn-group.dropdown').css('display' , 'block');
    }
    if ($(window).width() < 826) {
        $('.header').parents('.col-sm-10')
                .addClass('col-lg-12 col-md-12 col-12 col-sm-12')
                .removeClass('col-lg-10 col-md-10 col-10 col-sm-10');
//        $('.over-lay').removeClass('d-none').addClass('d-block');
    }
    if ($(window).width() > 826) {
        $('.header').parents('.col-sm-12')
                .addClass('col-lg-10 col-md-10 col-10 col-sm-10')
                .removeClass('col-lg-12 col-md-12 col-12 col-sm-12');
//        $('.over-lay').removeClass('d-block').addClass('d-none');
    }
})

window.addEventListener('resize', function (event) {
    // do stuff here
    if ($(window).width() < 826) {
        $('.header').parents('.col-sm-10')
                .addClass('col-lg-12 col-md-12 col-12 col-sm-12')
                .removeClass('col-lg-10 col-md-10 col-10 col-sm-10');
//        if ($('.over-lay').hasClass('d-none')) {
//            $('.over-lay').removeClass('d-none').addClass('d-block');
//        }
    }
    if ($(window).width() > 826) {
        $('.header').parents('.col-sm-12')
                .addClass('col-lg-10 col-md-10 col-10 col-sm-10')
                .removeClass('col-lg-12 col-md-12 col-12 col-sm-12');
        $('.side-Menu').removeClass('d-none').addClass('d-block');
        if ($('.over-lay').hasClass('d-block')) {
        $('.over-lay').removeClass('d-block').addClass('d-none');
    }}
});
//$('.dropdown-toggle').click(function(){
//    event.stopPropagation();
//
//})
//    $('body').click(function () {
//     $('.dropdown-menu').css('display','none');
// } )
$('.over-lay').click(function () {
//            event.stopPropagation();
//            if($('.side-Menu').hasClass('d-block')){
    $('.side-Menu').removeClass('d-block').addClass('d-none');
    $(this).removeClass('d-block').addClass('d-none');
//            }
//            $('.side-Menu').css('display','none','important');
})

$('.collapse-sideMenu').click(function () {
    event.stopPropagation();
//    $('.header').toggleClass('header-clicked')
    $('.side-Menu').toggleClass('sideMenu-click');
    if ($(window).width() < 826) {
        $('.side-Menu').addClass('d-block');
        $('.over-lay').addClass('d-block');
        $('span').css('display', 'inline-flex');
        $('.side-Menu .user-image').css({'width': '70px', 'height': '70px'});
        $('.fa-caret-down').css('display', 'inline-block');
        $('.side-Menu nav ul li a, .side-Menu nav ul li i').css('padding', '5px');
        $('.side-Menu nav ul li').css({'padding': '10px 15px', 'text-align': 'left'});


    }
    if ($('.side-Menu').parent().hasClass('col-sm-2') && $(window).width() > 825) {
        $('.side-Menu').parent().removeClass('col-lg-2 col-md-2 col-2 col-sm-2').addClass('col-lg-1 col-md-1 col-1 col-sm-1');
        $('.sideMenu-click span').css('display', 'none');
        $('.sideMenu-click .fa-caret-down').css('display', 'none');
        $('.sideMenu-click .user-image').css({'width': '40px', 'height': '40px'});
        $('.sideMenu-click nav ul li a, .side-Menu nav ul li i').css('padding', '0');
//        $('.sideMenu-click nav ul li').css('padding', '10px 25px');
        $('.header').parents('.col-sm-10').addClass('col-lg-11 col-md-11 col-11 col-sm-11').removeClass('col-lg-10 col-md-10 col-10 col-sm-10')
        $('nav li').css({'text-align': 'center'})

    } else if ($('.side-Menu').parent().hasClass('col-sm-1')) {
        $('span').css('display', 'inline-flex');
        $('.side-Menu .user-image').css({'width': '70px', 'height': '70px'});
        $('.fa-caret-down').css('display', 'inline-block');
        $('.side-Menu nav ul li a, .side-Menu nav ul li i').css('padding', '5px');
        $('.side-Menu nav ul li').css({'padding': '10px 15px', 'text-align': 'left'});
        $('.side-Menu').parent().addClass('col-lg-2 col-md-2 col-2 col-sm-2').removeClass('col-lg-1 col-md-1 col-1 col-sm-1');
        $('.header').parents('.col-sm-11').removeClass('col-lg-11 col-md-11 col-11 col-sm-11').addClass('col-lg-10 col-md-10 col-10 col-sm-10');


    }

})

$('.btn-group').click(function () {
    $('.dropdown-menu').toggleClass('show')
});

if ($(window).width() < 825) {

} else {
//    $('.collapse-sideMenu').css('display','none');
}



//$(window).resize(function () {
//    if (Math.abs(window.orientation) === 90) {
//        // Do Landscape
//        console.log('land');
//        $('.header').parents('.col-sm-10')
//                .addClass('col-lg-10 col-md-10 col-10 col-sm-10')
//                .removeClass('col-lg-12 col-md-12 col-12 col-sm-12');
//        $('.side-Menu').css('overflow-y', 'scroll');
//    } else {
//        // Do Portrait
//        console.log('port')
//        $('.header').parents('.col-sm-10')
//                .addClass('col-lg-12 col-md-12 col-12 col-sm-12')
//                .removeClass('col-lg-10 col-md-10 col-10 col-sm-10');
//        $('.side-Menu').css('overflow-y', 'none')
//    }
//});