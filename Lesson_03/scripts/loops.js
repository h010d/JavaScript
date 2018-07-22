
var goods = {
  "платье": 1200
  , "юбка": 800
  , "брюки": 900
  , "рубашка": 700
}
  , uah = "грн."
  ,clothesList = ""
  ;
// для получения значения - имя_массива[ключ]
for (var title in goods) {
  if (goods[title] >= 900) {
    console.log(title, "-", goods[title], uah);
    clothesList +=" \n " + title + " - " + goods[title] + " " + uah;
  }

}
console.log(clothesList);
var students = {
  "Петров": 10
  , "Иванов": 6
  , "Сидоров": 9
  , "Васечкин": 7
}
  ;

// для получения значения - имя_массива[ключ]
for (var eval in students) {
    console.log(eval, "-", students[eval], "баллов");
}

var num = 5;
while(num > -1) {
console.log(num--);
}