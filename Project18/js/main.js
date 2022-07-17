(function ($) {
	
	$(window).scroll(function() {				
		var scroll = $(window).scrollTop();
		if (scroll <= 70) {
			$('.site-header-main').removeClass('menu-sticky').addClass('menu-not-sticky');
			$('body').removeClass('has-sticky').addClass('remove-sticky');
		}
		else{				
			$('.site-header-main').addClass('menu-sticky').removeClass('menu-not-sticky');
			$('body').addClass('has-sticky').removeClass('remove-sticky');
		}
	}); 
	// function isIE() {
		// ua = navigator.userAgent;
		// var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	  
		// return is_ie; 
	// }
	// if (isIE()){
		// $('body').addClass('is-ie');
	// }
	$(document).ready(function(){	
		$('.slider-testimonial').slick({
			infinite: true,
			slidesToShow: 2,
			
			arrows: false,
			dots: true,
			autoplay: false,
			autoplaySpeed: 5000,

			responsive: [{
					breakpoint: 1151,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});				
		
		
		if($(window).width()<1151){
			$('.oakwood-insta-images').slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				arrows: false,
				dots: false,
				autoplay: false,
				responsive: [{
					
					breakpoint: 375,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}]
			}); 
		}			
		
	});	
	jQuery(document).ready(function($){
		$(".menu-toggle").click(function() {
			// $(".main-navigation").slideToggle(500);
			
			if($('.main-navigation').hasClass('menu-mobile')){
				$('.main-navigation').removeClass('menu-mobile')
			}
			else{
				$('.main-navigation').addClass('menu-mobile')
			}	
			
			if($('body').hasClass('openmenu')){
				$('body').removeClass('openmenu')
			}
			else{
				$('body').addClass('openmenu')
			}	
		});
		
		$(".close-menu-mobile").click(function() {
			if($('.main-navigation').hasClass('menu-mobile')){
				$('.main-navigation').removeClass('menu-mobile')
			}
			
			if($('body').hasClass('openmenu')){
				$('body').removeClass('openmenu')
			}
		});		
	});
	
	if ($('#back-to-top').length) {
		var scrollTrigger = 200, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#back-to-top').addClass('show');
				} else {
					$('#back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 130
		},500);
		e.preventDefault();
	});
	$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links		
		
		if($('.main-navigation').hasClass('menu-mobile')){
			$('.main-navigation').removeClass('menu-mobile')
		}
		
		if($('body').hasClass('openmenu')){
			$('body').removeClass('openmenu')
		}
		
	});
	

	$(document).ready(function() {
		$('.footer-menu li a').each(function() {
			if ($(this).prop('href') == window.location.href) {
				$(this).addClass('selected');
			}
		});
	});
})(jQuery);