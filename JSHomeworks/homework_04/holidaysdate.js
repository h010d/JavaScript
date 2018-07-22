//2. Есть текущая дата. Необхомо вывести её в формате: 2 июня 2018 года
//3. Есть текущая дата. Необходимо вывести праздники на эту дату.
var today = new Date(/*2018, 05, 23*/)
  , day = ""
  , findDay = true
  , findHoliday = today.getDate()
  , month = ""
  , year = ""
  , locale = "ru-ru"
  , holidays = {
      1: ["День защиты детей"]
    , 3: ["День работников местной промышленности", "День работников водного хозяйства"]
    , 4: ["Международный дeнь невинных детей - жертв агрессии", "День хозяйственных судов"]
    , 5: ["Всемирный день окружающей среды"]
    , 6: ["День журналиста"]
    , 8: ["Всемирный день океанов"]
    , 9: ["Международный день друзей"]
    , 10: ["День работников легкой промышленности"]
    , 12: ["День работников фондового рынка"]
    , 14: ["Всемирный день донора"]
    , 17: ["Всемирный день борьбы с опустыниваниeм и засухой", "День медицинского работника"]
    , 18: ["День участкового инспектора милиции"]
    , 20: ["Всемирный день беженцев"]
    , 22: ["День скорби и оказания почестeй памяти жертв войны в Украине"]
    , 23: ["День государственной службы ООН", "День государственной службы Украины"]
    , 24: ["День молодежи"]
    , 25: ["День таможенной службы Украины"]
    , 26: ["Международный день ООН в поддеpжку жертв пыток", "Международный день борьбы прoтив злоупотребления наркотиками и иx незаконного оборота"]
    , 28: ["День Конституции Украины"]
  }
  ;

function declinationOfMonths(month, locale) {
  //меняем склонение названия выбранного месяца
  var symbols = {
    "ь": "я", "т": "та", "й": "я"
  }
    , newMessage = ""
    ;
  if (locale == "ru-ru") {
    for (var i = 0; i < month.length; i++) {
      newMessage += symbols[month[i]] && (i == month.length - 1) ? symbols[month[i]] : month[i];
    }
    return  newMessage;
  }
}
// ищем праздники по заданной дате в массиве
function findDayHoliday(findHoliday, holidays) {
  var str = "\nфух наконец-то...! А то, я уже начал переживать что повод не найдется";
  for (var arrday in holidays) {
    if (arrday == findHoliday) {
      if (arrday.length) {
        var i = 0; //объявили  для while
        while (arrday[i]) {
          console.log(day, month, holidays[arrday][i++], str);
        }
      } else {
        console.log(day, month, holidays[arrday], str);
      }
      findDay = false;
    }
  }
  if (findDay) {
    console.log(day, month, "В этот день праздники не найдены.\nЗначит Вам придется пить без повода!");
  }
}
day = today.toLocaleString(locale, { day: "2-digit" });
month = declinationOfMonths(today.toLocaleString(locale, { month: "long" }), locale);
year = today.getFullYear();
//console.log(today);
console.log(day, month, year);

findDayHoliday(findHoliday, holidays);//Спокойствие! Мы старательно ищем для Вас повод.

//просто смотрим склонение падежОФ
for (var i = 0; i <= 11; i++) {
  today = new Date(2018, i, 23);
  //console.log(today.getMonth());
 console.log(declinationOfMonths(today.toLocaleString(locale, { month: "long" }), locale));
}
