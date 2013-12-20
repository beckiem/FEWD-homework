var human=0;
var computer=0;
var randoWepo="";

document.getElementById("rock").onclick=fightRock;
function fightRock() {
	botsWeapon();
		if (randoWepo==="scissors") {
			human=human+1;
			document.getElementById("humanScore").innerHTML=human;
		}
		else if (randoWepo==="paper") {
			computer=computer+1;
			document.getElementById("computerScore").innerHTML=computer;
		}
}

document.getElementById("paper").onclick=fightPaper;
function fightPaper() {
	botsWeapon();
		if (randoWepo==="rock") {
			human=human+1;
			document.getElementById("humanScore").innerHTML=human;
		}
		else if (randoWepo==="scissors") {
			computer=computer+1;
			document.getElementById("computerScore").innerHTML=computer;
		}
}

document.getElementById("scissors").onclick=fightScissors;
function fightScissors() {
	botsWeapon();
		if (randoWepo==="paper") {
			human=human+1;
			document.getElementById("humanScore").innerHTML=human;
		}
		else if (randoWepo==="rock") {
			computer=computer+1;
			document.getElementById("computerScore").innerHTML=computer;
		}
}
function botsWeapon (){
	var randoWepoNum=Math.random();
	if (randoWepoNum<.3333333){
		randoWepo="rock";
	}
	else if (randoWepoNum<.67){
		randoWepo="paper";
	}
	else {
		randoWepo="scissors";
	}
}
