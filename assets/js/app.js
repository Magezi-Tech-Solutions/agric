
var App = function() {
    var MediaSize = {
        xl: 1200,
        lg: 992,
        md: 991,
        sm: 576
    };
    var windowWidth;
    var Selector = {
        mainHeader: '.header.navbar',
        fixed: '.fixed-top',
        mainContainer: '.main-container',
        sidebar: '#sidebar',
        sidebarContent: '#sidebar-content',
        ariaExpandedTrue: '#sidebar [aria-expanded="true"]',
        ariaExpandedFalse: '#sidebar [aria-expanded="false"]',
        contentWrapper: '#content',
        contentWrapperContent: '.container',
        mainContentArea: '.main-content',
        overlay: {
            sidebar: '.overlay',
        }
    };
    var toggleFunction = {
        sidebar: function($recentSubmenu) {
            windowWidth = window.innerWidth;
            $('.sidebarCollapse').on('click', function (sidebar) {
                sidebar.preventDefault();
                $(Selector.mainContainer).toggleClass("sidebar-closed");
                $(Selector.mainHeader).addClass('expand-header');
                $(Selector.mainContainer).toggleClass("sbar-open");
                if ( windowWidth <= MediaSize.md ) {
                    $('.overlay').toggleClass('show');
                    $('html,body').toggleClass('sidebar-noneoverflow');
                }
            });
        },
        subSidebar: function() {
            $('.sidebar-wrapper .menu-categories li.menu a.main-item').on('click', function (event) {
              
                $target = $(event.currentTarget);   
                $target.parent().addClass('active');
                if($(".sidebar-submenu .submenu").hasClass('show')){
                    $(".sidebar-submenu .submenu").removeClass('show');
                }
                var x = this.getAttribute("id"); // getting href value
                document.getElementById(x+'Menu').classList.add('show'); // find similar id and add show class
                $(Selector.mainContainer).addClass("sub-sidebar-open");
                $('.overlay').addClass('show');
            });
        },
        overlay: function() {
            $('#dismiss, .overlay, cs-overlay').on('click', function () {
                $(".menu-categories li.menu").removeClass('active'); // remove white border on left side of active li
                // hide overlay
                $('.overlay').removeClass('show');
                $(Selector.mainContainer).removeClass("sub-sidebar-open");
                $(".sidebar-submenu .submenu").removeClass('show');
                $('html,body').removeClass('sidebar-noneoverflow');
                $(Selector.mainHeader).removeClass('expand-header');
                if ( windowWidth <= MediaSize.md ) {
                    $(Selector.mainContainer).toggleClass("sidebar-closed");
                    $(Selector.mainContainer).toggleClass("sbar-open");
                }
            });
        },
      
  
    }
    var inBuiltfunctionality = {
        preventScrollBody: function() {
            $('#sidebar').bind('mousewheel DOMMouseScroll', function(e) {
                var scrollTo = null;
                if (e.type == 'mousewheel') {
                    scrollTo = (e.originalEvent.wheelDelta * -1);
                }
                else if (e.type == 'DOMMouseScroll') {
                    scrollTo = 40 * e.originalEvent.detail;
                }
                if (scrollTo) {
                    e.preventDefault();
                    $(this).scrollTop(scrollTo + $(this).scrollTop());
                }
            });
     
        },
    }
    var fullScreenMode = {
        fullscreen: function() {
            var toggle; 
            $('.full-screen-mode').on('click', function () {
                toggle = !toggle;
                var myId = document.getElementById('fullScreenIcon');
                if(toggle){
                    var elem = document.documentElement;
                    if (elem.requestFullscreen) {
                        elem.requestFullscreen();
                    } 
                }
            })
        },
    }
    var _mobileResolution = {
        onRefresh: function() {
            var windowWidth = window.innerWidth;
            if ( windowWidth <= MediaSize.md ) {
                toggleFunction.sidebar();
            }
        },
    }
    var _desktopResolution = {
        onRefresh: function() {
            var windowWidth = window.innerWidth;
            if ( windowWidth > MediaSize.md ) {
                toggleFunction.sidebar(true);
            }
        },
    }
    function sidebarFunctionality() {
        function sidebarCloser() {
            if (window.innerWidth <= 991 ) {
                if (!$('body').hasClass('alt-menu')) {
                    $("#container").addClass("sidebar-closed");
                    $('.overlay').removeClass('show');
                } else {
                    // $(".navbar").removeClass("expand-header");
                    $('.overlay').removeClass('show');
                    $('#container').removeClass('sbar-open');
                    $('html, body').removeClass('sidebar-noneoverflow');
                }
            } else if (window.innerWidth > 991 ) {
                if (!$('body').hasClass('alt-menu')) {
                    $("#container").removeClass("sidebar-closed");
                    // $(".navbar").removeClass("expand-header");
                    $('.overlay').removeClass('show');
                    $('#container').removeClass('sbar-open');
                    $('html, body').removeClass('sidebar-noneoverflow');
                } else {
                    $('html, body').addClass('sidebar-noneoverflow');
                    $("#container").addClass("sidebar-closed");
                    // $(".navbar").addClass("expand-header");
                    $('.overlay').addClass('show');
                    $('#container').addClass('sbar-open');
                }
            }
        }
        function sidebarMobCheck() {
            if (window.innerWidth <= 991 ) {
                if ( $('.main-container').hasClass('sbar-open') ) {
                    return;
                } else {
                    sidebarCloser()
                }
            } else if (window.innerWidth > 991 ) {
                sidebarCloser();
            }
        }
        sidebarCloser();
        $(window).resize(function(event) {
            sidebarMobCheck();
        });
   
    }
    return {
        init: function() {
            toggleFunction.overlay();
        
            toggleFunction.subSidebar();
          
            fullScreenMode.fullscreen();
         
            _desktopResolution.onRefresh();
       
            _mobileResolution.onRefresh();
        
            sidebarFunctionality();
            inBuiltfunctionality.preventScrollBody();
        }
    }
}();
