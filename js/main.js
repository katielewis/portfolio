
var navBar = $('.headerNav');
	navScrolled = ".navScrolled";
	headerHeight = $('.splashPattern').height();

$(window).scroll(function () {
	if( $(this).scrollTop() > headerHeight) {
		navBar.addClass('navScrolled');
		$('.splashPattern').addClass('headerZ');
	}
	else {
		navBar.removeClass('navScrolled');
		$('.splashPattern').removeClass('headerZ');
	}


});

// get the scroll top from the top to the end of the project section
// add this about the the padding-bottom for project section (whitespace?) so that illustration is seen and not blocked

$(window).on('scroll', function() {
  var footerStick = $('.footerNav');
  var $window = $(window);

  var docViewTop = $window.scrollTop(); //top of window position
  var docViewBottom = docViewTop + $window.height(); //height of window = bottom position
  var elemTop = footerStick.offset().top; //position of top of footerNav
  var elemBottom = elemTop + footerStick.height(); //get the bottom position of footer nav from adding the two
  var otherElemTop = $('.scrollContent').offset().top + $('.scrollContent').outerHeight(true); //positon of the bottom of whitespace
  var elemTop = $('.footerNav').offset().top; //position of top of footerNav

  if (elemBottom < docViewBottom) { // bottom positin of footer nav < height of window
    $('.footerNav').addClass('stickyFooter');

  } else if (otherElemTop >= elemTop) { //bottom position of whiteSpace >= top position of the footer
  	$('.footerNav').removeClass('stickyFooter');
  }
 });

