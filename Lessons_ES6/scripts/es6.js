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
setTimeout(function() {
    console.info('inner message');
    setTimeout(console.info('hjkhkjh'), 2000);
}, 4000);