<!DOCTYPE html>
<html lang="ar">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Parashote</title>

    <!-- Bootstrap -->
    <link href="<?=URL?>css/bootstrap.css" rel="stylesheet">
    <!-- Bootstrap RTL -->
    <link href="<?=URL?>css/bootstrap-rtl.min.css" rel="stylesheet">
    <!-- Bootstrap Date Picker -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.8.0/css/bootstrap-datepicker.min.css">
    <!-- Fontawesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossorigin="anonymous">
    <!-- Jquery Ui -->
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <!-- Animate -->
    <!--<link rel="stylesheet" href="<?=URL?>css/animate.css">-->
    <!-- flashy -->
    <!--    <link rel="stylesheet" href="<?=URL?>css/flashy.min.css">-->
    <!-- color picker -->
    <link rel="stylesheet" href="<?=URL?>css/colorpicker.css">
    <!-- toastr -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js
"></script>
    <!-- photoswipe -->
    <link rel="stylesheet" href="<?=URL?>css/photoswipe.css">
    <!-- starrr -->
    <link rel="stylesheet" href="<?=URL?>css/starrr.css">

    <!-- photoswipe UI -->
    <link rel="stylesheet" href="<?=URL?>css/default-skin/default-skin.css">
    <!-- Main style -->
    <link href="<?=URL?>css/stylen.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script>
        var urlForJs = "<?php echo SITE_URL ?>";
        var uid = "<?=$uid?>";

    </script>
    <script>
        var URL = "<?=URL?>";

    </script>
</head>

<body>
    <?php echo $this->element('Usermgmt.message_notification'); ?>
    <?php  echo $this->element('dashboarden/header'); ?>
    <main style="margin-top:100px">
        <?php echo $this->fetch('content'); ?>
    </main>

    </div>
    </div>
    </div>

    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="<?=URL?>js/bootstrap.min.js"></script>
    <!-- Toaster Plugin -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>



    <!-- Jquery Ui Script -->
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <!-- Core JS file -->
    <script src="<?=URL?>js/photoswipe.min.js"></script>

    <!-- UI JS file -->
    <script src="<?=URL?>js/photoswipe-ui-default.min.js"></script>
    <script src="<?=URL?>js/starrr.js"></script>

    <!-- Customize script -->
    <script type="text/javascript" src="<?=URL?>js/colorpicker.js"></script>
    <script src="<?=URL?>js/jquery.nicescroll.min.js"></script>
    <script src="<?=URL?>js/scriptn.js"></script>



    <?php
		/* Usermgmt Plugin JS */
		echo $this->Html->script('/usermgmt/js/umscript.js?q='.QRDN);
	
      ?>
    <?php
      $current_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
      if(strpos(strtolower($current_link),"products/add") !== false){?>
    <script>
    
        $('.moreColor').click(function (e) {
            e.preventDefault()
            $(`<input type="color" class="form-control" value="" style="margin-top:10px;" name="color[]">`).insertAfter(
                '#productColor')
        })
        $('.moreSize').click(function (e) {
            e.preventDefault()
            $(
                `<input type="text" class="form-control" value="" style="margin-top:10px;" name="productsizes[size][]">`
            ).insertAfter('#productSize')
        })

        $('.categoryselect').change(function () {
            var selected = $(this).find("option:selected").attr("name");
            //	alert(selected);
            $('.subcatselect').empty();
            $.ajax({
                url: `http://lord.codesroots.com/api/Subcats/getsubcats/${selected}.json`,
                type: "GET",
                accept: "application/json",
                success: function (result) {
                    for (var i = 0; i < result.data.length; i++) {
                        $('.subcatselect').append(
                            `<option value=${result.data[i].id} " name="subcat_id">${result.data[i].name}</option>`
                        )
                    }

                    console.log(result);
                }

            })
        });

    </script>
    <?php
      }if(strpos(strtolower($current_link),"smallstores") !== false){
        if(strpos(strtolower($current_link),"add") !== false ||strpos(strtolower($current_link),"edit") !== false){
    ?>
    <script src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=AIzaSyCjzzd4nbOiZJx3B53u9ZZAq0tcOsVUBdg" type="text/javascript"></script>
        <script>
            $("#productImg").on('change', function () {

                $(".productImgPreview").empty(); //you can remove this code if you want previous user input
                for (let i = 0; i < this.files.length; ++i) {
                    let filereader = new FileReader();
                    let $img = jQuery.parseHTML(
                        `<img src=""  style="width: 100px;height: 100px;display: block;margin: 0 auto !important;">`
                    );
                    filereader.onload = function () {
                        $img[0].src = this.result;
                    };
                    filereader.readAsDataURL(this.files[i]);

                    $(".productImgPreview").append($img);
                }


            });
            $("#coverImg").on('change', function () {

                $(".coverImgPreview").empty(); //you can remove this code if you want previous user input
                for (let i = 0; i < this.files.length; ++i) {
                    let filereader = new FileReader();
                    let $img = jQuery.parseHTML(
                        `<img src=""  style="width: 100px;height: 100px;display: block;margin: 0 auto !important;">`
                    );
                    filereader.onload = function () {
                        $img[0].src = this.result;
                    };
                    filereader.readAsDataURL(this.files[i]);

                    $(".coverImgPreview").append($img);
                }


            });
            var map = null;
            var geocoder = null;

            function initialize() {
                if (GBrowserIsCompatible()) {
                    map = new GMap2(document.getElementById("map"));
                    map.setCenter(new GLatLng(37.4419, -122.1419), 1);
                    map.setUIToDefault();
                    geocoder = new GClientGeocoder();
                }
            }
            initialize()
            $('#address').change(function () {
                showAddress($(this).val())
            })

            function showAddress(address) {
                $('#locationAddress').val(address)
                if (geocoder) {
                    geocoder.getLatLng(
                        address,
                        function (point) {
                            if (!point) {
                                alert(address + " not found");
                            } else {
                                map.setCenter(point, 15);
                                var marker = new GMarker(point, {
                                    draggable: true
                                });
                                map.addOverlay(marker);

                                console.log($.parseJSON(JSON.stringify(marker.getLatLng())).lat);
                                GEvent.addListener(marker, "dragend", function () {

                                    marker.openInfoWindowHtml(marker.getLatLng().toUrlValue(6));
                                });


                                GEvent.addListener(marker, "click", function () {
                                    $('#lat').val($.parseJSON(JSON.stringify(marker.getLatLng())).lat);
                                    $('#long').val($.parseJSON(JSON.stringify(marker.getLatLng())).lng);
                                });
                                GEvent.trigger(marker, "click");
                            }
                        }
                    );
                }

            }
            $('.categoryselect').change(function () {
                var selected = $(this).find("option:selected").attr("name");
                $('.subcatselect').empty();
                $.ajax({
                    url: `http://lord.codesroots.com/api/Subcats/getsubcats/${selected}.json`,
                    type: "GET",
                    accept: "application/json",
                    success: function (result) {
                        for (var i = 0; i < result.data.length; i++) {
                            $('.subcatselect').append(
                                `<option value=${result.data[i].id} " name="subcat_id">${result.data[i].name}</option>`
                            )
                        }

                        console.log(result);
                    }

                })
            });
    $( ".form-horizontal" ).submit(function( event ) {
//                 if ($('.repass').val() != $('.pass').val()  ) {
//                     event.preventDefault();
//                    alert('الباسورد مختلف')
//                    return;
//                }else if( $('.repass,.pass').val()==""){
//                    event.preventDefault();
//                    alert('ادخل الباسورد')
//                    return;
//                }
                
                if($('.repass,.pass').val()==""){
                   event.preventDefault();
                    alert('ادخل الباسورد')
                    return; 
                }else if($('.repass').val() != $('.pass').val()){
                     event.preventDefault();
                    alert('الباسورد مختلف')
                    return;
                }
            });
        </script>
    <?php
        } else{
        
        ?> <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtM4_bB1Po3RGL2FtSKjP0BiyNRtx0E8A"></script>
        <script>
            $('[data-toggle="popover"]').click(function () {
                var imgURL = $(this).attr('src');
                var element = $(this)
                if (imgURL.includes('phone.png')) {
                    element.attr('src', URL + 'images/phone-call@2x.png')
                } else {
                    element.attr('src', URL + 'images/phone.png')
                }
            })
            $('.storeLocation').click(function () {
                var myLatLng = {
                    lat: parseInt($(this).attr('storelat')),
                    lng: parseInt($(this).attr('storelong'))
                };
    
                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 4,
                    center: myLatLng
                });
    
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: 'Hello World!'
                });
    
            })
            $('.visibility').click(function () {
                var storeId = $(this).attr('storeId');
                var visible = $(this).hasClass('notVisible');
                $(this).toggleClass('notVisible')
                $.ajax({
                    url: 'http://lord.codesroots.com/api/Smallstores/checkon.json',
                    type: 'POST',
                    data: {
                        id: storeId,
                        visible: (visible == true) ? true : false
                    },
                    accept: 'application/json',
                    success: function (result) {
                        console.log(result)
                    }
                })
            })
    
        </script>
        
       
    <?php
        }
      }if(strpos(strtolower($current_link),"products") !== false){?>
    <script src="<?=URL?>js/jquery.flashy.min.js"></script>
    <script>
     $('.star').each(function(){
            $(this).starrr({
                rating: $(this).attr('ratio'),
                readOnly: true
        })
    })
        var initPhotoSwipeFromDOM = function (gallerySelector) {

            // parse slide data (url, title, size ...) from DOM elements 
            // (children of gallerySelector)
            var parseThumbnailElements = function (el) {
                var thumbElements = el.childNodes,
                    numNodes = thumbElements.length,
                    items = [],
                    figureEl,
                    linkEl,
                    size,
                    item;

                for (var i = 0; i < numNodes; i++) {

                    figureEl = thumbElements[i]; // <figure> element

                    // include only element nodes 
                    if (figureEl.nodeType !== 1) {
                        continue;
                    }

                    linkEl = figureEl.children[0]; // <a> element

                    size = linkEl.getAttribute('data-size').split('x');

                    // create slide object
                    item = {
                        src: linkEl.getAttribute('href'),
                        w: parseInt(size[0], 10),
                        h: parseInt(size[1], 10)
                    };



                    if (figureEl.children.length > 1) {
                        // <figcaption> content
                        item.title = figureEl.children[1].innerHTML;
                    }

                    if (linkEl.children.length > 0) {
                        // <img> thumbnail element, retrieving thumbnail url
                        item.msrc = linkEl.children[0].getAttribute('src');
                    }

                    item.el = figureEl; // save link to element for getThumbBoundsFn
                    items.push(item);
                }

                return items;
            };

            // find nearest parent element
            var closest = function closest(el, fn) {
                return el && (fn(el) ? el : closest(el.parentNode, fn));
            };

            // triggers when user clicks on thumbnail
            var onThumbnailsClick = function (e) {
                e = e || window.event;
                e.preventDefault ? e.preventDefault() : e.returnValue = false;

                var eTarget = e.target || e.srcElement;

                // find root element of slide
                var clickedListItem = closest(eTarget, function (el) {
                    return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
                });

                if (!clickedListItem) {
                    return;
                }

                // find index of clicked item by looping through all child nodes
                // alternatively, you may define index via data- attribute
                var clickedGallery = clickedListItem.parentNode,
                    childNodes = clickedListItem.parentNode.childNodes,
                    numChildNodes = childNodes.length,
                    nodeIndex = 0,
                    index;

                for (var i = 0; i < numChildNodes; i++) {
                    if (childNodes[i].nodeType !== 1) {
                        continue;
                    }

                    if (childNodes[i] === clickedListItem) {
                        index = nodeIndex;
                        break;
                    }
                    nodeIndex++;
                }



                if (index >= 0) {
                    // open PhotoSwipe if valid index found
                    openPhotoSwipe(index, clickedGallery);
                }
                return false;
            };

            // parse picture index and gallery index from URL (#&pid=1&gid=2)
            var photoswipeParseHash = function () {
                var hash = window.location.hash.substring(1),
                    params = {};

                if (hash.length < 5) {
                    return params;
                }

                var vars = hash.split('&');
                for (var i = 0; i < vars.length; i++) {
                    if (!vars[i]) {
                        continue;
                    }
                    var pair = vars[i].split('=');
                    if (pair.length < 2) {
                        continue;
                    }
                    params[pair[0]] = pair[1];
                }

                if (params.gid) {
                    params.gid = parseInt(params.gid, 10);
                }

                return params;
            };

            var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
                var pswpElement = document.querySelectorAll('.pswp')[0],
                    gallery,
                    options,
                    items;

                items = parseThumbnailElements(galleryElement);

                // define options (if needed)
                options = {

                    // define gallery index (for URL)
                    galleryUID: galleryElement.getAttribute('data-pswp-uid'),

                    getThumbBoundsFn: function (index) {
                        // See Options -> getThumbBoundsFn section of documentation for more info
                        var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect();

                        return {
                            x: rect.left,
                            y: rect.top + pageYScroll,
                            w: rect.width
                        };
                    }

                };

                // PhotoSwipe opened from URL
                if (fromURL) {
                    if (options.galleryPIDs) {
                        // parse real index when custom PIDs are used 
                        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                        for (var j = 0; j < items.length; j++) {
                            if (items[j].pid == index) {
                                options.index = j;
                                break;
                            }
                        }
                    } else {
                        // in URL indexes start from 1
                        options.index = parseInt(index, 10) - 1;
                    }
                } else {
                    options.index = parseInt(index, 10);
                }

                // exit if index not found
                if (isNaN(options.index)) {
                    return;
                }

                if (disableAnimation) {
                    options.showAnimationDuration = 0;
                }

                // Pass data to PhotoSwipe and initialize it
                gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
                gallery.init();
            };

            // loop through all gallery elements and bind events
            var galleryElements = document.querySelectorAll(gallerySelector);

            for (var i = 0, l = galleryElements.length; i < l; i++) {
                galleryElements[i].setAttribute('data-pswp-uid', i + 1);
                galleryElements[i].onclick = onThumbnailsClick;
            }

            // Parse URL and open gallery if it contains #&pid=3&gid=1
            var hashData = photoswipeParseHash();
            if (hashData.pid && hashData.gid) {
                openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
            }
        };

        // execute above function
        initPhotoSwipeFromDOM('.my-gallery');


        $('.star').click(function () {
            // var totalRatio = 0
            var allTotalRatio = 0
            var starId = $(this).attr('rateproductid')
            var totalRatio = Math.round($(this).attr('ratio'))
            $('.rate-circle p').text(totalRatio);
            console.log(typeof(starId))
            $('#myModal .modal-body').empty()
            $.ajax({
                url: `http://parashot.codesroots.com/api/productrates/getproductrateweb/${starId}.json`,
                type: 'GET',
                accept: 'application/json',
                success: function (result) {
                    console.log("mmmmmmmmmmm",result)
                    // var totalRatio = result.data[0].rate;
                    console.log('rate',totalRatio)
                    // $('.rate-circle p').text(Math.round(totalRatio));
                    // $('.starCount').text(`(${result.newdataperweek[0][1]})`);
                    // console.log('mnmnmnmnoo',`(${result.data[0][1]})`)
                    // $('.ratio').attr('ratio',Math.round(totalRatio))

                    for (var i = 0; i < result.data.length; i++) {
                        console.log(result.data.length)
                        allTotalRatio+= result.data[i].rate;
                        // console.log("totalR",totalRatio)
                        console.log("totalR",totalRatio)
                        // $('.ratio').starrr({
                        //     rating: Math.round(totalRatio),
                        //     readOnly: true
                        // })

                        var date = new Date(result.data[i].created)
                        $('#myModal .modal-body').append(
                            `
                       <div class="row">
                            <div class="comment-parent">
                                <p class="user-name">${result.data[i].user.username}</p>
                                <p class="comment"> ${result.data[i].comment}</p>
                            </div>
                            <div class="date-parent text-center">
                                <p class="comment-date">${date.toLocaleString('en-GB')}</p>
                                <div >
                                    <div class='starrr userRate inline' userRate="${result.data[i].rate}"></div>

                                </div>
                            </div>
                        </div>
                      `
                        )
                    }
                    $('.starCount').text(allTotalRatio);
                    $('.ratio').starrr({
                            rating: totalRatio,
                            readOnly: true
                        })
                        console.log("totalRST",totalRatio)

                    console.log(result)
                    $('.userRate').each(function () {
                        console.log($(this).attr('userrate'))
                        $(this).starrr({
                            rating: $(this).attr('userrate'),
                            readOnly: true
                        })
                    })
                }
            })
        })



        // $('.star').click(function () {
        //     $('#myModal .modal-body').empty()
        //     $.ajax({
        //         url: `http://lord.codesroots.com/api/Productrates/getallusersrate/${$(this).attr('rateproductid')}.json`,
        //         type: 'GET',
        //         accept: 'application/json',
        //         success: function (result) {
        //             var totalRatio = result.newdataperweek[0][2];
        //             $('.rate-circle p').text(Math.round(totalRatio));
        //             $('.starCount').text(`(${result.newdataperweek[0][1]})`);
        //             $('.ratio').starrr({
        //                 rating: Math.round(totalRatio),
        //                 readOnly: true
        //             })
        //             for (var i = 0; i < result.newdataperweek[0][0].length; i++) {
        //                 var date = new Date(result.newdataperweek[0][0][i].created)
        //                 $('#myModal .modal-body').append(
        //                     `
        //                <div class="row">
        //                     <div class="comment-parent">
        //                         <p class="user-name">${result.newdataperweek[0][0][i].user.username}</p>
        //                         <p class="comment"> ${result.newdataperweek[0][0][i].comment}</p>
        //                     </div>
        //                     <div class="date-parent text-center">
        //                         <p class="comment-date">${date.toLocaleString('en-GB')}</p>
        //                         <div >
        //                             <div class='starrr userRate inline' userRate="${result.newdataperweek[0][0][i].rate}"></div>

        //                         </div>
        //                     </div>
        //                 </div>
        //               `
        //                 )
        //             }

        //             console.log(result)
        //             $('.userRate').each(function () {
        //                 console.log($(this).attr('userrate'))
        //                 $(this).starrr({
        //                     rating: $(this).attr('userrate'),
        //                     readOnly: true
        //                 })
        //             })
        //         }
        //     })
        // })


        var productId
        $('.addOfferBtn').click(function () {
            productId = parseInt($(this).attr('productid'));
            console.log(typeof(productId))
        })
        
        $('.addOffer').click(function () {
           var startdate = $('#startOfferDate').val();
           var enddate = $('#endOfferDate').val();
           var thepercentage = $('#offerPercentage').val();
            if($('#startOfferDate,#endOfferDate,#offerPercentage').val() !=''){
                $.ajax({
                    url: `http://parashot.codesroots.com/api/offers/addofferweb.json`,
                    type: 'POST',
                    data: {
                        "start_date": startdate,
                        "end_date": enddate,
                        "percentage": thepercentage,
                        "product_id": productId
                    },
                    accept: 'application/json',
                    success: function (result) {
                        console.log(result)
                        $('#addOffer').modal('hide')
                    }
                })
            }else{
                alert('')
            }
        });
        var dateToday = new Date();
        $('#startOfferDate,#endOfferDate').datepicker({
            dateFormat: "yy-mm-dd",
            minDate: dateToday,
            onSelect: function (date) {

            }
        });


        var offerId
        $('.editOfferBtn').click(function () {
            offerId = parseInt($(this).attr('offerid'));
            console.log("mo",offerId)

        })
        $('.editOffer').click(function () {
            if ($('#starteditDate').val() > $('#endeditDate').val()){
                $('#starteditDate').val(0)
            }
           else{
                if($('#starteditDate,#endeditDate,#editPercentage').val() !=''){
                   
                $.ajax({
                    url: `http://parashot.codesroots.com/api/offers/editofferweb/${offerId}.json`,
                    type: 'POST',
                    data: {
                        start_date: $('#starteditDate').val(),
                        end_date: $('#endeditDate').val(),
                        percentage: $('#editPercentage').val()
                    },
                    accept: 'application/json',
                    success: function (result) {
                        console.log(result)
                        $('#editOffer').modal('hide')

                    }
                })
                }else{
                    alert('')
                }
            }
       
        });
        
        $('#starteditDate,#endeditDate').datepicker({
            dateFormat: "dd/mm/yy",
            minDate: dateToday,
            onSelect: function (date) {
            }
        });


        $('.deleteOfferBtn').click(function () {     
            var offerOfId = $(this).attr('offerId');
            console.log(offerOfId)
                $.ajax({
                    url: `http://parashot.codesroots.com/api/offers/delete/${offerOfId}.json`,
                    type: 'POST',
                    accept: 'application/json',
                    success: function (result) {
                        console.log('bom',result)
                    }
                })
        });

        



        $('.productVisible').click(function () {
            var productId = $(this).attr('productId');
            var visible = $(this).hasClass('notVisible');
            $(this).toggleClass('notVisible')
            $.ajax({
                url: `http://parashot.codesroots.com/api/products/editproductweb/${productId}.json`,
                type: 'POST',
                data: {visible: (visible == true) ? true : false},
                accept: 'application/json',
                success: function (result) {
                    console.log(result)
                }

            })
        })


    </script>
    <?php
      }
      ?>
    

    <script>
        $('.search').click(function () {
            $('.filterHeader').fadeToggle(500)
        })
        $("[data-toggle=popover]").popover();
        $('.star').starrr({
            readOnly: true,
            rating: 5
        })
        $('.changeImg').click(function () {
            $('#productImg').click();
        })
        $("[data-toggle=popover]").click(function () {

        })
        $("#productImg").on('change', function () {

            $(".productImgPreview").empty(); //you can remove this code if you want previous user input
            for (let i = 0; i < this.files.length; ++i) {
                let filereader = new FileReader();
                let $img = jQuery.parseHTML(
                    `<img src=""  style="width: 100px;height: 100px;display: block;margin: 0 auto !important;">`
                );
                filereader.onload = function () {
                    $img[0].src = this.result;
                };
                filereader.readAsDataURL(this.files[i]);

                $(".productImgPreview").append($img);
            }


        });  
        // $('.gallery').not(':first').hide()
$('.sideMenu').niceScroll({
    railalign: 'left'
});
    </script>
     
</body>

</html>
