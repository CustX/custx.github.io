let deg = 0;
let rgb = new Array;
function randNum(max) {
	return Math.floor(Math.random()*max);
}
function randColor() {
	for (let i = 0; i < 3; i++){
		rgb[i] = randNum(176);
	}
}
$('#background').mouseenter(function() {
	$('#background').css('background', 'rgba(255,255,255,0.5');
	randColor();
	$('#content').css('background', 'rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+',1)');
})
$('#background').mouseout(function() {
	$('#background').css('background', 'rgba(255,255,255,0.3');
})
$('#background').on('click', function() {
	onMove();
});
function onMove() {
	let start = setInterval(move, 1);
	function move() {
		deg++;
		$('#background').css('transform', 'rotate('+deg+'deg)');
		if (randNum(2) == 0) {
			rgb[randNum(3)] -= 2;
			console.log('-');
		}
		else {
			rgb[randNum(3)] += 2;
			console.log('+');
		}
		$('#content').css('background', 'rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+',1)');
		if (deg == 360){
			clearInterval(start);
			deg = 0;
		}
	}
}
