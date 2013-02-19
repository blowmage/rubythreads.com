// This method was ripped from the excellent
// timeago.js (http://timeago.yarp.com/) and requires jQuery(http://jquery.com/)
function parseIso8601(iso8601) {
      var s = $.trim(iso8601);
      s = s.replace(/-/,"/").replace(/-/,"/");
      s = s.replace(/T/," ").replace(/Z/," UTC");
      s = s.replace(/([\+-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
      return new Date(s);
}

$(document).ready(function(){
	// Clicking on main logo should send user home...
	$('body>header h1').click(function() {
		document.location = $('body>header h1 a').attr('href');
		return true;
	});

	$('.banner').cycle({
		pause:   1,
		speed:   250,
		timeout: 10000
	});

	$('[data-countdown]').each(function(index, element) {
		element = $(element);
		var endDate = parseIso8601(element.data('countdown'));
		element.countdown({ until: endDate });
	});
});