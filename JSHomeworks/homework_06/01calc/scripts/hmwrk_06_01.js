
function getIW(){
    var sex = document.getElementById("sex")
, height = document.getElementById("height")
, weight = document.getElementById("weight")
, result = document.getElementById("result")
, k = {
		"male" 		: [4, 128]
		,"female" 	: [3.5, 108]
	}
	, iw
	, diff
	;
	height.style.boxShadow = "none";
	weight.style.boxShadow = "none";
	result.style.boxShadow = "none";
	if((height.value > 0) && (weight.value > 0)){
		iw = Math.round(((+height.value) * k[sex.value][0] / 2.54 - k[sex.value][1]) * 0.453);
		diff = iw - weight.value;
	}else if(height.value <= 0){
		result.value = "";
		height.style.boxShadow = "0 0 3px #ff0000";
		height.value = "Введено неправильное значение";
	}else if(weight.value <= 0){
		result.value = "";
		weight.style.boxShadow = "0 0 3px #ff0000";
		weight.value = "Введено неправильное значение";
	}
if(iw > 0){
	result.value = iw;
	if(diff < 0){
		result.value +=	" Рекомендуем похудеть на " + Math.abs(diff) + " кг";
		}
		else if(diff > 0){
			result.value +=	" Рекомендуем поправиться на " + Math.abs(diff) + " кг";
		}
		else {
			result.value +=	" Поздравляем, вес идеальный";
		}
}else{
	 result.style.boxShadow = "0 0 3px #ff0000";
	result.value = "Введено неправильное значение в предыдущие поля";
}

}

var btn = document.getElementById("calc_btn");
btn.onclick = getIW;