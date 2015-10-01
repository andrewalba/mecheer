/*global $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */
/**
 * User: andrew.alba
 * Date: 9/29/15
 * Copyright 2015 Alba Web Studio. All rights reserved.
 */

if (typeof Object.create !== "function") {
	Object.create = function (obj) {
		function F() {}
		F.prototype = obj;
		return new F();
	};
}
(function ($, window, document) {
	"use strict";
	var Mecheer = {

		init: function (options, el) {
			var base = this;

			base.$elem = $(el);
			base.options = $.extend({}, $.fn.mecheer.options, base.$elem.data(), options);

			base.userOptions = options;
			base._equalHeight(base.$elem);
		},

		_equalHeight: function(container) {

			var currentTallest = 0,
				currentRowStart = 0,
				rowDivs = new Array(),
				$el,
				topPosition = 0;

			$.each($(container), function(i, e) {

				$el = $(e);
				$el.addClass('mecheer').height('auto');
				topPosition = $el.position().top;

				if (currentRowStart != topPosition) {
					for (var currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
						rowDivs[currentDiv].height(currentTallest);
					}
					rowDivs.length = 0; // empty the array
					currentRowStart = topPosition;
					currentTallest = $el.height();
					rowDivs.push($el);
				} else {
					rowDivs.push($el);
					currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
				}
				for (var currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
			});
		}
	};

	/* Public methods */
	$.fn.mecheer = function(options) {

		if ( !$(this).length ) {
			return this;
		}

		var option = $.extend({},$.fn.mecheer.defaults, options),
			mecheer = Object.create(Mecheer);
			mecheer.init(options, this);
	};

	//DEFAULT CONFIGURATION PROPERTIES [for future use]
	$.fn.mecheer.defaults = {
		something: true,
		onStart : function(){},
		onCancel : function(){},
		onComplete : function(){},
		onCleanup : function(){},
		onClosed : function(){},
		onError : function(){}
	};

}(jQuery, window, document));