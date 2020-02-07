/*------------------------------------
 *Author:FortunaTheme
 *Template:Rezumate
 *Version:1.1
 *-------------------------------------
 */
(function($) {

    "use strict";

    jQuery(document).ready(function() {

        /*
         * -----------------------------------------------------------------
         *---------------------------Preloader------------------------------
         * -----------------------------------------------------------------
         */



        jQuery(window).on("load", function() {

            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(200).fadeOut('slow');
            $(window).scrollTop(0);
        });



        /*
         * -----------------------------------------------------------------
         *-------------------single-page-nav-plugin------------------------
         * -----------------------------------------------------------------
         */



        // Prevent console.log from generating errors in IE for the purposes of the demo
        if (!window.console) console = {
            log: function() {}
        };

        // The actual plugin
        var singleNav = jQuery('.single-page-nav');
        singleNav.singlePageNav({
            offset: singleNav.outerHeight(),
            filter: ':not(.external)',
            updateHash: true,
            beforeStart: function() {
                console.log('begin scrolling');
            },
            onComplete: function() {
                console.log('done scrolling');
            }
        });



        /*
         * -----------------------------------------------------------------
         *-----------------------Scroll Top button--------------------------
         * -----------------------------------------------------------------
         */



        var scrollTopBtn = $("#scroll-top-area");

        scrollTopBtn.on("click", function() {
            $('html, body').animate({
                scrollTop: 0
            }, 2000);
        });

        $(window).on("scroll", function() {
            var top2 = $(window).scrollTop();
            if (top2 < 150) {
                $("#scroll-top-area").css('display', 'none');
            } else if (top2 >= 150) {
                $("#scroll-top-area").css('display', 'block');
            }
        });



        /*
         * -----------------------------------------------------------------
         *-------------------------button animation-------------------------
         * -----------------------------------------------------------------
         */



        var skillBtn = $(".skill-btn");

        skillBtn.on("click", function() {
            $('html, body').animate({
                scrollTop: ($("#portfolio").offset().top) - 60
            }, 2000);
        });
        var hireBtn = $(".hire-btn");

        hireBtn.on("click", function() {
            $('html, body').animate({
                scrollTop: ($("#contact").offset().top) - 60
            }, 2000);
        });



        /*
         * -----------------------------------------------------------------
         *------------------------------Typed.js----------------------------
         * -----------------------------------------------------------------
         */



      



        /*
         * -----------------------------------------------------------------
         *--------------------Animation using animate.css-------------------
         * -----------------------------------------------------------------
         */






        /*
         * -----------------------------------------------------------------
         *-------------------------------Mixit Up---------------------------
         * -----------------------------------------------------------------
         */



       


        /*
         * -----------------------------------------------------------------
         *-----------------------------lightbox-----------------------------
         * -----------------------------------------------------------------
         */



        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            showImageNumberLabel: false,
        });



        /*
         * -----------------------------------------------------------------
         *------------------------------slicknav----------------------------
         * -----------------------------------------------------------------
         */



        var menu = $("#menu");

        menu.slicknav({
            label: '',
        });



        /*
         * -----------------------------------------------------------------
         *--------------------------skills progressbar----------------------
         * -----------------------------------------------------------------
         */



        var skill = jQuery('.skills');
        var prog80 = $('.prog-80');
        var prog90 = $('.prog-90');
        var prog86 = $('.prog-86');
        var prog94 = $('.prog-94');
        skill.waypoint(function() {

            prog80.css({
                "width": "80%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '80%'
        });
        skill.waypoint(function() {

            prog90.css({
                "width": "90%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '90%'
        });
        skill.waypoint(function() {

            prog86.css({
                "width": "86%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '86%'
        });
        skill.waypoint(function() {

            prog94.css({
                "width": "94%",
                "transition": "2s ease-in"
            });
        }, {
            offset: '94%'
        });



        /*
         * -----------------------------------------------------------------
         *--------------------------stellar.js------------------------------
         * -----------------------------------------------------------------
         */

        $(window).stellar();


        /*
         * -----------------------------------------------------------------
         *----------------------contact form ajax---------------------------
         * -----------------------------------------------------------------
         */



        var contactSubmit = $('#contact-submit');

        contactSubmit.on('click', function(e) {
            e.preventDefault();
            var name = $('#name').val();
            var email = $('#email').val();

            var message = $('#message').val();
            var form = new Array({
                'name': name,
                'email': email,
                'message': message
            });

            $.ajax({
                type: 'POST',
                url: "contact.php",
                data: ({
                    'action': 'contact',
                    'form': form
                })
            }).done(function(data) {
                $('#contact .result').html(data);

                $(".contact-form-area")[0].reset();

            });

        });



        /*
         * -----------------------------------------------------------------
         *--------------------Owl Carousel For Testimonial------------------
         * -----------------------------------------------------------------
         */



        var testimonial = $("#client-testimonial #owl-demo-testimonial");

        testimonial.owlCarousel({
            items: 2, //1 item above 1000px browser width
            itemsDesktop: [1000, 2], //1 item between 1000px and 901px
            itemsDesktopSmall: [900, 1], //1 item betweem 900px and 601px
            itemsTablet: [600, 1], //1 item between 600 and 0
            itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
            autoPlay: 6000,
            pauseOnHover: true
        });

    });

})(jQuery);