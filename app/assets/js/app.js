
$(document).ready(function(){

	$('body').addClass('locked');
	initPage();

	$('#scrolltop').on('click', scrollTopFn);

});

function initPage(){

	hideLoader();

	if ( $('.isMobile').is(':visible') ) {
	}
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