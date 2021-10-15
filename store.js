

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
	
	
	

	
//	scroll top button
	

	}); //End


