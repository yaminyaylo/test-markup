// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);

      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');

      event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
      $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
      offset: {
        top: 100 
      }
    });

    // Contact Form Submit
    $('.form-contact-container button[type=submit]').on('click', function(event) {
      event.preventDefault();
      $('.form-contact-container').hide();
      $('.form-contact-container-on-success').show();
    });

    $('.form-contact-container-on-success button[type=submit]').on('click', function(event) {
      event.preventDefault();
      $('.form-contact-container-on-success').hide();
      $('.form-contact-container').show();
    });

})(jQuery); // End of use strict
