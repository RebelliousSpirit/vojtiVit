/**
 * preloader
 */	
window.onload = function () {
	let preloader = document.querySelector('#preloader')
	window.setTimeout(() => {
		preloader.style.display = 'none'
	},
		1000)
}

document.addEventListener("DOMContentLoaded", function() {
	
	/**
	 * disappearing menu
	 * 
	 */	
	$('#header .menu-swith').on('click', function(event) {
		$('#opacity-menu').fadeIn(600).show(600);
	});

	$('#opacity-menu .menu-swith').on('click', function(event) {	
		$('#opacity-menu').fadeOut(600).hide(600);	
	});

	/*
	* parallax effect in live bg
	*/
	function moveLiveImg(event) {
		
		let bgItems = document.querySelectorAll('#live-bg .live-bg__item');
		let coordX = event.clientX;
		let coordY = event.clientY; 

		bgItems.forEach( function(item) {
			
			let itemSpeed = item.getAttribute('data-speed');
			let translateValueX = (coordX*itemSpeed)/50;
			let translateValueY = (coordY*itemSpeed)/50;

			item.style.transform = 'translate('+translateValueX+'px, '+translateValueY+'px)';

		});
		
	}

	document.addEventListener('mousemove', moveLiveImg);

	/**
	 * modal window
	 */
	$('.btn-close').on('click', function(){
		if ($(this).data('close') && $(this).parents('.modal-window').data('modal')) {
			$(this).parents('.modal-window').fadeOut(600)
		}
	})
	
});
