//on page load
//scroll top distance from top to start of nav. 
//if header is greater than 640, 
//sticky header at scrolltop 640
//else use header.height.
//see if something like this works  

// fix the margin-top of the nav 

//make sure none of this is screwing up foot nav

var navBar = $('.headerNav');
	navScrolled = "navScrolled";
	headerHeight = $('header').height();

$(document).ready(function() {
	if(headerHeight > 640) {
		$('header').addClass('maxHeader');
		$('.headerNav').addClass('maxNav');
	}
	else {
		$('header').removeClass('maxHeader');
		$('.headerNav').removeClass('maxNav');
	}
});

$(window).scroll(function () {
	if( $(this).scrollTop() > headerHeight) {
		navBar.addClass('navScrolled');
	}
	else {
		navBar.removeClass('navScrolled');
	}


});

// get the scroll top from the top to the end of the project section
// add this about the the padding-bottom for project section (whitespace?) so that illustration is seen and not blocked