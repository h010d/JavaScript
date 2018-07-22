goods = {
  "Котлы твердотопливные": 2000,
  "Морозильные камеры": 5698,
  "Сушильные автоматы": 2563,
  "Микроволновая печь": 1360,
  "Осушители воздуха": 1500,
  "Стиральная машина": 15000,
  "Электро Плита": 8300,
  "Обогреватель": 2500,
  "Холодильник": 14200,
  "Кондиционер": 8900,
  "Вентилятор": 1200,
  "Компьютер": 15300,
  "Кофемолка": 800,
  "Телевизор": 12350,
  "Ноутбук": 9200,
  "Бойлер": 5300,
  "Утюг": 1560
};

// console.log("Реальная цена");
// for (var key in goods) {
//      goods[key] += goods[key] * 0.4;
//      }
console.log("Реальная цена : ", goods);
console.log("Старая цена : ");
var oldPrice = 5;
var newPrice = 0.3;
for (var key in goods) {
  goods[key] += goods[key] / oldPrice;
}

console.log("Старая цена : ", goods);
for (var key in goods) {
  goods[key] -= goods[key] * newPrice;
}
console.log("Цена с 30% скидкой: ", goods);
goods.Бойлер = 10;
goods["Обогреватель"] = 25;
console.log("Просто вывод с отдельным присвоением: ", goods);
goods["Пылесос"] = 13800;
goods.Мультиварка = 10499;
console.log("Вывод с добавлением товара: ", goods);
//delete goods["Утюг"];
for (key in goods) {
  if ("Утюг" in goods) {
    console.log("Я нашел Утюг");
    delete goods.Утюг;
  }
  console.log(key + " = " + goods[key]);
}
console.log("Вывод с удалением товара: ", goods);
// TODO: Как корретно удалять?
// console.log("Просто вывод через ванильный for : ");
// var key2;
// for (i = 0; i < goods.length; i++) {
//   if ("Утюг" in goods) {
//     console.log("Я нашел Утюг");
//     delete goods.Утюг;
//   }
//   console.log(key2 + " = " + goods[key2]);
// }
 // TODO:  Почему этот for не работает?
// for (i = 0; i < 10; i++) {
//   key2 in goods;
//   if ("Утюг" in goods) {
//     console.log("Я нашел Утюг");
//     delete goods.Утюг;
//   }
//   console.log(key2 + " = " + goods[key2]);
// }
