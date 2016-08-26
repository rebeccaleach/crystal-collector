// Star Wars RPG game JS

$(document).ready(function(){

	$('#finn').on('click', function() {
			$('#finn').html('');
			$('#you').html(
        		'<div class="wrap" id="finn"><p>Finn</p><img src="assets/images/finn.jpg" alt="Finn"><p>120</p></div>'
				);
			$('#you').css('background-color', 'green');

	});






}); // Closing $(document).ready

