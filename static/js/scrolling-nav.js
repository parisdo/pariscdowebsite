//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").css("background", "white");
        $(".navbar-default .navbar-nav>li>a").css("color", "black");
        $(".navbar").css("-webkit-box-shadow", "0px 6px 63px -10px rgba(0,0,0,0.75)")
        $(".navbar").css("-moz-box-shadow", "0px 6px 63px -10px rgba(0,0,0,0.75)")
        $(".navbar").css("box-shadow", "0px 6px 63px -10px rgba(0,0,0,0.75)")
    } else {
    $(".navbar").css("-webkit-box-shadow", "none")
    $(".navbar").css("-moz-box-shadow", "none")
    $(".navbar").css("box-shadow", "none")
   }
});



//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
