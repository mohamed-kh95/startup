/*global $, jQuery, alert , console*/
$(function () {
	'use strict';
	var goUp = $('.up'),
		mainNav = $('.mainnav'),
		myNav = $('.navbar'),
		navLink = $('.navbar-light .navbar-nav .nav-link'),
		workImg = $('.works .work-img'),
		member = $('.member');
	/*Nice Scroll*/
	/*$('html').niceScroll({
		cursorborder: "",
		cursorcolor: "#3498db",
		cursorwidth: "8px",
		boxzoom: false,
		autohidemode: false
	});
	$('.form-map form textarea').niceScroll({
		cursorcolor: "#3498db",
		cursorwidth: "8px"
		
	});*/
	/*Go Up*/
	
	$(window).on('scroll', function () {
		if ($(window).scrollTop() >= 1000) {
			goUp.fadeIn(1000);
		} else {
			goUp.fadeOut(1000);
		}
	});
	goUp.on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500);
	});
	
	/*Start Background*/
	$('.bg, .bg .overlay').height($(window).height());
	$('.bg .bg-text i').on('click', function () {
		$('html, body').animate({
			scrollTop: $('.mainnav').offset().top
		}, 1000);
	});
	/*End Background*/
	
	/*Start Navbar*/
	
	mainNav.innerHeight(myNav.innerHeight());
	
	$('.navbar-light .navbar-nav li').on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
	navLink.on('click', function (e) {
		e.preventDefault();
	});
	
	$(window).on('scroll', function () {
		if ($(window).scrollTop() >= mainNav.offset().top) {
			myNav.css({
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%'
			});
		} else {
			myNav.css({
				position: 'static',
				width: '100%'
			});
		}
	});
	navLink.on('click', function () {
		$('body, html').animate({
			scrollTop: $($(this).data('scroll')).offset().top - 55
		}, 1000);
	});
	

	/*End Navbar*/
	
	/*Start Progress*/
	
	$('.powerful-skills .progress-bar').each(function () {
		$(this).css({
			width: $(this).attr('aria-valuenow') + '%'
		});
		$(this).text($(this).attr('aria-valuenow') + '%');
		
	});
	
	
	/*End Progress*/
	
	/*Start Shuffle*/
	$('.work-btn li').on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
		if ($(this).data('show') === 'all') {
			workImg.css({
				opacity: 1
			});
		} else {
			workImg.css({
				opacity: 0.2
			});
			$($(this).data('show')).css({
				opacity: 1
			});
		}
	});
	/*End Shuffle*/
	/*Start Team Member*/
	member.on('mouseenter', function () {
		$($(this).data('over')).fadeIn(1000);
		$($(this).data('over')).css({
			display: 'flex'
		});
		
	});
	member.on('mouseleave', function () {
		$($(this).data('over')).fadeOut();
		$($(this).data('over')).css({
			display: 'none'
		});
		
	});
	
	/*End Team Member*/
	/*Start Cheap Prices*/
	$('.cheap-prices .card .card-body a').on('click', function (e) {
		e.preventDefault();
	});
	/*End Cheap Prices*/
	/*Start Form*/
	$('.form-map form input, .form-map form textarea').on('focus', function () {
		$(this).attr('data-place', $(this).attr('placeholder')).removeAttr('placeholder');
		
	});
	$('.form-map form input:not("submit"), .form-map form textarea').on('blur', function () {
		$(this).attr('placeholder', $(this).attr('data-place')).removeAttr('data-place');
	});
	
	/*End Form*/
	
	
}); /*End Of Ready Function*/


/*Loading Overlay*/
$(window).on('load', function () {
	'use strict';
	$('body').css('overflow', 'auto');
	$('.loading-overlay .spinner').fadeOut(2000, function () {
		$(this).parent().fadeOut(2000, function () {
			$(this).remove();
		});
	});
});










