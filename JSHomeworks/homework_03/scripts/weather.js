var prtSeparator = function () {
  var separ = ""
    , a = 35
    ;
  for (var i = 0; i < a; i++) {
    separ += "-=";
  }
  console.log(separ);
}

prtSeparator();
console.log("// 5. Погода");
// Переменная - день недели
// Многомерный массив для хранения данных о погоде за каждый день недели
// Вывести погоду по дню недели
// var objDate = new Date("05/29/2018"),
//     locale = "ru-ru",
//     month = objDate.toLocaleString(locale, { month: "long" , weekday: "long"});

// console.log(month);

// // or if you want the shorter date: (also possible to use "narrow" for "O"jjjj
// console.log(objDate.toLocaleString(locale, { month: "short" }));
var months = new Array()
  , aDay = {
    "id": ""
    , "month": ""
    , "dayOfTheWeek": ""
    , "numericDay": ""
    , "morning": "0"
    , "noonday": "0"
    , "evening": "0"
    , "night": "0"
    , "wind": ""
    , "rain": "0"
  }
  , sizeArray = 7
  , objDate = ""
  , year = 2018
  , dmonth = 5
  , dday = 10
  , locale = "en-us"
  , markWind = 20
  , markRain = 15
  , correction = 5
  , correctionEvening = -5
  , correctionNight = -15
  , beginMorning = 12
  , endMorning = 22
  , beginNight = 5
  , endNight = 16
  , viewArray = ""
  , parseNoonday = 0
  , showdayOfTheWeek = "Sunday"
  ;
// for(var i = 0; i < count; i++){
//   aSimpleArray[i] = Math.round(Math.random() * (end - begin + 1)) + begin;
// }


for (i = 0; i < sizeArray; i++) {
  aDay = new Object();
  aDay["id"] = i + 1;
  objDate = new Date(year, dmonth, dday + i);
  //console.log(objDate);
  aDay["month"] = objDate.toLocaleString(locale, { month: "long" });
  aDay["dayOfTheWeek"] = objDate.toLocaleString(locale, { weekday: "long" });
  aDay["numericDay"] = objDate.toLocaleString(locale, { day: "2-digit" });
  aDay["morning"] = Math.round(Math.random() * (endMorning - beginMorning + 1)) + beginMorning + " ℃";
  parseNoonday = Math.round(Math.random() * ((endMorning + correction) - (beginMorning + correction) + 1)) + beginMorning;
  aDay["noonday"] = parseNoonday + " ℃";
  aDay["evening"] = Math.round(Math.random() * ((endMorning + correctionEvening) - (beginMorning + correctionEvening) + 1)) + beginMorning + " ℃";
  aDay["night"] = Math.round(Math.random() * ((endNight + correctionNight) - (beginNight + correctionNight) + 1)) + beginNight + " ℃";

  if (parseNoonday < markWind) {

    aDay["wind"] = "wind";

  } else {
    aDay["wind"] = "without wind";
  }
  if (parseNoonday < markRain) {
    aDay["rain"] = "rain";
  } else {
    aDay["rain"] = "without rain";
  }

  months.push(aDay);
}
console.log(months);
console.log("06:25:2018");// Вывести эту дату
prtSeparator();
for(var i = 0; i < sizeArray; i++){
  if(months[i]["dayOfTheWeek"] == showdayOfTheWeek)
  console.log(months[i]);
}