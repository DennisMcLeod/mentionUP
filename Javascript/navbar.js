
	$(function() {
		$('.hamburger').click(function() {
			$('nav').toggleClass('open');
			$('.hamburger').toggleClass('nodisplay');
		})

		$('.closemenu').click(function() {
			$('nav').toggleClass('open');
			$('.hamburger').toggleClass('nodisplay');
		});
	});