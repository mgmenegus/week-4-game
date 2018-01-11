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
				check();
				
			});

			$("#crystal-2").click(function() {	
				total = c2 + total;
				console.log(total);
				$(".score").html("Your total score is: " + total);
				check();
				
			});

			$("#crystal-3").click(function() {
				total = c3 + total;
				console.log(total);
				$(".score").html("Your total score is: " + total);
				check();
				
			});

			$("#crystal-4").click(function() {
				total = c4 + total;
				console.log(total);
				$(".score").html("Your total score is: " + total);
				check();
				
			});

				//Wins & losses

				function check(){
					if (total == userTarget)
					{
						wins++;
						$(".win").html("Wins: " + wins);
						alert("Winner!");
						reset();
						
					}

					if (total > userTarget)
					{
						losses++;
						$(".loss").html("Loss: " + losses);
						alert("Loser!");
						reset();

					}	


				}

				function reset(){
					total = 0;
					userTarget=getRandomIntInclusive(19,120);
					$(".userNumber").html(userTarget);

						c1 = getRandomIntInclusive(1,12);
							$("#crystal-1").attr("value", c1);
						c2 = getRandomIntInclusive(1,12);
							$("#crystal-2").attr("value", c2);
						c3 = getRandomIntInclusive(1,12);
							$("#crystal-3").attr("value", c3);
						c4 = getRandomIntInclusive(1,12);
							$("#crystal-4").attr("value", c4);
				}

});