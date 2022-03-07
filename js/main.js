var score;
var displayScore;
var input1;
var input2;
var random1;
var random2;
var answer;
var displayTimer;
var min;
var sec;
var tmp;
var page;
var pages_arr;
var game_over_msg;


function start(){ // função inicia jogo e variaveis

	score = 0;
	min = 1;
	sec = 59;
	displayScore = document.getElementById('score');
	input1 = document.getElementById('input1');
	input2 = document.getElementById('input2');
	answer = document.getElementById('answer');
	displayTimer = document.getElementById('timer');
	tmp = setInterval(clock, 1000);
	page = window.location.href;

	displayScore.innerHTML = `Score: ${score}`;
		displayTimer.value = `0${min}:${sec}`;
	if(sec < 10){
		displayTimer.value = `0${min}:0${sec}`;

	}

	ramdonsAndShow(10);

	level();

	answer.addEventListener("keydown", verification);


}

window.addEventListener("load", start);

function verification(){ //verifica resposta correta
   let keyboard = event.keyCode;
   let result;
   pages_arr = page.split("/");
   let local = pages_arr[pages_arr.length-1];
   
   switch(keyboard){
   	 	case 13:

   	 		switch(local){
   	 			case 'soma.html':
   	 				result = random1 + random2;
   	 				break;
   	 			case 'sub.html':
   	 				result = random1 - random2;
   	 				break;
   	 			case 'mult.html':
   	 				result = random1 * random2;
   	 				break;
   	 			default:
   	 				break;
   	 		}
   	 		
   	 		
   	 		if(result == parseInt(answer.value)){
   	 			answer.value = " "
   	 			score += 10;
					min = 1;
					sec = 59;
					displayTimer.value = `0${min}:${sec}`;
					if(sec < 10){
						displayTimer.value = `0${min}:0${sec}`;

					}
   	 	
					displayScore.innerHTML = `Score: ${score}`;
					ramdonsAndShow(10);
					level();
   	 		}
   	 		else {
   	 			window.location.href = "game_over.html";
   	 			
   	 		}
   	 		
   	 		break;
   }

}


function clock(){ // diminui cronometro
	sec -= 1;

	if((sec == 0) && (min == 0)){

		window.location.href = "game_over.html";

		}
					
   setTimeout(wait, 900);

	displayTimer.value = `0${min}:${sec}`;
	if(sec < 10){
		displayTimer.value = `0${min}:0${sec}`;

	}
	
}
function wait(){ // se o segundo estiver em 0 diminui minuto e repõe valor de segundo
 	 if(sec == 0){

		sec = 60;
		min -= 1;
	}

}
function answer_sure(){ // se resposta certa reinicia cronometro
		min = 1;
		sec = 59;
		displayTimer.value = `0${min}:${sec}`;
		if(sec < 10){
		displayTimer.value = `0${min}:0${sec}`;

		}
}

function level(){ //verifica a pontuação e aumenta o nivel de dificuldade

	if(score > 50){
		ramdonsAndShow(50);
	}

	else if (score > 200) {
		ramdonsAndShow(200);
	}

	else if (score > 500){
		ramdonsAndShow(500);
	}
	else if (score > 1000){
		ramdonsAndShow(1000);
	}

}
function ramdonsAndShow(number){ //randomiza os numeros
		random1 = Math.floor(Math.random()*number);
		random2 = Math.floor(Math.random()*number);
		input1.value = random1;
		input2.value = random2;
}










