//1. Сгенерировать случайным образом пароль длиной 16 символов
var str = ""
  , passLength = 8 //нужная длина пароля
  , numLimitMax = 57 //максимальные цифры в пароле
  , numLimitMin = 5 // минимальные цифры в пароле
  , letters = "Az" //диапазон значений для заполнения
  , firstLetterNum = letters.charCodeAt(0)
  , lastLetterNum = letters.charCodeAt(1)
  , arrStr = []
  ;
function passGenerator(str, passLength, numLimitMin, numLimitMax) {
  var newStr = ""
    , randNum = 0
    , testNumb = passLength / 2
    ;
    //Если строка "str" пустая
    //то заполняем ее произвольными буквами
  if (!(str.length)) {
    for (var i = 0; i < Math.round(testNumb); i++) {
      randNum = Math.floor(Math.random() * (lastLetterNum - firstLetterNum + 1)) + firstLetterNum;
      if (randNum >= 91 && randNum <= 96) {
        // если выпадают символы не кошерные :)
        // то пропускаем цикл
        i--;
        continue;
      } else {
          //генерируем char from number
        str += String.fromCharCode(randNum);
      }
    }
  }
  for (var i = 0; i <= passLength && newStr.length <= passLength; i++) {
    randNum = Math.floor(Math.random() * (numLimitMax - numLimitMin + 1)) + numLimitMin;
    newStr += str[i] + randNum;
  }
  // если пароль сгенерировался длиннее чем предполагалось
  // то делаем обрезание строке, иначе она будет не кошерная :)
  if(newStr.length > passLength){
arrStr = newStr.split("");
newStr = "";
for(var i = 0; i < passLength; i++){
  newStr += arrStr[i];
}
  }
  return newStr;
}

// вызываем функцию генерирующую пароль, передаем туда строку, желаемую длину пароля, минимальное значение,
// максимальное значение
console.log("function return: ", passGenerator(str, passLength, numLimitMin, numLimitMax));