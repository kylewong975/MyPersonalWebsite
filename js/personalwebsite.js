(function($) {
    "use strict";

    //When clicking on the navigation buttons, have a smooth animation that takes you there.
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutCubic');
        event.preventDefault();
    });


    //highlight section according to where you are on the main website
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    //when on smaller screens, where there is a menu navigation, hide the menu navigation after clicking on a section
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

})(jQuery);