/**
 * ES6 features
 * https://kangax.github.io/compat-table/es6/
 */

console.log("------- ES6 -------");
let apples = 2;
	if(true){
		let apples = 3;
		console.log("inner let:", apples);
	}
console.log("outer let:", apples);

const g = 9.8;
//g = 8;

	function createURL(comment, protocol, subdomain, domain, domain2, domain1){
		console.log(
			comment
			+ ": "
			+ protocol
			+ "://"
			+ subdomain
			+ "."
			+ domain
			+ "."
			+ domain2
			+ "."
			+ domain1
			+ "/"
			);
	}


let link = ["http", "www", "google", "com", "ua"]
	,comment = "search engine"
	;
	
createURL(comment, ...link);

	function pushPlanets(array, ...items){
		items.forEach(
			function(item){
				array.push(item);
				console.log(item);
			}
		);
	}

let planets = [];
console.log("Planets:");

pushPlanets(planets, "Earth", "Venus", "Mars");

let [red, green, blue] = ["#ff0000", "#00ff00", "#0000ff"];
console.log(red, green, blue);

	function showGreeting(name){
		console.log(`Hello, ${name}!`);
	}
	
showGreeting("Misha");

let langs = ["javaScript", "PHP", "Java"];
	for(let lang of langs){
		console.log(lang);
	}

	function ES6_sayMessage(msg = "This is a default message"){
		console.log(msg);
	}
	
ES6_sayMessage();	
ES6_sayMessage("This is a DIFFERENT message!");	

let square = (a, b) => a * b;
let pi = () => 3.14;

console.log("Square:", square(4, 7), "PI:", pi());

class Language {
	constructor(name, founder, year){
		this.name 		= name;
		this.founder 	= founder;
		this.year 		= year;
	}
	summary() {
		return this.name + " was created by " + this.founder + " in " + this.year;
	}
}

let lang1 = new Language("JS", "Брендан Эйх", 1995);
console.log(lang1.summary());

class Polygon {
	constructor(height, width){
		this.name 	= "Polygon";
		this.height = height;
		this.width 	= width;
	}
	
	sayName(){
		console.log("Hi, I am a", this.name + ".");
	}
}

class Square extends Polygon {
	constructor(length){
		super(length, length);
		this.name = "Square";
	}
	
	get area(){
		return this.height * this.width;
	}
}

let s1 = new Square(5);
s1.sayName();
console.log(s1.area);

let myPromise = new Promise(
	(fResolve, fReject) => {
		console.log("Look here, I start!");
		
		window.setTimeout(() => {
			let now = new Date();
			if(now.getSeconds()%2){
				fResolve("I am done! :)");
				}
			else{
				fReject("Unfortunatly... :(");
				}
			}, 2000);
		}
	);

myPromise
	.then((sResultMessage) => {
		console.log(sResultMessage);
		})
	.catch((error) => {
		console.log("Something went wrong", error);
		}
	);







