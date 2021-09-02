jQuery(document).ready(function($) {
    "use strict"

    // ------- Home Slider Start ------- //
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
    // ------- Home Slider End ------- //


	}); //End


