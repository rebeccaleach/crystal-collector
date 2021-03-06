// Star Wars RPG game JS

$(document).ready(function(){

	var score = 0;

	var wins = 0;

	var losses = 0;

	var randomNumber = Math.round(Math.random() * 100) + 10;
	console.log('random number: ' + randomNumber);

	var greenNumber = Math.round(Math.random() * 20) + 1;

	var redNumber = Math.round(Math.random() * 20) + 1;

	var blueNumber = Math.round(Math.random() * 20) + 1;

	var purpleNumber = Math.round(Math.random() * 20) + 1;


	function reset() {
		score = 0;

		randomNumber = Math.round(Math.random() * 100) + 10;
		console.log('new random number: ' + randomNumber);
		$('#randomNumber').html(randomNumber);

		greenNumber = Math.round(Math.random() * 20) + 1;

		redNumber = Math.round(Math.random() * 20) + 1;

		blueNumber = Math.round(Math.random() * 20) + 1;

		purpleNumber = Math.round(Math.random() * 20) + 1;
	}



	function message() {
		if (randomNumber === score) {
			$('#message').html('<h1>You win!</h1>');
			wins += 1;
			$('#wins').html(wins);
			reset();
		}

		else if (randomNumber < score) {
			$('#message').html('<h1>You lose</h1>');
			losses += 1;
			$('#losses').html(losses);
			reset();

		}

		else {
			$('#message').html('<h1>Keep clicking....</h1>')
		}
	}



	$('#randomNumber').html(randomNumber);

	$('#green').on('click', function() {
		console.log('green: ' + greenNumber);
		$('#greenNumber').html(greenNumber);
		score += greenNumber;
		$('#score').html(score);
		message();
	});

	$('#red').on('click', function() {
		console.log('red: ' + redNumber);
		$('#redNumber').html(redNumber);
		score += redNumber;
		$('#score').html(score);
		message();
	});

	$('#blue').on('click', function() {
		console.log('blue: ' + blueNumber);
		$('#blueNumber').html(blueNumber);
		score += blueNumber;
		$('#score').html(score);
		message();
	});

	$('#purple').on('click', function() {
		console.log('purple: ' + purpleNumber);
		$('#purpleNumber').html(purpleNumber);
		score += purpleNumber;
		$('#score').html(score);
		message();
	});







}); // Closing $(document).ready

