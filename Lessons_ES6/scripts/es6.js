//  ES6 features
//  https://kangax.github.io/compat-table/es6/
console.info("----------ES6----------");
let apples = 2;
if (true) {
    let apples = 3;
    console.info('inner let:', apples);
}

console.info('outer let:', apples);
// for (var i = 0; i < 10; i++) {

//     (function(i) {
//         setTimeout(function() {
//             console.info(i);
//         }, i * 1000);
//     })(i);
// }
// for (let i = 0; i < 10; i++) {
//     setTimeout(
//         function() {
//             console.info('es6', i);
//         }, i * 1000);
// }
////////////////////////////////////////?
var param = 'hi all';

function show() {
    console.info(param);
}


function simpleCallBack() {
    setTimeout(function() {
        show();
    }, 2000);
    console.log('hi:');
}
var hi = document.getElementById('hi');

$(hi).click(simpleCallBack);

////////////////////////////////////////?
const g = 9.8;
// g = 8
//////////////////** SPREAD **//////////////////////////
// оператор развертывания  --  spread operator
function createURL(comment, protocol, subdomen, domain, domain2, domain1) {
    console.info(
        comment +
        ": " +
        protocol +
        "://" +
        subdomen +
        "." +
        domain +
        "." +
        domain2 +
        "." +
        domain1 +
        "/"
    );
}

let link = ["http", "www", "google", "com", "ua"],
    comment = "search engine";

createURL(comment, ...link);
//========================================//

var array = [];
// * ES5
var maxInArray = Math.max.apply(Math, array);
// * ES6
var maxInArray = Math.max(...array);
//////////////////** REST **//////////////////////////
// оператор "оставшиеся" параметры -- Rest operator
var cat, dog, bird;

function createCollection(name, ...items) {
    return { name, items };
}

var animals = createCollection('Animals', cat, dog, bird);
//=======================================//

function pushPlanets(array, ...items) {
    items.forEach(
        function(item) {
            array.push(item);
            console.info(item);
        }
    );
}
let planets = [];
console.info("Planets:");
pushPlanets(planets, "Earth", "Venus", "Mars");
////////////////////* Destructuring  *//////////////////////
// деструктурирующее присваивание
// 		 Destructuring
//source 			 	target
[X, Y, Z] = [1, 2, 3, 4, 5]
var range = [];
//* ES5
var min = range[0];
var max = range[1];
//* ES6
var [min, max] = range;
//---------------------------------------- //

let [red, green, blue] = ["F00", "0f0", "00f"];
console.log(red, green, blue);
////////////////////* template strings  *//////////////////////
// шаблонные строки

var user = {
    name: 'Ingvar',
    position: 'Javascript developer'
};
var greeting = `Hello, my name is ${user.name} and I am ${user.position}.`;
console.log('greeting :', greeting);

function showGreeting(name) {
    console.info(`Hello, ${name}`);
}
showGreeting('Misha');

////////////////////* for...of  *//////////////////////
let langs = ['javascript', 'PHP', 'Java'];

for (let lang of langs) {
    console.info(lang);
}
////////////////////* Default parameters  *//////////////////////
// параметры по умолчанию
// * ES5
function loadMoreItems(offset, limit) {
    if (offset === undefined) offset = 0;
    if (limit === undefined) limit = 50;
}
// * ES6
function loadMoreItems(offset = 0, limit = 50) {

}

function showGreetingDP(greeting = 'Hello', name = 'friend') {
    console.info(`${greeting}, ${name}!`);
}
showGreetingDP('Hi', 'Kate');
showGreetingDP('Hi');
showGreetingDP();

function ES6_sayMessage(msg = 'This is a default message') {
    console.info(msg);
}
ES6_sayMessage();
ES6_sayMessage('This is a DIFFERENT message!');

////////////////////* Arrow functions  *//////////////////////
// стрелочные функции
// * ES5
function add_5(a, b) {
    return a + b;
}
console.info(add_5(5, 7));

// * ES6
let add = (a, b) => a + b;
console.log(add(5, 7));

// * ES5
// "this" is undefined
this.x = 'yes';
var y_5 = function() {
    'use strict';
    console.info(this.x);
};
/* y_5(); // TypeError */

// * ES6
// "this" from outer scope
this.x = 'yes';
let y = () => {
    'use strict';
    console.info(this.x);
};
y(); // 'yes'


let square = (a, b) => a * b;
let pi = () => 3.14;
console.info('Square:', square(4, 7), '-- PI:', pi());
////////////////////* Shorthand methods  *//////////////////////
// сокращения методов
/* let person = {
    firstName,
    lastName,
    method() {}
};
person.method(); */
// * ES5
var Engine = {
    isRunning: false,
    start: function() {
        this.isRunning = true;
        console.info('Engine is started.');
    },
    stop: function() {
        this.isRunning = false;
        console.info('Engine is stopped.');
    }
};
// * ES6
var Engine = {
    isRunning: false,
    start() {
        this.isRunning = true;
        console.info('Engine is started.');
    },
    stop() {
        this.isRunning = false;
        console.info('Engine is stopped.');
    }
};
////////////////////* Class declaration  *//////////////////////
class Person {
    constructor(name) {
        //Свойства ТОЛЬКО в конструкторе
        this.name = name;
    }
    sleep() {}
}
let person = new Person('Kate');
console.info(person.name);
////////////////////* Class expression  *//////////////////////
var Animal = class {};
var Dog = class extends Animal {};

class Language {
    constructor(name, founder, year) {
        this.name = name;
        this.founder = founder;
        this.year = year;
    }
    summary() {
        // return this.name + ' was created by ' + this.founder + ' in ' + this.year;
        return `${this.name} was created by ${this.founder} in ${this.year}`;
    }
}
let lang1 = new Language('JS', 'Брендан Эйх', 1995);
console.info(lang1.summary());