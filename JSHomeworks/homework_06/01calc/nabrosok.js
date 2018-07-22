function getIW(sex, height, weight){
	var k = {
		"male" 		: [4, 128]
		,"female" 	: [3.5, 108]
	}
	,iw = Math.round((height * k[sex][0] / 2.54 - k[sex][1]) * 0.453)
	,diff = iw - weight
	;
	console.log("Ваш идеальный вес", iw);
	if(diff < 0){
		console.log("Рекомендуем похудеть на", Math.abs(diff), "кг");
	}
	else if(diff > 0){
		console.log("Рекомендуем поправиться на", Math.abs(diff), "кг");
	}
	else {
		console.log("Поздравляем, вес идеальный");
	}
}