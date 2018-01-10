//Random Number for user
$(document).ready(function() {
var wins = 0;
var losses = 0;
var userTarget = getRandomIntInclusive(19,120);
var c1 = getRandomIntInclusive(1,12);
var c2 = getRandomIntInclusive(1,12);
var c3 = getRandomIntInclusive(1,12);
var c4 = getRandomIntInclusive(1,12);
var total = 0;


	function getRandomIntInclusive(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1)) + min; 
	}

		//Random Number for crystals
		$(".userNumber").html(userTarget);

			$("#crystal-1").click(function() {
				total = c1 + total;
				console.log(total);
				$(".score").html("Your total score is: " + total);
			});

			$("#crystal-2").click(function() {
				total = c2 + total;
				console.log(total);
				$(".score").html("Your total score is: " + total);
			});

			$("#crystal-3").click(function() {
				total = c3 + total;
				console.log(total);
				$(".score").html("Your total score is: " + total);
			});

			$("#crystal-4").click(function() {
				total = c4 + total;
				console.log(total);
				$(".score").html("Your total score is: " + total);
			});

				//Wins & losses

				function check(){
					if (total == userNumber);
					{
						wins++;
						$(".win").html(wins);
						alert("Winner!");
						console.log(check);
					}

					if (total > userNumber);
					{
						losses++;
						$(".loss").html(losses);
						alert("Loser!");
					}	

				}

});