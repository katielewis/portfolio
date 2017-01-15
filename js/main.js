
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

$(window).on('scroll', function() {
  var footerStick = $('.footerNav');
  var $window = $(window);

  var docViewTop = $window.scrollTop(); //top of window position
  var docViewBottom = docViewTop + $window.height(); //height of window = bottom position
  var elemTop = footerStick.offset().top; //position of top of footerNav
  var elemBottom = elemTop + footerStick.height(); //get the bottom position of footer nav from adding the two
  var otherElemTop = $('#whiteSpace').offset().top + $('#whiteSpace').outerHeight(true); //positon of the bottom of whitespace
  var elemTop = $('.footerNav').offset().top; //position of top of footerNav

  if (elemBottom < docViewBottom) { // bottom positin of footer nav < height of window
    $('.footerNav').addClass('test');

  } else if (otherElemTop >= elemTop) { //bottom position of whiteSpace >= top position of the footer
  	$('.footerNav').removeClass('test');
  }
 });

