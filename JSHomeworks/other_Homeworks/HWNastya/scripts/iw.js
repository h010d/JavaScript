//1. Реализовать интерфейс для калькулятора идеального веса на JS и JQ

function getIW(){
	var height 		= document.getElementById("height")
		,operators  = document.getElementById("operators")
		,result 	= document.getElementById("result")
		;

if(operators.value == "мужской"){
		result.value = Math.round(((+ height.value) * 4 / 2.54 - 128) * 0.453);
	}
if(operators.value == "женский"){
		result.value = Math.round(((+ height.value) * 3.5 / 2.54 - 108) * 0.453);
	}
}
var btn = document.getElementById("calc_btn");
btn.onclick = getIW;
	
