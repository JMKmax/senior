;(function($){
	$.fn.extend({
		cdd:function(options){
			// var DEFAULTS = {color:'red'};
			// options = $.extend({},DEFAULTS,options)
			return this.each(function(){
				var $elem = $(this)
				for(var key in options){
					if(typeof key == 'string'){
						console.log($elem.css(key));
					}else{
						$elem.css(options)
					}
				}
			})
		}
	})
})(jQuery);