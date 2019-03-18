(function(window){
	var kQuery = function(selector){
		return new kQuery.prototype.init(selector)
	}
	kQuery.fn = kQuery.prototype ={
		constructor:kQuery,
		init:function(selector){
			if(!selector){
				return this;
			}
			else if(typeof selector == 'function'){
				console.log('function');
				this[0]=document;
				this.length=1;
				return this;
			}
			else if(kQuery.isString(selector)){
				if(kQuery.isHtml(selector)){
					
				}
				else{

				}
			}
			else if()
		}
	}
	kQuery.isString = function(str){
		return typeof str == 'string';
	}
	kQuery.isHtml = function(str){
		return /<[^<>]+>/.test(str);
	}
	kQuery.fn.init.prototype = kQuery.fn;
	window.kQuery = kQuery;
})(window);