(function ($) {
	"use strict";
	var windowOn = $(window);

	/*======================================
	Preloader activation
	========================================*/
	$(window).on('load', function (event) {
		$('.preloader').delay(200).fadeOut(500);
	});

	/*======================================
	button hover
	========================================*/
	$('.btn-hover').on('mouseenter', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({
            top: 0,
            left: 0
        })
        $(this).find('span').css({
            top: relY,
            left: relX
        })
    }).on('mouseout', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({
            top: 0,
            left: 0
        })
        $(this).find('span').css({
            top: relY,
            left: relX
        })
    });


	/*======================================
	Mobile Menu Js
	========================================*/
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	$("#mobile-menu-2").meanmenu({
		meanMenuContainer: ".mobile-menu-2",
		meanScreenWidth: "4000",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	/*======================================
	Sidebar Toggle
	========================================*/
	$(".offcanvas__close,.offcanvas__overlay").on("click", function () {
		$(".offcanvas__info").removeClass("info-open");
		$(".offcanvas__overlay").removeClass("overlay-open");
	});
	$(".sidebar__toggle").on("click", function () {
		$(".offcanvas__info").addClass("info-open");
		$(".offcanvas__overlay").addClass("overlay-open");
	});

	/*======================================
	Body overlay Js
	========================================*/
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".vw-search-area").removeClass("opened");;
		$(".body-overlay").removeClass("opened");
	});

	/*======================================
	Search Header Js
	========================================*/
	$(".search-toggle-open").on("click", function () {
		$(".vw-search-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".tp-search-close-btn").on("click", function () {
		$(".vw-search-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});

  	/*======================================
	Sticky Header Js
	========================================*/

	$(window).scroll(function () {
		if ($(this).scrollTop() > 250) {
		  $("#header-sticky").addClass("sticky");
		} else {
		  $("#header-sticky").removeClass("sticky");
		}
	});

	/*======================================
	Data Css js
	========================================*/
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});
	
	/*======================================
	 Project Options Click
	========================================*/
	
	$(".option").hover(function(){
		$(".option").removeClass("active");
		$(this).addClass("active").animate({opacity: '0.8'}, "slow").animate({opacity: '1'}, "slow");
	});

	/*======================================
	MagnificPopup image view
	========================================*/

	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	$(window).on("load", function () {
  
		if ($(".post-filter").length) {
		  var postFilterList = $(".post-filter li");
		  // for first init
		  $(".filter-layout").isotope({
			filter: ".filter-item",
			animationOptions: {
			  duration: 500,
			  easing: "linear",
			  queue: false
			}
		  });
	
		  // on click filter links
		  postFilterList.on("click", function () {
			var Self = $(this);
			var selector = Self.attr("data-filter");
			postFilterList.removeClass("active");
			Self.addClass("active");
	
			$(".filter-layout").isotope({
			  filter: selector,
			  animationOptions: {
				duration: 500,
				easing: "linear",
				queue: false
			  }
			});
			return false;
		  });
		}
	
	  });

	/*======================================
	MagnificPopup video view
	========================================*/
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	/*======================================
	Counter Js
	========================================*/
	$(".counter").counterUp({
		delay: 10,
		time: 1000,
	});

	/*======================================
	Wow Js
	========================================*/
	new WOW().init();

	/*======================================
	Back To Top Js
	========================================*/
	var progressPath = document.querySelector('.backtotop-wrap path');
	var pathLength = progressPath.getTotalLength();
	progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
	progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	progressPath.style.strokeDashoffset = pathLength;
	progressPath.getBoundingClientRect();
	progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
	var updateProgress = function () {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var progress = pathLength - (scroll * pathLength / height);
		progressPath.style.strokeDashoffset = progress;
	}
	updateProgress();
	$(window).scroll(updateProgress);
	var offset = 150;
	var duration = 550;
	jQuery(window).on('scroll', function () {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.backtotop-wrap').addClass('active-progress');
		} else {
			jQuery('.backtotop-wrap').removeClass('active-progress');
		}
	});
	jQuery('.backtotop-wrap').on('click', function (event) {
		event.preventDefault();
		jQuery('html, body').animate({ scrollTop: 0 }, duration);
		return false;
	})

	/*======================================
	visa slider Js used
	========================================*/
	var visaOne = new Swiper('.visa-1-active', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		roundLengths: true,
		autoplay: {
			delay: 2000,
		},
		navigation: {
			nextEl: ".visa-1-button-next",
			prevEl: ".visa-1-button-prev",
		},
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		speed: 2000,
	});

	
	/*======================================
	visa slider Js used
	========================================*/
	var visaOne = new Swiper('.visa-2-active', {
		slidesPerView: 4,
		spaceBetween: 24,
		loop: true,
		roundLengths: true,
		autoplay: {
			delay: 2000,
		},
		navigation: {
			nextEl: ".visa-1-button-next",
			prevEl: ".visa-1-button-prev",
		},
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		speed: 2000,
	});


	/*======================================
	Team slider Js
	========================================*/
	var teamOne = new Swiper('.team-1-active', {
		slidesPerView: 4,
		spaceBetween: 0,
		loop: true,
		roundLengths: true,
		autoplay: {
			delay: 2000,
		},
		navigation: {
			nextEl: ".team-1-button-next",
			prevEl: ".team-1-button-prev",
		},
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		speed: 3000,
	});

	
	/*======================================
	Projects slider Js
	========================================*/
	var projectsOne = new Swiper('.projects-1-active', {
		slidesPerView: 4,
		spaceBetween: 0,
		loop: true,
		roundLengths: true,
		autoplay: {
			delay: 3000,
		},
		navigation: {
			nextEl: ".projects-1-next",
			prevEl: ".projects-1-prev",
		},
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		speed: 3000,
	});

	/*======================================
	Testimonial slider Js
	========================================*/

	var testimonialOne = new Swiper('.testimonial-1-active', {
		slidesPerView: 2,
		spaceBetween: 20,
		loop: true,
		roundLengths: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: ".testimonial-1-swiper-dot",
			clickable: true,
		},
		navigation: {
			nextEl: ".testimonial-1-button-next",
			prevEl: ".testimonial-1-button-prev",
		},
		breakpoints: {
			'1400': {
				slidesPerView: 2,
			},
			'1200': {
				slidesPerView: 2,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		speed: 3000,
		
	});


	/*======================================
	brand slider Js //used
	========================================*/
	var brand = new Swiper('.brand-active', {
		slidesPerView: 5,
		spaceBetween: 70,
		loop: true,
		autoplay: {
			delay: 3000,
		},
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		speed: 3000,
	});

	/*======================================
	coaching slider Js //used
	========================================*/
	var coachingOne = new Swiper('.coaching-1-active', {
		slidesPerView: 3,
		spaceBetween: 20,
		loop: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: ".coaching-1-dot",
			clickable: true,
		},
		navigation: {
			nextEl: ".coaching-1-next",
			prevEl: ".coaching-1-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		speed: 3000,
	});


	
	/*======================================
	coachingTwo slider Js //used
	========================================*/
	var coachingTwo = new Swiper('.coaching-2-active', {
		slidesPerView: 4,
		spaceBetween: 20,
		loop: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: ".coaching-1-dot",
			clickable: true,
		},
		navigation: {
			nextEl: ".coaching-1-next",
			prevEl: ".coaching-1-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		speed: 3000,
	});
	

	/*======================================
	choose slider Js //used
	========================================*/

	var chooseOne = new Swiper('.choose-1-active', {
		direction: 'vertical',
		slidesPerView: 3,
		spaceBetween: 10,	 
		loop: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: ".choose-1-swiper-dot",
			clickable: true,
		},
		navigation: {
			nextEl: ".choose-1-next",
			prevEl: ".choose-1-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 2,
			},
		},
		speed: 3000,
	});

	/*======================================
	IMAGE 3 slider Js //used
	========================================*/

	var chooseOne = new Swiper('.image-3-active', {
		slidesPerView: 4,
		spaceBetween: 30,	 
		loop: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: ".image-3-swiper-dot",
			clickable: true,
		},
		navigation: {
			nextEl: ".image-3-next",
			prevEl: ".image-3-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		speed: 3000,
	});


	/*======================================
	COUNTRY 3 slider Js //used
	========================================*/

	var countryThree = new Swiper('.country-3-active', {
		slidesPerView: 5,
		spaceBetween: 24,	 
		loop: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: ".country-3-active-dot",
			clickable: true,
		},
		navigation: {
			nextEl: ".country-3-next",
			prevEl: ".country-3-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		speed: 3000,
	});


	/*======================================
	Banner slider Js
	========================================*/
	var banner = new Swiper(".banner-slider", {
		// Optional parameters
		loop: true,
		autoplay: {
			delay: 3000,
		},
		spaceBetween: 0,
		effect: "fade",
		// If we need pagination
		pagination: {
		  el: ".banner-custom-pagination",
		  clickable: true,
		},
		// Navigation arrows
		navigation: {
		  nextEl: ".banner-button-custom-next",
		  prevEl: ".banner-button-custom-prev"
		},
		speed: 3000,
	  });


	/*======================================
	Radial Progressbar Js
	========================================*/
	   // Radial Progressbar
	   function radial_animate() { 
		$('svg.radial-progress').each(function( index, value ) { 

			$(this).find($('circle.bar--animated')).removeAttr( 'style' );    
			// Get element in Veiw port
			var elementTop = $(this).offset().top;
			var elementBottom = elementTop + $(this).outerHeight();
			var viewportTop = $(window).scrollTop();
			var viewportBottom = viewportTop + $(window).height();
			
			if(elementBottom > viewportTop && elementTop < viewportBottom) {
				var percent = $(value).data('countervalue');
				var radius = $(this).find($('circle.bar--animated')).attr('r');
				var circumference = 2 * Math.PI * radius;
				var strokeDashOffset = circumference - ((percent * circumference) / 100);
				$(this).find($('circle.bar--animated')).animate({'stroke-dashoffset': strokeDashOffset}, 2800);
			}
		});
	}

	var $window = $(window);
	function check_if_in_view() {    
		$('.countervalue').each(function(){
			if ($(this).hasClass('start')){
				var elementTop = $(this).offset().top;
				var elementBottom = elementTop + $(this).outerHeight();

				var viewportTop = $(window).scrollTop();
				var viewportBottom = viewportTop + $(window).height();

				if (elementBottom > viewportTop && elementTop < viewportBottom) {
					$(this).removeClass('start');
					$('.countervalue').text();
					var myNumbers = $(this).text();
					if (myNumbers == Math.floor(myNumbers)) {
						$(this).animate({
							Counter: $(this).text()
						}, {
							duration: 2800,
							easing: 'swing',
							step: function(now) {
								$(this).text(Math.ceil(now)  + '%');                                
							}
						});
					} else {
						$(this).animate({
							Counter: $(this).text()
						}, {
							duration: 2800,
							easing: 'swing',
							step: function(now) {                                
								$(this).text(now.toFixed(2)  + '$'); 
							}
						});
					}

					radial_animate();
				}
			}
		});
	}
	$window.on('scroll', check_if_in_view);


	/*======================================
	mouse cursor Js
	========================================*/

	/* mouse cursor */
	document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px"
    });
    var 
        e = document.getElementById("mouse-pointer");
        
	$(document).mousemove(function(e){
		
		$(".visa-1-activ")
		.on("mouseenter", function() {	 
			$('.mouse-pointer').addClass("black")	  
		})
		.on("mouseleave", function() {	  
			$('.mouse-pointer').removeClass("black")	  
		})
		
		$(".service-carousel,.country-1-active")
		.on("mouseenter", function() {	 
			$('.mouse-pointer').addClass("large")	  
		})
		.on("mouseleave", function() {	  
			$('.mouse-pointer').removeClass("large")	  
		})
		
		
	});

	/*======================================
	  Datepickr & Flatpicker
	========================================*/	
	
	$(".flatpickr").flatpickr({
		mode: "range",
		dateFormat: "d-M",
		minDate: "today",
	});
	$(".flatpickr-time").flatpickr({
		enableTime: true,
		noCalendar: true,
		disableMobile: true,
		dateFormat: 'h:i K'
	});

	/*======================================
	 Nice Select
	========================================*/
	$(document).ready(function() {
		$('select:not(.ignore)').niceSelect();
	  });

	/*======================================
	portfolio-carousel Js
	========================================*/

	// portfolio-carousel
	if ($('.service-carousel').length) {
		$('.service-carousel').owlCarousel({
			loop:true,
			margin:24,
			nav:true,
			dots:true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			active: true,
			smartSpeed: 1000,
			autoplay: 6000,
			navText: [ '<span class"icon-5"></span>', '<span class"icon-6"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:2
				}
			}
		});
	}


	/*======================================
	country-carousel Js
	========================================*/

	// country-carousel
	if ($('.country-carousel').length) {
		$('.country-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			dots:false,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			active: true,
			smartSpeed: 1000,
			autoplay: 6000,
			navText: [ '<span class"icon-5"></span>', '<span class"icon-6"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});
	}


	/*======================================
	22. TEAM ACTIVE
	========================================*/
	$(document).on('mouseover', '.why-choose-item', function () {
		$('.why-choose-item').removeClass('active');
		$(this).addClass('active');
	});
	

})(jQuery);



