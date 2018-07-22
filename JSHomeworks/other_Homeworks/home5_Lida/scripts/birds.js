/*3. Написать Класс Bird и создать 
два объекта: пингвин и соловей, 
предусмотреть способ издавания звуков..*/
//Класи
function birds(){
	// Властивості
	this.species = "no species";

	//Методи
	this.setSpecies = function(species){
		this.species = species;
		console.log("Species", species);
	}
	this.fly = function(){
		console.log("fly");
	}
	this.jump = function(){
		console.log("jump");
	}
	this.sing = function(){
		console.log("sing");
	}
	this.quackle = function(){
		console.log("quackle");
	}
	this.setEat = function(eat){
		this.eat = eat;
		console.log("Eat", eat);
	}
	this.together = function(){
		console.log("Together live all life in couple");
	}
}
var nightingale = new birds();
nightingale.setSpecies("Nightingale");
nightingale.fly("");
nightingale.sing("");
nightingale.setEat("bugs");
nightingale.together("");

var penguin = new birds();
//console.log(penguin);
penguin.setSpecies("Penguin");
penguin.jump("");
penguin.quackle("");
penguin.setEat("Fish");
penguin.together("");