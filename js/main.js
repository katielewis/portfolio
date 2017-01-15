//on page load
//scroll top distance from top to start of nav. 
//if header is greater than 640, 
//sticky header at scrolltop 640
//else use header.height.
//see if something like this works  

// may need to add 5% padding-bottom to boddy on scroll to make up for the whitespace 


//old header height
/* 

$(document).ready(function() {
	if(headerHeight > 450) {
		$('header').addClass('maxHeader');
		$('.headerNav').addClass('maxNav');
	}
	else {
		$('header').removeClass('maxHeader');
		$('.headerNav').removeClass('maxNav');
	}
});
*/
var navBar = $('.headerNav');
	navScrolled = ".navScrolled";
	headerHeight = $('header').height();

$(window).scroll(function () {
	if( $(this).scrollTop() > headerHeight) {
		navBar.addClass('navScrolled');
		$('header').addClass('headerZ');
	}
	else {
		navBar.removeClass('navScrolled');
		$('header').removeClass('headerZ');
	}


});

// get the scroll top from the top to the end of the project section
// add this about the the padding-bottom for project section (whitespace?) so that illustration is seen and not blocked