//класс
/*function Person(height, weight){
	console.log("this", this)
	//свойства
	this.height = height || 0;
	this.weight = weight || 0;
	var name 	= "no name";

	this.breathe = function(){
		console.log("дышит")
	}

	this.sleep = function(){
		console.log("спит")
	}

	this.eat = function(){
		console.log("ест")
	}

	this.setName = function(personName){
		name = personName;
		console.log("Имя:", name)
	}

	this.breathe();	
}
var person1 = new Person(50, 3200);
console.log(person1);
console.log(person1.weight, person1.height);
person1.sleep();
person1.setName("Рома");

console.log("########################");

var person2 = new Person(52, 4000);
console.log(person2);
person2.eat();
*/

var h = 2; a = 3, type=" ";
function univ(h, a, type){
	var S = 0;
	if(type=="triangle"){
		S=(a*h)/2;
	}
	else if(type=="rectangle"){
		S=a*b;
	}
	else if(type=="circle"){
		S=Math.PI*Math.pow(h,2);
	}
	else if(type=="sixangle"){
		S=((a*h)/2)*6;
	}
	return S;
}
console.log("Площадь фигуры: ",	univ(4,3, "triangle"));