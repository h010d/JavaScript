//1. Реализовать интерфейс для калькулятора идеального веса на JS и JQ

function getIW(){
	var height 		= $(".height")
		,operators  = $(".operators")
		,result 	= $(".result")
		;

if(operators.val() == "мужской"){
		result.val(Math.round(((+ height.val()) * 4 / 2.54 - 128) * 0.453));
	}
if(operators.val() == "женский"){
		result.val(Math.round(((+ height.val()) * 3.5 / 2.54 - 108) * 0.453));
	}
}

$(".calc_btn").click(getIW);
