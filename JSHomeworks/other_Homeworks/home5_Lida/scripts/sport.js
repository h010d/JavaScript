//1. Написать функцию "как потратить ккал" (перебирать виды спорта)
var mySport = {
	"Jump"	: 20
	,"Run"	: 4
	,"Press": 34
}
//Без функцїї
console.log("----------------------Без функції")
for(var name in mySport){

	console.log("Kind of sport: ", name);
	console.log("Calories: ", Math.round(sportData[name] * mySport[name]));	
}

// З функцією
console.log("----------------------З функцією")
function getSportCals(sport){

for(var name in sport){

	console.log("Kind of sport: ", name);
	console.log("Calories: ", Math.round(sportData[name] * sport[name]));
}
return "Done";
}
console.log(getSportCals(mySport));

// Сума калорій для всіх видів спорту
console.log("----------------------Сума калорій для всіх видів спорту")
function getAllSportCals(sport){
	var cals = 0;
		for(var name in sport){
			// cals += Math.round(sportData[name] * sport[name] / 100);
			cals = cals + Math.round(sportData[name] * sport[name]);
		}
	return cals;
}
console.log("Total calories: ", mySport, getAllSportCals(mySport), "kkl");