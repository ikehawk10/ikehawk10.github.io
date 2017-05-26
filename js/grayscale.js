/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

$(document).ready(function(){
    window.sr = ScrollReveal();
    sr.reveal('#projects', {
        duration: 1000, 
        origin: 'left',
        distance: '-20px',
        viewFactor: 0.25
    });
    sr.reveal('#skills', {
        duration: 1000,
        viewFactor: 0.5
    })
    $('.skillbar').skillBars({
        from: 0,
        speed: 4000, 
        interval: 100,
    });
    $(".logo-image").on("mouseenter", function(){
        $(this).addClass("jello");
    });
    $(".logo-image").on("mouseleave", function(){
        $(this).removeClass("jello");
    });
    $(".project-section").on("mouseenter", function(){
        $(this).children('a').css("visibility", "visible");
        $(this).children('a').removeClass("zoomOut");
        $(this).children('a').addClass("zoomIn");
    });
    $(".project-section").on("mouseleave", function(){
        $(this).children('a').removeClass("zoomIn");
        $(this).children('a').addClass("zoomOut");
    });

    $(".btn-circle").on("mouseenter", function(){
        $(this).addClass("bounce");
    });
    $(".btn-circle").on("mouseleave", function(){
        $(this).removeClass("bounce");
    })
    $(".description").on("mouseenter", function(){
        $(this).css({'visibility': 'visible', 'font-weight': "bold"});
    });
})












