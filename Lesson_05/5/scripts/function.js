var x = 5;
	function test(argument) {
		var x = 7;
	}
test();
console.log(x);

//расчет кк блюда

function getCals(name, weight){
	var cals = Math.round(foodData[name] * weight / 100);

	return cals;
}
console.log(getCals("Биточки рыбные", 100), "ккал");


var myDinner = {
	"Биточки рыбные" 				: 150
	,"Блины с маслом" 				: 100
	,"Блины с творогом" 			: 100
}

function getDinnerCals(dinner){
	var cals = 0;
		for(var name in dinner){
			cals += Math.round(foodData[name] * dinner[name] / 100);
		}
	return cals;
}
console.log("Обед:", getDinnerCals(myDinner), "ккал");

function showDinnerMessage(dinner){
	var cals = getDinnerCals(dinner);
		if(cals){
			console.log("Обед:", cals, "ккал");
		}
		else{
			console.log("Блюда нет в списке");
		}	
}
showDinnerMessage(myDinner);

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
getIW("male", 180, 90)

function getBody(sex, radius){
	var r = {
		"male" 		: [18, 20, 23]
		,"female" 	: [15, 17, 20]
	}
	if(radius < r[sex][0]){
		console.log("Астеничный");
	}
	else if(radius < r[sex][1]){
		console.log("Нормостеничный");
	}
	else{
		console.log("Гиперстеничный");
	}
}
getBody("male", 25)


function getFriendsBirthday(){
		var today 	= new Date()
		,day 		= today.getDate()
		,month 		= today.getMonth() + 1
		,year 		= today.getFullYear()
		,age 		= 0
		;
	console.log("Сегодня", day + "/" + month + "/" + year);
			for(var name in friends[month][day]){
			age = year - friends[month][day][name];
			console.log(name, "-", age)
		}
}
getFriendsBirthday();

function factorial(N){
 return N<=1 ? 1 : N*factorial(N-1);
}
console.log(factorial(5))

function printRange(iNumber){
   if (iNumber){
	    console.log(iNumber);
	    printRange(-- iNumber);  
    }
}
  printRange(6);
