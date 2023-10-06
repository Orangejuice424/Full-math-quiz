player1_name = localStorage.getItem("player1name");
	player2_name = localStorage.getItem("player2name");

	player1_score = 0;
	player2_score = 0;
 var correctanswer=0

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
     correctanswer=parseInt(num1) * parseInt(num2)

    question_number = "<h4  id='ques' > "+num1+ " x " + num2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("num1").value = "";
document.getElementById("num2").value = "";



}

var Q_turn="player1"
var A_turn="player2"

function check(){
 	var get_answer=document.getElementById("input_check_box").value
	

	if(get_answer==correctanswer){
		if(A_turn=="player1"){
			player1_score = player1_score + 1
			document.getElementById("player1_score").innerHTML = player1_score ;
		}

		else{
			player2_score = player2_score + 1
			document.getElementById("player2_score").innerHTML = player2_score ;
		}
	}
	if(Q_turn=="player1"){
	   Q_turn="player2"
	   document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;

	}
	else{
		Q_turn="player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	}

	if(A_turn=="player1"){
		A_turn="player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
 
	 }
	 else{
		 A_turn="player1"
		 document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	 }


document.getElementById("output").innerHTML=""



}






