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
            $(".project-image").on("mouseenter", function(){
                $(".project-image").addClass("notHovered");
                $(this).removeClass("notHovered");
                $(this).removeClass("leave");
                $(this).addClass("hover");

            });
            $(".project-image").on("mouseleave", function(){
                $(".project-image").removeClass("notHovered");
                $(this).addClass("leave");
            });
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
            $(".project-image").on("mouseenter", function(){
                $(this).parent().siblings('p').css('visibility', 'visible');
                $(this).parent().siblings('p').addClass('slideInUp');
            });
        })












