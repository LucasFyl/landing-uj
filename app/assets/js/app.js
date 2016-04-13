
$(document).ready(function(){

	// $('body').addClass('locked');
	initPage();

	$('#scrolltop').on('click', scrollTopFn);

});

function initPage(){

	
	setTimeout(initSlider, 200);
	setTimeout(hideLoader, 250);

	// if ( $('.isMobile').is(':visible') ) {
	// }
}

function hideLoader() {
	TweenMax.fromTo('#loader .center .logo', 1, {opacity:0}, {opacity:1,repeat:1, yoyo:true, ease:Power1.easeInOut});
	TweenMax.to('#loader', 1, {opacity:0,display:'none',ease:Expo.easeOut,delay:2,onComplete:function(){
		$('#overlay').hide();
		$('body').removeClass('locked');
	}});
}

function scrollTopFn() {
	TweenMax.to(window, 1.5, {scrollTo:0,ease:Power3.easeOut});
}

function initSlider() {
	var beforeChangeTl = new TimelineMax({paused:true});
	var afterChangeTl = new TimelineMax({paused:true});
	var textes, image;

	// When init, set first slide visible : 
	$('.slide-wrap').on('init', function(slick){
		var slide = $('.slide:eq(0)');

		image = slide.find('img');
		text = slide.find('h4, p');

		afterChangeTl
			.staggerFromTo(text, 0.25, {y:50,opacity:0}, {y:0,opacity:1,ease:Expo.easeOut}, 0.1)
			.fromTo(image, 0.35, {left:'100%',opacity:0}, {left:0,opacity:1,ease:Power3.easeOut}, '-=0.1')
			.play();
	});

	// Prev/Next slide animation : 
	$('body').on('click', '.arrows a', function(e) {
		e.preventDefault();

		if ($(this).hasClass('right')) {
			var right = true;
		}

		var currentSlideIndex = $('.slide-wrap').slick('slickCurrentSlide');
		var currentSlide = $('.slide:eq('+currentSlideIndex+')');

		image = currentSlide.find('img');
		text = currentSlide.find('h4, p');

		beforeChangeTl
			.to(text, 0.25, {y:50,opacity:0,ease:Expo.easeIn})
			.to(image, 0.35, {left:'50%', opacity:0,ease:Power3.easeIn,onComplete:function(){
				if (right === true) {
					$('.slide-wrap').slick('slickNext');
				} else {
					$('.slide-wrap').slick('slickPrev');
				}
			}}, "-=0.1")
			.play();
	});
	$('.slide-wrap').on('afterChange', function(event, slick, currentSlide){
		var slide = $('.slide:eq('+currentSlide+')');
		$('#tools-menu li').removeClass('active');
		$('#tools-menu li:eq('+currentSlide+')').addClass('active');

		image = slide.find('img');
		text = slide.find('h4, p');

		afterChangeTl
			.staggerFromTo(text, 0.25, {y:50,opacity:0}, {y:0,opacity:1,ease:Expo.easeOut}, 0.1)
			.fromTo(image, 0.35, {left:'50%',opacity:0}, {left:0,opacity:1,ease:Power3.easeOut}, '-=0.1')
			.play();
	});

	// Use tools-nav to navigate slider : 
	$('body').on('click', '#tools-menu li', function(){
		var target = $(this).index();
		$('.slide-wrap').slick('slickGoTo', target);
	});


	// Init slider
	$('.slide-wrap').slick({
		arrows: false,
		fade: true
		// asNavFor: '#tools-menu ul',
		// slidesToShow: 1,
		// slidesToScroll: 0
	});
	// $('#tools-menu ul').slick({
	// 	slidesToShow: 8,
	// 	slidesToScroll: 0,
	// 	dots: false,
	// 	arrows: false,
	// 	asNavFor: '.slide-wrap'
	// });
}