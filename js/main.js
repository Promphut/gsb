/**
 * main.js
 *
 * For all custom js codes.
 */

jQuery(document).ready(function ($) {

	$.slidebars();

	// Create space for .site-header and loop for 4 seconds after
	function resizeHeaderSpace() {
		$('.site-header-space').outerHeight($('.site-header').outerHeight()).css('min-height', $('.site-header').outerHeight() + 'px');
		$('.site-mobile-navigation.-dropdown').css('padding-top', $('.site-header').outerHeight() + 'px');
	}
	resizeHeaderSpace();
	var intervalID = setInterval(resizeHeaderSpace, 400);
	setTimeout(function () { clearInterval(intervalID); }, 4000);
	$(window).resize(function () { resizeHeaderSpace() });





	// Add active for mobile toggle icon
	$('.site-toggle').click(function () {
		$(this).toggleClass('active');
		$('.site-mobile-navigation.-dropdown').toggleClass('active');
	});

	// Close menu (for One Page website)
	$('.site-mobile-navigation a').click(function () {
		$('.site-toggle, .site-mobile-navigation.-dropdown').removeClass('active');
	});

	// $('.carousel.carousel-slider').carousel({ fullWidth: true });




	$('.parallax').parallax();
	$('.collapsible').collapsible();
	$('.staff-list').parallax();
	$('.tooltipped').tooltip({
		delay: 50,
		html: true
	});
	$('.owl-carousel').owlCarousel({
		loop: true,
		singleItem: true,
		margin: 10,
		responsiveClass: true,
		navigation: true,
		lazyLoad: true,
		navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			600: {
				items: 3,
				nav: true
			},
			1000: {
				items: 6,
				slideBy: 6,
				nav: true

			}
		}
	})
	/* Will use this for .site-header auto show when scroll

	// Hide Header on on scroll down
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('.site-header').outerHeight();
	$(window).scroll(function(event){
		didScroll = true;
	});
	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);
	function hasScrolled() {
		var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
    	return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      $('.site-header').removeClass('-down').addClass('-up');
    } else {
      // Scroll Up
      if(st + $(window).height() < $(document).height()) {
      	$('.site-header').removeClass('-up').addClass('-down');
      }
    }
    lastScrollTop = st;
  }
  */

//// yourplans edited ////

	$(document).ready(function(){
		$('.site-mobile-navigation .menu-item-has-children').append('<i class="fa fa-angle-down"></i>');
		// Add dropdown sub-menu for mobile

		$('.site-mobile-navigation .menu-item-has-children > i').click(function () {
			$(this).parent().toggleClass('active');
		});


		$('.site-main').click(function () {
			$('.site-toggle').removeClass('active');
		});


		$(window).on('scroll',function(){
		stop = Math.round($(window).scrollTop());
		if (stop > 70) {
		$('.home .site-header').addClass('active');
		} else {
		$('.home .site-header').removeClass('active');
		}
		});

		// fixed nav mobile
		var $menu = $('.site-mobile-navigation'),
		top_level_link = '.site-mobile-navigation .menu-item-has-children > a';

			$menu.find('a').each(function() {
					$(this).off('click');

					if ( $(this).is(top_level_link) ) {
							$(this).attr('href', '#');
					}



			});

			$('.site-mobile-navigation .menu-item-has-children > a').click(function () {
				$(this).parent().toggleClass('active');
			});
// fixed nav mobile




$('.carousel.carousel-slider').append('<div class="nav-left"><i class="si-chevron-left"></i></div>');
$('.carousel.carousel-slider').append('<div class="nav-right"><i class="si-chevron-right"></i></div>');
$('.carousel.carousel-slider').carousel({
fullWidth: true
});


setTimeout(function() {
		autoplay();
	}, 3500)


function autoplay() {
	$('.carousel.carousel-slider').carousel('next');
	setTimeout(autoplay, 5000);
}
// move next carousel
 $('.nav-right').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.carousel.carousel-slider').carousel('next');
 });

 // move prev carousel
 $('.nav-left').click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$('.carousel.carousel-slider').carousel('prev');
 });




$('ul#user-menu > li > a').click(function(e){
$('#user-menu ul.sub-menu').toggleClass('active');
});





// ready
	});


});
