var x = 5;
// x = 5;
function test() {
  //x = 8;
  var x = 7;
}
test();
console.log(x);
//alert("hi");
//расчет ккал блюда в зависимости от вида и веса
function getCals(name, weight) {
  var cals = Math.round((foodData[name] * weight) / 100);

  return cals;
}

console.log(getCals("Бутерброд с колбасой вареной", 135), "ккал");
var myDinner = {
  "Биточки говяжьи": 235,
  "Вареники с творогом и сметаной": 347
};

function getDinnerCals(dinner) {
  var cals = 0;
  for (var name in dinner) {
    cals += Math.round((foodData[name] * dinner[name]) / 100);
  }
  return cals;
}
function showDinnerMessage(dinner) {
  var cals = getDinnerCals(dinner);
  if (cals) {
    console.log("Обед: ", cals, "ккал");
  } else {
    console.log(
      "Пожалуйста проверьте названия блюд.Возможно, их нет в списке."
    );
  }
}
showDinnerMessage(myDinner);

/*
функция как потратить ккал за обед
*/

function getIW(sex, height, weight) {
  var k = {
      male: [4, 128],
      female: [3.5, 108]
    },
    iw = ((height * k[sex][0]) / 2.54 - k[sex][1]) * 0.453,
    diff = iw - weight;
  console.log("Ваш идеальный вес: ", iw.toFixed(1));
  if (diff < 0) {
    console.log("Рекомендуем похудеть на", Math.abs(diff.toFixed()), "кг");
  } else if (diff > 0) {
    console.log("Рекомендуем поправиться на", diff.toFixed(), "кг");
  } else {
    console.log("Поздравляем! Вы идеальны! :)");
  }
}
getIW("male", 184, 91);

function getType(sex, type) {
  var t = {
    male: [18, 19, 20],
    female: [15, 16, 17]
  }
  , str = "У Вас "
  ;
  if(type == 19 || type == 16){
    console.log(str ,"Нормостенический тип (нормокостный)", sex);
  }
}
getType(16);
// ================
var btn1 = document.getElementById("btn1");
console.log(btn1.tagName);
function showMessage(){
  console.log("my message");
}
btn1.onclick = showMessage;
function factorial(N){
  // console.log(N);
   var n = N <= 1 ? 1 : N * factorial(N - 1);
    return n;
 }
 function showResult(){
 console.log(factorial(7));
 }
 showResult();
