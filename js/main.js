//on page load
//scroll top distance from top to start of nav. 
//if header is greater than 640, 
//sticky header at scrolltop 640
//else use header.height.
//see if something like this works  

var navBar = $('nav');
	navScrolled = "navScrolled";
	header = $('header').height();

$(window).scroll(function () {
	if( $(this).scrollTop() > header) {
		navBar.addClass('navScrolled');
	}
	else {
		navBar.removeClass('navScrolled');
	}
});

// get the scroll top from the top to the end of the project section
// add this about the the padding-bottom for project section (whitespace?) so that illustration is seen and not blocked