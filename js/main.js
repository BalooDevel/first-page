$(function () {

	$('.menu__burger').on('click', function (e) {
		e.preventDefault;
		$('.menu-list').toggleClass('menu-list--active');
	});

});