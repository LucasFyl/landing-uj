(function(){
	$(document).ready(function(){
		var Slider = {
			init: function(){
				var slider = $('.slider'),
					navItem = $('.slider-nav li'),
					slide = $('.slide');

				slide.each(function(index, sliderWidth){ $(this).addClass('i_'+ index); sliderWidth += $(this).width()});
				navItem.each(function(index){ $(this).addClass('i_'+ index); $(this).children().addClass('i_'+ index); });
				$('.slider-nav li.i_0').addClass('active');
				$('.slide.i_0').addClass('active');

				this.watch();
			}, 
			slideTo: function() {
				console.log($(this));
				var index = $(this).attr('class');
				if ( $(this).hasClass('active') ) {
					// Do nothing
				} else {
					$('.slide').removeClass('active');
					$('.slide' + '.' + index).addClass('active');
					$('.slider-nav li').removeClass('active');
					$('.slider-nav li' + '.' + index).addClass('active');
				}
			},
			watch: function(){
				$('body').on('click', '.slider-nav li', Slider.slideTo);
			}
		}
		Slider.init();
	});
})();