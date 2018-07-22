// 1. массив меню
// {
//  имя_файла :
//   {
//    "text" : название пункта меню
//    ,"keywords" : ключевые слова
//   }
// }
// Казнить, нельзя помиловать
// Казнить нельзя, помиловать

// - вывести пункты меню
// - вывести только ключевые слова по каждому пункту меню

// 2. Методы для работы с простыми массивами - разобрать
// 3. Строка несколько предложений
// - вывести количество предложений
// - вывести количество слов
// - перемешать слова в строке
// 4. Строка "казнить нельзя помиловать"
// вставить запятую
// 5. Погода
// Переменная - день недели
// Многомерный массив для хранения данных о погоде за каждый день недели
// Вывести погоду по дню недели

var prtSeparator = function() {
  var separ = "",
    a = 35;
  for (var i = 0; i < a; i++) {
    separ += "-=";
  }
  console.log(separ);
};

prtSeparator();
console.log("2. Методы для работы с простыми массивами - разобрать");

var aSimpleArray = new Array(count),
  count = 75,
  begin = 0,
  end = 125,
  viewArray = "";
for (var i = 0; i < count; i++) {
  aSimpleArray[i] = Math.round(Math.random() * (end - begin + 1)) + begin;
}

viewArray = aSimpleArray.toString();
console.log("Array --> string: ", viewArray);
aSimpleArray.sort(function(a, b) {
  return a - b;
});
viewArray = aSimpleArray.toString();
console.log("Array sorted inc --> string: ", viewArray);
aSimpleArray.sort(function(a, b) {
  return b - a;
});
viewArray = aSimpleArray.toString();
console.log("Array sorted dec --> string: ", viewArray);
viewArray = aSimpleArray.reverse().toString();
console.log("Array reverse --> string: ", viewArray);

prtSeparator();
console.log(
  " 3. \nСтрока несколько предложений \n - вывести количество предложений\n - вывести количество слов\n- перемешать слова в строке"
);
var lorem =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore rem nam minima facilis quasi illo veniam, et, sunt asperiores at sequi consectetur aperiam provident adipisci neque officia molestias natus dolore! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore rem nam minima facilis quasi illo veniam, et, sunt asperiores at sequi consectetur aperiam provident adipisci neque officia molestias natus dolore! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore rem nam minima facilis quasi illo veniam, et, sunt asperiores at sequi consectetur aperiam provident adipisci neque officia molestias natus dolore!",
  newStr = "",
  dividedString = "",
  tmpIndex = 0;

console.log(
  "\nКоличество предложений в строке: ",
  lorem.split("!").length + lorem.split(".").length + lorem.split("?").length
);
dividedString = lorem.split(" ");
console.log("Количество слов в тексте: ", (count = lorem.split(" ").length));
i = 0;
while (count > i) {
  tmpIndex = Math.round(Math.random() * count);
  if (dividedString[tmpIndex]) {
    newStr += dividedString[tmpIndex] + " ";
    dividedString[tmpIndex] = 0;
    i++;
  }
}
console.log("Перемешанный текст: \n", newStr);

dividedString = lorem.split(" ");
dividedString.sort(function(a, b) {
  var x = a.toLowerCase();
  var y = b.toLowerCase();
  if (x < y) {
    return -1;
  }
  if (x > y) {
    return 1;
  }
  return 0;
});
console.log("Отсортированный массив текста: ", dividedString.toString());

prtSeparator();
console.log("4.Казнить нельзя помиловать");
//console.log("");
var strRepl = "Казнить нельзя помиловать",
  newStrReplStart = "",
  newStrReplEnd = "";
// находим подстроку от начала до  первого пробела
newStrReplStart = strRepl.slice(0, strRepl.indexOf(" "));
// добавляем в конец запятую
newStrReplStart += ",";
// добавляем подстроку  до второго пробела
newStrReplStart += strRepl.slice(
  strRepl.indexOf(" "),
  strRepl.lastIndexOf(" ")
);
// дабавляем вторую запятую
newStrReplStart += ",";
// добавляем подстроку от последнего пробела до конца
newStrReplStart += strRepl.slice(strRepl.lastIndexOf(" "));
console.log(newStrReplStart);

prtSeparator();

// var nums = [[1, 2, 3], [-1, -2, -3], [4, 6, 8]],
//   users = [
//     {
//       name: "ivon",
//       age: 34
//     },
//     {
//       name: "mils",
//       age: 41
//     }
//   ],
//   clothes = {
//     QSC123: {
//       title: "платье",
//       brand: "Dior",
//       size: ["S", "M"],
//       price: 40000
//     },
//     ZDT456: {
//       title: "юбка",
//       brand: "Chanel",
//       size: ["XS", "L"],
//       price: 35000
//     }
//   };
// console.log(
//   "clothes.QSC123 expected => {... brand: 'Dior'... }",
//   clothes.QSC123
// );
// console.log("clothes.QSC123 expected => undefined ", clothes[0]);
// console.log("users[0] expected => { name: 'ivon', age: 34 }", users[0]);
// var objDate = new Date("2018", "04", 29),
//   locale = "ru-ru",
//   month = objDate.toLocaleString(locale, { month: "long" });
// weekday = objDate.toLocaleString(locale, { weekday: "long" });

// console.log(month, weekday);

// // or if you want the shorter date: (also possible to use "narrow" for "O"
// console.log(objDate.toLocaleString(locale, { month: "short" }));
