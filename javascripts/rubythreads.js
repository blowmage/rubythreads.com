$(document).ready(function(){
	// Clicking on main logo should send user home...
	$('body>header h1').click(function() {
		document.location = $('body>header h1 a').attr('href');
		return true;
	});

	$('section#banners').cycle({
		pause:   1,
		speed:   250,
		timeout: 10000
	});

	$('.banner').cycle({
		pause:   1,
		speed:   250,
		timeout: 10000
	});

	//$('section#product div#product-images a').imgbox({
	//	'zoomOpacity' : true,
	//	'alignment'	  : 'center'
	//});
});