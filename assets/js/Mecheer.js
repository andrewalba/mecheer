/*global ALBA.mecheer:true, $:false, Spinner:false, smoothScroll:true */
/**
 * User: andrew.alba
 * Date: 9/29/15
 * Copyright 2015 Alba Web Studio. All rights reserved.
 */
if( typeof(ALBA) === "undefined" || ALBA === null ){
	ALBA = {};
}
ALBA.mecheer = function(){
	"use strict";
	// GLOBAL VARS

	// DOM ELEMENTS
	var $body;

	function registerDomElements() {
		$body = $('body');
	}

	function addListeners() {
		/*if ($('#slides').length) {
			$("#slides").owlCarousel({
				slideSpeed: 500,
				paginationSpeed: 400,
				singleItem: true,
				stopOnHover: true,
				transitionStyle : "fade",
				autoPlay: true
			});
		}*/

		if ($('.frizzle').length) {
			$(window).load(function() {
				$('.frizzle').mecheer();
			})
		}

		if (typeof smoothScroll === 'object') {
			smoothScroll.init({updateURL: false,offset: 50});
		}
		if (typeof prettyPrint === 'function') {
			window.prettyPrint && prettyPrint();
		}
	}

	function stickyNav(){
		"use strict";
		var stickyNavTop = $('#carousel').height() - 60,
			scrollTop = $(window).scrollTop(),
			isSticky=false;;
		if( scrollTop > stickyNavTop && !isSticky){
			$('.navbar').slideDown(500).addClass('sticky');
			isSticky = true;
		}
		else {
			isSticky=false;
			$('.navbar').removeClass('sticky').fadeOut();
		}
    }

	return {
		init: function() {
			registerDomElements();
			addListeners();
			stickyNav();

			$(window).scroll( function(){
				stickyNav();
			});
		}
	};
}();