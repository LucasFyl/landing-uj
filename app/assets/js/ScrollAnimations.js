/*jshint -W117 */
/* jshint unused:false */
(function(){
	'use strict';

	var MagicStuff = {
		init: function(){

			// .outer-title animation 
			var title = $('.outer-title');
      		title.each(function(index, value){
      			var trigger = $(value).parent('section');
      			var theTitle = $(value).find('span');
      			var titleTween = new TweenMax.to(theTitle, 1, {y:0,ease:Expo.easeOut});
				var sectionTitle = new ScrollMagic.Scene({
					triggerElement: value,
					triggerHook: 'onEnter',
					offset: 200
				}).setTween(titleTween)
				.addTo(controller);
			});

			// scrollUp apparition
			var scrollUpTween = new TweenMax.to('#scrolltop', 0.5, {bottom:'5rem', ease:Expo.easeOut});
			var scrollUpScene = new ScrollMagic.Scene({
				triggerElement: 'section:nth-child(2)',
				triggerHook: 'onLeave'
			}).setTween(scrollUpTween)
			.addTo(controller);
		}
	}

	MagicStuff.init();
})();
