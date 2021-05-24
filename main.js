$(document).ready(function(){
	let rgb = new Array;
	$('#dick').on('click',function(){
	$('.logo').html('Ага, попался!');
	})
	function randNum(min, max) {
		return min + Math.floor(Math.random()*(max - min+1));
	}
	function randColor() {
		for (let i = 0; i <= 2; i++){
			rgb[i] = randNum(20, 60);
		}
	}
	$('.menu li').on('mouseenter',function(){
		randColor();
		$('body').css({'background':'rgb('+rgb[0]+', '+rgb[1]+', '+rgb[2]+')', 'transition':'background 0.5s'});

	})
	$('.menu li').on('mouseout',function(){
		$('body').css('background','black');
	})
	$('.logo').on('click',function(){
		let r = randNum(1,3);
		switch(r){
			case 1:alert('Как дела?');break;
			case 2:alert('Привет');break;
			case 3:alert('Ты кто?');break;
		}
	})
});
