

$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})

jQuery(document).ready(function($) {
    "use strict"

//navigation bar fixed top{
	
let nav_offset_top = $('header').height() + 50;

    function navbarFixed() {
        if ($('header').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('header nav').addClass('navbar_fixed');
                 
                    
                } else {
                    $('header nav').removeClass('navbar_fixed');
                    
                }
            })
        }
    }

    navbarFixed(); 
	
	
	
//    hero secyion slider
    if ($('#home-slider').length) {
        $('#home-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
			dots:false,
            items: 1,
            autoplay: true,

        })
    }
//   patner logos slider
if ($('#partner-logos').length) {
			$('#partner-logos').owlCarousel({
				loop: true,
				center: true,
				autoplay: true,
				margin: 30,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1,
						loop: true,
					},
					600: {
						items: 3,
						loop: true,
					},
					1000: {
						items: 5,
						loop: true,
	
					}
				}
			})
		}
	
	
//	    Our customer reviews
	        $('#customers-testimonials').owlCarousel({
		            loop: true,
		            center: true,
		            items: 3,
		            margin: 0,
		            autoplay: true,
		            dots:true,
		            autoplayTimeout: 8500,
		            smartSpeed: 450,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 2
		              },
		              1170: {
		                items: 3
		              }
		            }
		        }); 
	
	
//	scroll top button
	

	}); //End


