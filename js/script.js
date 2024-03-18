

$(document).ready(function(){

    // wow initiation
    new WOW().init();

    // navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

    // navbar bg change on scroll
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 100){
            $('.navbar').addClass('cng-navbar');
        } else {
            $('.navbar').removeClass('cng-navbar');
        }
    });

    // sample video popup
    // $(document).ready(function() {
    //     $('.popup-youtube').magnificPopup({
    //         disableOn: 700,
    //         type: 'iframe',
    //         mainClass: 'mfp-fade',
    //         removalDelay: 160,
    //         preloader: false,
    
    //         fixedContentPos: false
    //     });
    // });

    // $(document).ready(function() {
    //     $('.popup-youtube').magnificPopup({
    //         type: 'iframe',
    //         mainClass: 'mfp-fade',
    //         removalDelay: 160,
    //         preloader: false,
    //         fixedContentPos: false
    //     });
    // });
    
    $(document).ready(function() {
        $('.popup-google-drive').magnificPopup({
            type: 'iframe',
            iframe: {
                patterns: {
                    drive: {
                        index: 'google.com',
                        id: function(url) {        
                            // Capture the FILE_ID from the URL.
                            var m = url.match(/\/d\/(.+?)\//);
                            if (m !== null) {
                                if(m[1] != null) {
                                    return m[1];
                                }
                            }
                            return null;
                        },
                        src: 'https://drive.google.com/file/d/%id%/preview'
                    }
                }
            }
        });
    });

    // team carousel 
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive:{
            0:{
                items: 2
            }, 
            600:{
                items: 3
            },
            1000:{
                items: 5
            }
        }
    });

    // faq accordion
    $('.faq-head').each(function(){
        $(this).click(function(){
            $(this).next().toggleClass('show-faq-content');
            let icon = $(this).children('span').children("i").attr('class');

            if(icon == "fas fa-plus"){
                $(this).children('span').html('<i class = "fas fa-minus"></i>');
            } else {
                $(this).children('span').html('<i class = "fas fa-plus"></i>');
            }
        });
    });

    // function loadDrift() {
    //     "use strict";

    //     var t = window.driftt = window.drift = window.driftt || [];
    //     if (!t.init) {
    //         if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    //         t.invoked = !0;
    //         t.methods = ["identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on"];
    //         t.factory = function(e) {
    //             return function() {
    //                 var n = Array.prototype.slice.call(arguments);
    //                 n.unshift(e), t.push(n), t;
    //             };
    //         };
    //         t.methods.forEach(function(e) {
    //             t[e] = t.factory(e);
    //         });
    //         t.load = function(t) {
    //             var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
    //             o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
    //             var i = document.getElementsByTagName("script")[0];
    //             i.parentNode.insertBefore(o, i);
    //         };
    //     }
    // }
    // loadDrift();
    // drift.SNIPPET_VERSION = '0.3.1';
    // drift.load('xu9bh2tyg2g2'); // Replace 'YOUR_DRIFT_ID' with your actual Drift ID

    // testimonial carousel 
    $('.testimonial .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        items: 1
    });

    $('.iiitb .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1 // default items for small devices
            },
            600: {
                items: 2 // adjust this as per your design for medium devices
            },
            1000: {
                items: 4 // set this to 6 for large devices
            }
        }
    });
    

});