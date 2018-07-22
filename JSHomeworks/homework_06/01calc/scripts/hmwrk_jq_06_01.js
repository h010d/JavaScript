
function getIW(){
 var sex = $("#sex")
, height =  $("#height")
, weight =  $("#weight")
, result =  $("#result")
, k = {
		"male" 		: [4, 128]
		,"female" 	: [3.5, 108]
    }
    
	,iw = Math.round(((+height.val()) * k[sex.val()][0] / 2.54 - k[sex.val()][1]) * 0.453)
    ,diff = iw - weight.val()
    ;
   result.val(iw);
	//console.log("Ваш идеальный вес", iw);
	if(diff < 0){
	result.val(iw + " Рекомендуем Вам похудеть на " + Math.abs(diff) + " кг");
	}
	else if(diff > 0){
		result.val(iw + " Рекомендуем Вам поправиться на " + Math.abs(diff) + " кг");
	}
	else {
		result.val(iw + " Поздравляем, вес идеальный");
	}
}

$("#calc_btn").click(getIW);
