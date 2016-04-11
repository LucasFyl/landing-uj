
$(document).ready(function(){

	$('body').addClass('locked');
	initPage();

	$('body').on("click", ".trigger-register", function(e){
		e.preventDefault();
		TweenMax.set('.popup-box.register', {display:'block'});
		TweenMax.set('.popup-box.register .popup', {display:'block'});
		TweenMax.to('.popup-box.register .popup', 0.6, {opacity:1, y:'-50%', ease:Power2.easeOut});
	});

	$('body').on("click", ".close-popup", function(e){
		e.preventDefault();
		TweenMax.to('.popup', 0.6, {opacity:0,y:20,ease:Power2.easeIn});
		TweenMax.set('.popup', {display:'none',delay:0.6});
		TweenMax.set('.popup-box', {display:'none',delay:0.6});
	});


	$(".gallery > div").hover(hoverIn, hoverOut);
});

function initPage(){

	$('#overlay').hide();
	TweenMax.set('#landing h1, #landing h2, .price-box', {opacity:0});
	TweenMax.set('#landing h1', {y:20});
	TweenMax.set('.price-box', {y:-20});
	TweenMax.set('.caret-down', {opacity:0,y:-30});
	

	hideLoader();
	setTimeout(landingAnimation, 3000);

	if ( $('.isMobile').is(':visible') ) {
		$('.gallery > div').addClass('active');
	}
}

function hideLoader() {
	TweenMax.fromTo('#loader .center .logo', 1, {opacity:0}, {opacity:1,repeat:1, yoyo:true, ease:Power1.easeInOut});
	TweenMax.to('#loader', 1, {opacity:0,display:'none',ease:Expo.easeOut,delay:2,onComplete:function(){
		$('body').removeClass('locked');
	}});
}
function landingAnimation() {
	var landingTl = new TimelineMax({paused:true});
	
	landingTl.to('#landing h2', 0.25, {opacity:1})
			.to('#landing h1', 0.8, {opacity:1,y:0,ease:Power1.easeOut})
			.to('.price-box', 0.8, {opacity:1,y:0,ease:Power1.easeOut})
			.to('.caret-down', 0.8, {opacity:1,y:0,ease:Expo.easeOut}, '-=0.4');

	landingTl.play();
}

function hoverIn() {
	var _this = $(this);
	title = _this.find('h5'),
	hr = _this.find('hr'),
	text = _this.find('p'),
	overlay = _this.find('.overlay');

	var hoverTl = new TimelineMax({paused:true});
		hoverTl.to(overlay, 0.5, {backgroundColor:'rgba(0,0,0,0.7)',ease:Power2.easeOut})
				.to(title, 0.25, {transform:'none',ease:Power2.easeOut}, '-=0.5')
				.to(hr, 0.3, {width:'30px',ease:Power1.easeOut}, '+=0.25')
				.to(text, 0.25, {y:0,opacity:1,ease:Power2.easeOut});
	
	hoverTl.timeScale( 4 );
	hoverTl.play();
}
function hoverOut() {
	var _this = $(this);
	title = _this.find('h5'),
	hr = _this.find('hr'),
	text = _this.find('p'),
	overlay = _this.find('.overlay');
	
	var hoverOutTl = new TimelineMax({paused:true});
		hoverOutTl.to(hr, 0.3, {width:0,ease:Power2.easeOut})
				.to(text, 0.25, {y:20,opacity:0,ease:Power2.easeOut})
				.to(title, 0.25, {y:'150%',ease:Power2.easeOut}, '-=0.25')
				.to(overlay, 0.5, {backgroundColor: 'transparent',ease:Power2.easeOut});
	
	hoverOutTl.timeScale( 3.5 );
	hoverOutTl.play();
}