function showOnScroll(els, spot, c) {
	var spot = spot/100,
		showOnHeight = $(window).height()*spot;
	c = c || 'shown';
	$(els).sort(function (a, b) {
		return $(a).offset().top-$(b).offset().top;
	})
	$(window).on('scroll', function () {
		while(els.length != 0 && $($(els)[0]).offset().top < $(window).scrollTop()+showOnHeight) {
			$($(els)[0]).addClass(c);
			els = $(els).slice(1);
		}
	})
	$(window).scroll();
	$(window).on('resize', function () {
		showOnHeight = $(window).height()*spot;
	})
}