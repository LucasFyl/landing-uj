$(document).ready(function(){
	(function(){
		TweenMax.set('.popup', {y:20,opacity:0,display:'none'});
		
		var getUrlParameter = function getUrlParameter(sParam) {
		    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		        sURLVariables = sPageURL.split('&'),
		        sParameterName,
		        i;

		    for (i = 0; i < sURLVariables.length; i++) {
		        sParameterName = sURLVariables[i].split('=');

		        if (sParameterName[0] === sParam) {
		            return sParameterName[1] === undefined ? true : sParameterName[1];
		        }
		    }
		};
		var success = getUrlParameter('register');
		if ( success === 'success' ) {
			TweenMax.set('#loader', {display:'none'});
			TweenMax.to('.popup-box.success', 0.25, {display:'block'});
			TweenMax.set('.popup-box.success .popup', {display:'block'});
			TweenMax.to('.popup-box.success .popup', 0.3, {opacity:1, y:'-50%', ease:Power2.easeOut});
		}
	})();
});	