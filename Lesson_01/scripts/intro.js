// Секция описания переменной
var subject = "Программирование для фронтэнд",
  length = 3,
  langs = ["javascript", "C#", "PHP"],
  students = {
    Иван: 4,
    Леша: 5,
    Ира: 3
  };

//Вывод на консоль
console.log("курс:", subject);
console.log("Длительность курса:", length, "месяца");
console.log("Языки программирования", langs);
console.log(langs[0]);
length = 4;
console.log("Длительность курса:", length, "месяца");
langs[2] = "Java";
console.log("Языки программирования", langs);
console.log(students);
console.log("Оценка Ивана", students["Иван"]);
students["Иван"] = 5;
console.log("Новая оценка Ивана", students["Иван"]);

// добавление нового элемента
langs[5] = "Pyton";
console.log("Языки программирования", langs);
students["Катя"] = 5;
console.log("Студенты", students);
colors = ["Синий", "зеленый", "красный", "желтый"];
console.log("Цвета", colors);
colors[1] = "голубой";
console.log("Цвета", colors[1]);
colors[4] = "белый";
console.log("Цвета", colors);
console.log("colors.length: ", colors.length);
