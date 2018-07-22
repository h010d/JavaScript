var num1 = 5,
  num2 = 7,
  result = 0;
result = num1 + num2;
console.log(num1, "+", num2, "=", result);

result *= 2;
console.log("result *= 2  ", result);
result++;
console.log("result++ : ", result);

num1 = 0;
num2 = 0;
result = num1++;
console.log("num1 : ", num1, "result : ", result);
result = ++num2;
console.log("num2 : ", num2, "result : ", result);

console.log("num2 : ", (num2 = 3));
result *= ++num2;
console.log("num2 : ", num2, "result : ", result);

num1 = 0;
num2 = 0;
result = num1++;
console.log("num1 : ", num1, "result : ", result);
result = ++num2;
console.log("num2 : ", num2, "result : ", result);
console.log("num2 == num1", num2 == num1);
console.log("num2 == num1", num2 != num1);
console.log("num2 > num1", num2 > num1);
console.log("num2 >= num1", num2 >= num1);
num2 = "1";
console.log("num2 : ", num2);

//Сравнение по значению
console.log("num2 == num1", num2 == num1);
//Сравнение по значению и типу данных
console.log("num2 === num1", num2 === num1);
result = 10;
console.log("result", result);
console.log("!result", (result = !result));
console.log("result", result);
num0 = 1;
if (num0) {
  console.log("num: ", num0);
}
console.log("-----");
var p = 2;
p = p * (3 + 5);
console.log( p ); //результат 11

var n = 2;
n *= 3 + 5; //сокращенный вариант записи
console.log( n ); //результат 16

var count = 0;
for (var i = 0; i < 99; ++i) {
  var sum1 = i / 10%;
  var sum2 = i / 10 % 10 + i % 10;
  console.log(sum1); //результат 55251
  if (sum1 == sum2) {
    count++;
  }
}
console.log(count); //результат 55251
