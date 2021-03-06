(function($){
    "use strict";
    var $window=$(window);
    $('#preloader').fadeOut('normall',function(){
        $(this).remove();
    });
    $window.on("load",function(){
        $('.single-img').magnificPopup({
            delegate:'.popimg',
            type:'image'
        });
        $('.gallery').magnificPopup({
            delegate:'.popimg',
            type:'image',
            gallery:{
                enabled:true
            }
        });
        var $gallery=$('.gallery').isotope({});
        $('.filtering').on('click','span',function(){
            var filterValue=$(this).attr('data-filter');
            $gallery.isotope({filter:filterValue});
        });
        $('.filtering').on('click','span',function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
        $window.stellar();
    });
    $window.on('scroll',function(){
        var scroll=$window.scrollTop();
        var logoinner=$(".navbar-brand img");
        var logodefault=$(".navbar-brand.logodefault img");
        var logowhite=$(".navbar-brand.logowhite img");
        var logowhitedark=$(".navbar-brand.logowhite-dark img");
        var logo2=$(".navbar-brand.logo2 img");
        var logo4=$(".navbar-brand.logo4 img");
        var logo5=$(".navbar-brand.logo5 img");
        var logo6=$(".navbar-brand.logo6 img");
        var logo7=$(".navbar-brand.logo7 img");
        var logo8=$(".navbar-brand.logo8 img");
        if(scroll<=50){
            $("header").removeClass("scrollHeader").addClass("fixedHeader");
            logoinner.attr('src','img/logos/name.png');
            logodefault.attr('src','img/logos/name.png');
            logowhite.attr('src','img/logos/name.png');
            logowhitedark.attr('src','img/logos/name.png');
            logo2.attr('src','img/logos/name.png');
            logo4.attr('src','img/logos/name.png');
            logo5.attr('src','img/logos/name.png');
            logo6.attr('src','img/logos/name.png');
            logo7.attr('src','img/logos/name.png');
            logo8.attr('src','img/logos/name.png');
        } 
        else{
            $("header").removeClass("fixedHeader").addClass("scrollHeader");
            logoinner.attr('src','img/logos/logo.png');
            logodefault.attr('src','img/logos/name.png');
            logowhite.attr('src','img/logos/name.png');
            logowhitedark.attr('src','img/logos/name.png');
            logo2.attr('src','img/logos/name.png');
            logo4.attr('src','img/logos/name.png');
            logo5.attr('src','img/logos/name.png');
            logo6.attr('src','img/logos/name.png');
            logo7.attr('src','img/logos/name.png');
            logo8.attr('src','img/logos/name.png');
        }
    });
    $window.on('scroll',function(){
        if($(this).scrollTop()>500){
            $(".scroll-to-top").fadeIn(400);
        }
        else{
            $(".scroll-to-top").fadeOut(400);
        }
    });
    $(".scroll-to-top").on('click',function(event){
        event.preventDefault();
        $("html, body").animate({
            scrollTop:0
        },600);
    });
    var pageSection=$(".parallax,.bg-img");
    pageSection.each(function(indx){
        if($(this).attr("data-background")){
            $(this).css("background-image","url("+$(this).data("background")+")");
        }
    });

    $window.resize(function(event){
        setTimeout(function(){
            SetResizeContent();
        },500);
        event.preventDefault();
    });
    function fullScreenHeight(){
        var element=$(".full-screen");
        var $minheight=$window.height();
        element.css('min-height',$minheight);
    } 
    function ScreenFixedHeight(){
        var $headerHeight=$("header").height();
        var element=$(".screen-height");
        var $screenheight=$window.height()-$headerHeight;
        element.css('height',$screenheight);
    } 
    function SetResizeContent(){
        fullScreenHeight();
        ScreenFixedHeight();
    } 
    SetResizeContent();
    $(document).ready(function(){


$('.carousel-style4 .owl-carousel').owlCarousel({
    loop:true,
    dots:true,
    nav:true,
    navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
    autoplay:false,
    autoplayTimeout:5000,
    responsiveClass:true,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:2,
            margin:10,
        },
        481:{
            items:2,
            margin:5,
        },
        500:{
            items:3,
            margin:20,
        },
        992:{
            items:4,
            margin:30,
        },
        1200:{
            items:6,
            margin:15,
        }
    }
}); 



$(".home-business-slider").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    smartSpeed:800,
    nav:true,
    dots:true,
    navText:['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
    responsive:{
        0:{
            nav:false
        },
        768:{
            nav:true
        }
    }
});


if ($("#rev_slider_3").length !== 0) {
    var tpj = jQuery;
    var revapi4;
    tpj(document).ready(function() {
        if (tpj("#rev_slider_3").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_3");
        } else {
            revapi4 = tpj("#rev_slider_3").show().revolution({
                sliderLayout: "fullscreen",
                delay: 12000,
                responsiveLevels: [4096, 1024, 778, 420],
                gridwidth: [1170, 1024, 778, 410],
                gridheight: 600,
                hideThumbs: 10,
                fullScreenAutoWidth: "on",
                fullScreenOffsetContainer: ".rev-offset",
                navigation: {
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        enable: true,
                        style: "hermes",
                        tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div> <div class="tp-arr-titleholder">{{title}}</div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 0,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 0,
                            v_offset: 0
                        }
                    },
                    bullets: {
                        style: "",
                        enable: false,
                        hide_onmobile: false,
                        hide_onleave: true,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        space: 12,
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 30,
                        tmp: ''
                    },
                },
                parallax: {
                    type: "scroll",
                    levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                    origo: "enterpoint",
                    speed: 400,
                    bgparallax: "on",
                    disable_onmobile: "on"
                },
                spinner: "spinner4"
            });
        }
    });
}

if ($("#rev_slider_2").length !== 0) {
    var tpj = jQuery;
    var revapi2;
    tpj(document).ready(function() {
        if (tpj("#rev_slider_2").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_2");
        } else {
            revapi2 = tpj("#rev_slider_2").show().revolution({
                sliderType: "standard",
                sliderLayout: "fullwidth",
                dottedOverlay: "none",
                delay: 9000,
                spinner: "spinner4",
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        enable: true,
                        style: 'metis',
                        tmp: '',
                        rtl: false,
                        hide_onleave: true,
                        hide_onmobile: true,
                        hide_under: 0,
                        hide_over: 9999,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        left: {
                            container: 'slider',
                            h_align: 'left',
                            v_align: 'center',
                            h_offset: 20,
                            v_offset: 0
                        },
                        right: {
                            container: 'slider',
                            h_align: 'right',
                            v_align: 'center',
                            h_offset: 20,
                            v_offset: 0
                        }
                    },
                    bullets: {
                        enable: false,
                    },
                },
                responsiveLevels: [1240, 1024, 767, 480],
                gridwidth: [1170, 1170, 767, 480],
                gridheight: [700, 700, 600, 600],
                lazyType: "none",
                shadow: 0,
                shuffle: "off",
                autoHeight: "off",
            });
        }
    });
}


if ($("#rev_slider_4").length !== 0) {
    var tpj = jQuery;
    var revapi5;
    tpj(document).ready(function() {
        if (tpj("#rev_slider_4").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_4");
        } else {
            revapi5 = tpj("#rev_slider_4").show().revolution({
                sliderLayout: "fullscreen",
                delay: 12000,
                responsiveLevels: [4096, 1024, 778, 420],
                gridwidth: [1170, 1024, 778, 410],
                gridheight: 600,
                hideThumbs: 10,
                fullScreenAutoWidth: "on",
                fullScreenOffsetContainer: "",
                navigation: {
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        enable: false,
                        style: "hermes",
                        tmp: '<div class="tp-arr-allwrapper"> <div class="tp-arr-imgholder"></div> <div class="tp-arr-titleholder">{{title}}</div> </div>',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 0,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 0,
                            v_offset: 0
                        }
                    },
                    bullets: {
                        style: "",
                        enable: true,
                        hide_onmobile: false,
                        hide_onleave: true,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "vertical",
                        space: 18,
                        h_align: "right",
                        v_align: "center",
                        h_offset: 40,
                        v_offset: 0,
                        tmp: ''
                    },
                },
                parallax: {
                    type: "scroll",
                    levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                    origo: "enterpoint",
                    speed: 400,
                    bgparallax: "on",
                    disable_onmobile: "on"
                },
                spinner: "spinner4"
            });
        }
    });
}




$('.slider-fade .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    margin: 0,
    autoplay: true,
    smartSpeed: 500,
    mouseDrag: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
});




$('#clients').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:1000,
    responsiveClass:true,
    autoplayHoverPause:false,
    responsive:{
        0:{items:4,margin:0},
        768:{items:6,margin:10,},
        992:{items:8,margin:20,},
        1200:{items:10,margin:40,}
    }
}); 





$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    dots:true,
    margin:0,
    autoplay:true,
    smartSpeed:500
});
var owl = $('.slider-fade');
owl.on('changed.owl.carousel', function(event) {
    var item = event.item.index - 2;
    $('h3').removeClass('animated fadeInUp');
    $('h1').removeClass('animated fadeInUp');
    $('p').removeClass('animated fadeInUp');
    $('.butn').removeClass('animated fadeInUp');
    $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated fadeInUp');
    $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
    $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
    $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated fadeInUp');
});



$('.countup').counterUp({
    delay:25,
    time:2000
});

if($(".countdown").length!==0){
    var tpj=jQuery;
    var countdown;
    tpj(document).ready(function(){
        if(tpj(".countdown").countdown==undefined){
            revslider_showDoubleJqueryError(".countdown");
        }
        else{
            countdown=tpj(".countdown").show().countdown({
                date:"30 May 2021 00:00:00",
                format:"on"
            });
        }
    });
} 
});
})
(jQuery);