$(document).ready(function() {

	var currentIndex = 0,
		items = $('.slideshow div'),
		itemAmt = items.length;

	function cycleItems() {
		var item = $('.slideshow div').eq(currentIndex);
		items.hide(1000);
		item.slideDown(1000);
	}

	var autoSlide = setInterval( function() {
					currentIndex += 1;
					if (currentIndex > itemAmt - 1) {
						currentIndex = 0;
					}
					cycleItems();
					}, 3000 );

	$(".next").click( function() {
		clearInterval(autoSlide);
		currentIndex += 1;
		if (currentIndex > itemAmt - 1) {
			currentIndex = 0;
		}
		cycleItems();
	});

	$(".prev").click(function() {
		clearInterval(autoSlide);
		currentIndex -= 1;
		if (currentIndex < 0) {
			currentIndex = itemAmt - 1;
		}
		cycleItems();
	});

});