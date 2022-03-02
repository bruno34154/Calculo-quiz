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


function start(){ // função inicia jogo e variaveis

	score = 0;
	min = 1;
	sec = 59;
	displayScore = document.getElementById('score');
	input1 = document.getElementById('input1');
	input2 = document.getElementById('input2');
	random1 = Math.floor(Math.random()*10);
	random2 = Math.floor(Math.random()*10);
	answer = document.getElementById('answer');
	displayTimer = document.getElementById('timer');
	tmp = setInterval(clock, 1000);
	

	displayScore.innerHTML = `Score: ${score}`;
	input1.value = random1;
	input2.value = random2;
	displayTimer.value = `0${min}:${sec}`;
	if(sec < 10){
		displayTimer.value = `0${min}:0${sec}`;

	}

	level();


	
	answer.addEventListener("keydown", verification);


}

window.addEventListener("load", start);

function verification(){ //verifica resposta correta
   let tecla = event.keyCode;
   let result;
   
   switch(tecla){
   	 	case 13:
   	 		
   	 		result = random1 + random2;
   	 		if(result == parseInt(answer.value)){
   	 			answer.value = " "
   	 			random1 = Math.floor(Math.random()*10);
				random2 = Math.floor(Math.random()*10);
   	 			score += 10;
				min = 1;
				sec = 59;
				displayTimer.value = `0${min}:${sec}`;
				if(sec < 10){
					displayTimer.value = `0${min}:0${sec}`;

				}
   	 			input1.value = random1;
				input2.value = random2;
				displayScore.innerHTML = `Score: ${score}`;
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
		random1 = Math.floor(Math.random()*50);
		random2 = Math.floor(Math.random()*50);
		input1.value = random1;
		input2.value = random2;
	}

	else if (score > 200) {

		random1 = Math.floor(Math.random()*100);
		random2 = Math.floor(Math.random()*100);
		input1.value = random1;
		input2.value = random2;
	}

	else if (score > 500){
		random1 = Math.floor(Math.random()*500);
		random2 = Math.floor(Math.random()*500);
		input1.value = random1;
		input2.value = random2;
	}
	else if (score > 1000){
		random1 = Math.floor(Math.random()*1000);
		random2 = Math.floor(Math.random()*1000);
		input1.value = random1;
		input2.value = random2;
	}

}









