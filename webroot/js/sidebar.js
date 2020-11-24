
$(".sidebar-dropdown").each(function (index, value) {
    $(this).click(function () {
        $(".sidebar-submenu-" + index).toggleClass('d-block');
        $("nav .d-block").not(".sidebar-submenu-" + index).removeClass('d-block').addClass('d-none');
    })
//    console.log(index)

});
