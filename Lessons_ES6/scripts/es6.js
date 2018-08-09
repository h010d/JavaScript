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
    return {
        name,
        items
    };
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
////////////////////* Статические свойства класса  *//////////////////////
class Personcl {

    constructor(name) {
        this.name = name;
        this.qty += 1;
    }
}
Personcl.qty = 0;
console.log('Personcl.qty :', Personcl.qty);
let personcc = new Person('Ket');
console.info(Person.qty);
console.info('personcc.qty', personcc.qty);
personcc.qty = 4;
console.info('personcc.qty', personcc.qty); //?
////////////////////* Статические методы класса  *//////////////////////
//* static название_метода(){}
/*
принадлежат только классу но не объектам.
используются для создания вспомогательных функций
(например указать значение по умолчанию для свойства) */
////////////////////* Наследование  *//////////////////////
class Shape {}
class Rect extends Shape {}
/* Ключевое слово //* super 
/* используется для вызова
/*функций, принадлежащих родителю объекта **/
class Polygon {
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
    sayName() {
        console.info(`Hi, I am a ${this.name}.`);
    }
}
class Square extends Polygon {
    constructor(length) {
        super(length, length);
        this.name = 'Square';
    }
    get area() {
        return this.height * this.width;
    }
}
let s1 = new Square(5);
s1.sayName();
console.log('s1.area :', s1.area);
////////////////////* Promise  *//////////////////////
/* Используется для отложенных и 
асинхронных вычислений
Может находиться в трех состояниях:
--ожидание(pending): начальное состояние,
не выполнено и не отклонено.
--выполнено(fulfilled): операция завершена успешно
--отклонено(rejected): операция завершена с ошибкой */

//let promise = new applyForVisa();
//promise.then(bookHotel, cancelVacation);
/* или
promise
		.then(bookHotel)
		.catch(cancelVacation);
bookHotel - функция(fulfilled), если promise выполнится
cancelVacation - функция(rejected), если promise не выполнится */

let myPromyse = new Promise(
    (fResolve, fReject) => {
        console.info('Look here, I start!');

        window.setTimeout(() => {
            let now = new Date();
            if (now.getSeconds() % 2) {
                fResolve('I am done!');
            } else {
                fReject('Unfortunatly ...');
            }
        }, 2000);
    }
);

myPromyse
    .then((sResultMessage) => {
        console.info(sResultMessage);
    })
    .catch((error) => {
        console.info('Something went wrong', error);
    });