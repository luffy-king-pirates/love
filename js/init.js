/*
 * Copyright (c) 2021 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	fatma_chandoul_tm_resume_image_width();
	fatma_chandoul_tm_nav_bg();
	fatma_chandoul_tm_trigger_menu();
	fatma_chandoul_tm_hero_image();
	fatma_chandoul_tm_service_popup();
	fatma_chandoul_tm_portfolio_popup();
	fatma_chandoul_tm_news_popup();
	fatma_chandoul_tm_cursor();
	fatma_chandoul_tm_imgtosvg();
	fatma_chandoul_tm_popup();
	fatma_chandoul_tm_portfolio();
	fatma_chandoul_tm_data_images();
	fatma_chandoul_tm_contact_form();
	fatma_chandoul_tm_jarallax();
	fatma_chandoul_tm_testimonial_arrow();
	fatma_chandoul_tm_owl_carousel();
	fatma_chandoul_tm_about_animation();
	fatma_chandoul_tm_moving_animation();
	fatma_chandoul_tm_down();
	fatma_chandoul_tm_totop();
	
	fatma_chandoul_tm_color_switcher();
	fatma_chandoul_tm_switcher_opener();
	fatma_chandoul_tm_cursor_switcher();
	
	jQuery(window).load('body', function(){
		fatma_chandoul_tm_my_load();
	});
	jQuery(window).on('resize', function(){
		fatma_chandoul_tm_resume_image_width();
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

function fatma_chandoul_tm_testimonial_arrow(){
	
	"use strict";
	
	$('.fatma_chandoul_tm_testimonials .direct a').on('mouseenter',function(){
		var e = $(this);
		var p = e.closest('.direct');
		if(e.hasClass('prev_button')){
			p.addClass('prev');
		}else{
			p.addClass('next');
		}
		e.addClass('hovered');
		p.addClass('hovered');
	}).on('mouseleave',function(){
		var e = $(this);
		e.removeClass('hovered');
		e.closest('.direct').removeClass('hovered prev next');
	});
}

// -----------------------------------------------------
// ------------   RESUME IMAGE WIDTH    ----------------
// -----------------------------------------------------

function fatma_chandoul_tm_resume_image_width(){
	
	"use strict";
	
	var media			= jQuery('.fatma_chandoul_tm_resume .media');
	var contentWidth	= jQuery('.fatma_chandoul_tm_resume .resume_in').width();
	media.css({width: (($(window).width() - contentWidth)/2 + 0.15*contentWidth) +'px'});
}

// -------------------------------------------------
// -------------   TOPBAR BG SCROLL  ---------------
// -------------------------------------------------

function fatma_chandoul_tm_nav_bg(){
	
	"use strict";
	
	jQuery(window).on('scroll',function(){
		var menu	 		= jQuery('.fatma_chandoul_tm_header');
		var WinOffset		= jQuery(window).scrollTop();
		
		if(WinOffset >= 100){
			menu.addClass('animate');
		}else{
			menu.removeClass('animate');
		}
	});
}

// ------------------------------------------------
// -------------------  ANCHOR --------------------
// ------------------------------------------------

jQuery('.anchor_nav').onePageNav();

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function fatma_chandoul_tm_trigger_menu(){
	
	"use strict";

	var hamburger 		= jQuery('.fatma_chandoul_tm_mobile_menu .trigger .hamburger');
	var mobileMenu		= jQuery('.fatma_chandoul_tm_mobile_menu .dropdown');
	var mobileMenuList	= jQuery('.fatma_chandoul_tm_mobile_menu .dropdown .dropdown_inner ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.fatma_chandoul_tm_mobile_menu .trigger .hamburger').removeClass('is-active');
		mobileMenu.slideUp();
		return false;
	});
}

// -----------------------------------------------------
// ---------------   HERO IMAGE  -----------------------
// -----------------------------------------------------

function fatma_chandoul_tm_hero_image(){
	
	"use strict";
	
	var FixedImage	= jQuery('.fatma_chandoul_tm_hero .right .image .main').data('img-url');
	var wrapper	= jQuery('.fatma_chandoul_tm_hero .services ul');
	var list	= wrapper.find('li a');
	list.on('mouseenter',function(){
		var element = jQuery(this);
		var image	= element.find('.image').attr('src');
		element.closest('.fatma_chandoul_tm_hero').find('.right .image .main').css({backgroundImage:'url('+image+')'});
		console.log(image);
	});
	wrapper.on('mouseleave',function(){
		jQuery('.fatma_chandoul_tm_hero .right .image .main').css({backgroundImage:'url('+FixedImage+')'});
	});
}

// -------------------------------------------------
// -------------  SERVICE POPUP  -------------------
// -------------------------------------------------

function fatma_chandoul_tm_service_popup(){
	
	"use strict";
	
	var modalBox		= jQuery('.fatma_chandoul_tm_modalbox');
	var button			= jQuery('.fatma_chandoul_tm_service .service_list ul li .fatma_chandoul_tm_full_link');
	var closePopup		= modalBox.find('.close');
	
	button.on('click',function(){
		var element = jQuery(this);
		var parent	= element.closest('.fatma_chandoul_tm_service .service_list ul li');
		var elImage	= parent.find('.popup_service_image').attr('src');
		var title	= parent.find('.title').html();
		var content = parent.find('.service_hidden_details').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.service_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+elImage+'"></div></div>');
		fatma_chandoul_tm_data_images();
		modalBox.find('.service_popup_informations .image').after('<div class="main_title">'+title+'</div>');
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -----------  PORTFOLIO POPUP  -------------------
// -------------------------------------------------

function fatma_chandoul_tm_portfolio_popup(){
	
	"use strict";
	
	var modalBox		= jQuery('.fatma_chandoul_tm_modalbox');
	var button			= jQuery('.fatma_chandoul_tm_portfolio .portfolio_popup');
	var closePopup		= modalBox.find('.close');
	
	button.off().on('click',function(){
		var element = jQuery(this);
		var parent 	= element.closest('.list_inner');
		var content = parent.find('.hidden_content').html();
		var image	= parent.find('.image .main').data('img-url');
		var details = parent.find('.details').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.popup_details').prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.popup_details .top_image').after('<div class="portfolio_main_title">'+details+'<div>');
		fatma_chandoul_tm_data_images();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// ----------------  NEWS POPUP  -------------------
// -------------------------------------------------

function fatma_chandoul_tm_news_popup(){
	
	"use strict";
	
	var modalBox		= jQuery('.fatma_chandoul_tm_modalbox');
	var button			= jQuery('.fatma_chandoul_tm_news .list_inner .fatma_chandoul_tm_full_link,.fatma_chandoul_tm_news .news_list ul li .details .title a,.fatma_chandoul_tm_news .fatma_chandoul_tm_learn_more a');
	var closePopup		= modalBox.find('.close');
	
	button.on('click',function(){
		var element = jQuery(this);
		var parent 	= element.closest('.list_inner');
		var content = parent.find('.news_hidden_details').html();
		var image	= element.closest('.list_inner').find('.image .main').data('img-url');
		var details = parent.find('.details').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.news_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.news_popup_informations .image').after('<div class="details">'+details+'<div>');
		fatma_chandoul_tm_data_images();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function tdProgress(container){
	
	"use strict";
		
	container.find('.progress_inner').each(function() {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');});
	});
}

jQuery('.dodo_progress').each(function() {

	"use strict";

	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
});

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function fatma_chandoul_tm_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function fatma_chandoul_tm_my_load(){
	
	"use strict";
	
	var speed	= 500;
	setTimeout(function(){fatma_chandoul_tm_preloader();},speed);
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function fatma_chandoul_tm_cursor(){
	
    "use strict";
	
	var myCursor	= jQuery('.mouse-cursor');
	
	if(myCursor.length){
		if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a,.fatma_chandoul_tm_topbar .trigger, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a,.fatma_chandoul_tm_topbar .trigger, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function fatma_chandoul_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.html').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function fatma_chandoul_tm_popup(){
	
	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
	
	jQuery('.soundcloude_link').magnificPopup({
	  type : 'image',
	   gallery: {
		   enabled: true, 
	   },
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

function fatma_chandoul_tm_portfolio(){

	"use strict";
	
	if(jQuery().isotope) {

		// Needed variables
		var filter		 = jQuery('.fatma_chandoul_tm_portfolio .portfolio_filter ul');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var element		= jQuery(this);
				var selector 	= element.attr('data-filter');
				var list		= element.closest('.fatma_chandoul_tm_portfolio').find('.portfolio_list').children('ul');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				
				filter.find('a').removeClass('current');
				element.addClass('current');
				return false;
			});	
		}
	}
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function fatma_chandoul_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function fatma_chandoul_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.html",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function fatma_chandoul_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true,
			videoVolume: 0,
		});
	});
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function fatma_chandoul_tm_owl_carousel(){

	"use strict";
	
	var carousel			= jQuery('.fatma_chandoul_tm_testimonials .owl-carousel');
	
	var rtlMode	= false;

	if(jQuery('body').hasClass('rtl')){
		rtlMode = 'true';
	}
	
	carousel.owlCarousel({
		loop: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		lazyLoad: true,
		autoplay: true,
		autoplayTimeout: 6000,
		smartSpeed: 1000,
		margin: 0,
		dots: true,
		nav: false,
		navSpeed: true,
		responsive : {
			0 : {
				mouseDrag: false,
				touchDrag: true,
			},
			1100 : {
				mouseDrag: true,
				touchDrag: true,
			}
		}
	});

	carousel.parent().find('.next_button').click(function() {
		carousel.trigger('next.owl.carousel');
		return false;
	});
	// Go to the previous item
	carousel.parent().find('.prev_button').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		carousel.trigger('prev.owl.carousel');
		return false;
	});

	fatma_chandoul_tm_imgtosvg();
}

// -----------------------------------------------------
// -------------------    COUNTER    -------------------
// -----------------------------------------------------

jQuery('.tm_counter').each(function() {

	"use strict";

	var el		= jQuery(this);
	el.waypoint({
		handler: function(){

			if(!el.hasClass('stop')){
				el.addClass('stop').countTo({
					refreshInterval: 50,
					formatter: function (value, options) {
						return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
					},	
				});
			}
		},offset:'80%'	
	});
});

// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

function fatma_chandoul_tm_about_animation(){

	"use strict";

	jQuery('.parallax').each(function(){
		var element = jQuery(this);
		var scene = element.get(0);
		var parallax = new Parallax(scene, { 
			relativeInput: true,
			onReady: function() { console.log('ready!');
			} });
		});
}

// -----------------------------------------------------
// -------------    MOVING ANIMATION    ----------------
// -----------------------------------------------------

function fatma_chandoul_tm_moving_animation(){
	
	"use strict";
	
	var detail     	= $('.moving_effect');
	var offset		= 0;
	detail.each(function(){
		var element	= $(this);
		var direction = element.attr('data-direction');
		$(window).on('scroll',function(){
			offset  = $(window).scrollTop();
			var h	= $(window).height();
			var i	= element.offset().top - offset - h;
			if(element.attr('data-reverse') == 'yes'){
				i*= -1;
			}
			var x	= direction === 'x' ?  (i*70)/h : 0;
			var y 	= direction === 'x' ?  0 : (i*70)/h;
			if(element.attr('data-reverse') == 'yes'){
				i*= -1;
			}
			if((i*(-1))<h+300 && i<300){
				element.css({transform: 'translate3d('+x+'px, '+y+'px, 0px)'});
			}
		});
	});
}


// -----------------------------------------------------
// -----------------    TILT    ------------------------
// -----------------------------------------------------

jQuery('.tilt-effect').tilt({
    maxTilt: 6,
	easing: "cubic-bezier(.03,.98,.52,.99)",
	speed: 500,
	transition: true
})

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function fatma_chandoul_tm_down(){
	
	"use strict";
	
	var topbar	= jQuery('.fatma_chandoul_tm_header').outerHeight();
	
	jQuery('.anchor').on('click',function(){
		
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-topbar+20
			}, 800);
		}
		
		return false;
	});
}

/****************************/ 
/********** TOTOP ***********/ 
/****************************/ 

function fatma_chandoul_tm_totop(){
  
  "use strict";
  
  jQuery(".totop").on('click', function(e) {
    e.preventDefault();    
    jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
    return false;
  });
}

// -----------------------------------------------------
	// ---------------------   SWITCHERS    ----------------
	// -----------------------------------------------------

	function fatma_chandoul_tm_color_switcher(){
		
		"use strict";

		var list	= jQuery('.fatma_chandoul_tm_settings .colors li a');

		list.on('click',function(){
			var element = jQuery(this);
			var elval	= element.attr('class');
			element.closest('.fatma_chandoul_tm_all_wrap').attr('data-color',''+elval+'');
			return false;
		});	
	}


	function fatma_chandoul_tm_switcher_opener(){
		
		"use strict";

		var settings	= jQuery('.fatma_chandoul_tm_settings');
		var button		= settings.find('.link');
		var direction	= settings.find('.direction li a');
		var light		= settings.find('.direction li a.light');
		var dark		= settings.find('.direction li a.dark');

		button.on('click',function(){
			var element = jQuery(this);
			if(element.hasClass('opened')){
				element.removeClass('opened');
				element.closest('.fatma_chandoul_tm_settings').removeClass('opened');
			}else{
				element.addClass('opened');
				element.closest('.fatma_chandoul_tm_settings').addClass('opened');
			}
			return false;
		});

		direction.on('click',function(){
			var element = jQuery(this);
			if(!element.hasClass('active')){
				direction.removeClass('active');
				element.addClass('active');
			}
		});

		dark.on('click',function(){
			var el = jQuery(this);
			jQuery('body').addClass('dark');
			jQuery('.fatma_chandoul_tm_partners').addClass('opened');
			el.closest('.fatma_chandoul_tm_settings').addClass('changed');
			return false;
		});

		light.on('click',function(){
			var ele = jQuery(this);
			jQuery('body').removeClass('dark');
			jQuery('.fatma_chandoul_tm_partners').removeClass('opened');
			ele.closest('.fatma_chandoul_tm_settings').removeClass('changed');
			return false;
		});
	}


	function fatma_chandoul_tm_cursor_switcher(){
		
		"use strict";

		var wrapper		= jQuery('.fatma_chandoul_tm_all_wrap');
		var button		= jQuery('.fatma_chandoul_tm_settings .cursor li a');
		var show		= jQuery('.fatma_chandoul_tm_settings .cursor li a.show');
		var hide		= jQuery('.fatma_chandoul_tm_settings .cursor li a.hide');

		button.on('click',function(){
			var element = jQuery(this);
			if(!element.hasClass('showme')){
				button.removeClass('showme');
				element.addClass('showme');
			}
			return false;
		});
		show.on('click',function(){
			wrapper.attr('data-magic-cursor','')
		});
		hide.on('click',function(){
			wrapper.attr('data-magic-cursor','hide')
		});

	}
	
