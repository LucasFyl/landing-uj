$(document).ready(function(){
	(function(){
		var controller = new ScrollMagic.Controller();

		var screenTween = new TweenMax.fromTo('.intro >div:first-child()', 0.8, {opacity:0,x:-20}, {opacity:1,x:0,ease:Power1.easeOut});
		var textTween = new TweenMax.fromTo('.intro >div:nth-child(2)', 0.8, {opacity:0,x:20}, {opacity:1,x:0,ease:Power1.easeOut});
		var galleryTween = new TweenMax.staggerFromTo(['.gallery h5'], 0.4, {opacity:0}, {opacity:1,ease:Power1.easeOut}, 0.1);

		var introScene = new ScrollMagic.Scene({triggerElement: ".intro", offset:120});
		introScene.addTo(controller)
		          .setTween(textTween);

		var introScene2 = new ScrollMagic.Scene({triggerElement: ".intro", offset:100});
		introScene2.addTo(controller)
		          .setTween(screenTween);

        var galleryScene = new ScrollMagic.Scene({triggerElement: ".gallery"});
		galleryScene.addTo(controller)
		          .setTween(galleryTween);

	})();
});
