var m = 0
, n = 6
 ,n2 = 2
, randNum = Math.floor(Math.random() * (n - m + 1)) + m
, randNumEvent = 0
, str = ""
, price = 567.8976
, arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
, strEvent = {
  "Monday": ["ролики","коньки","лыжи на асфальте"]
  ,"Tuesday":["футбол", "плавание", "баскетбол"]
  , "Wednesday": ["бег", "прыжки", "штанга"]
  , "Thursday":["регби", "хокей", "подтягивание"]
  , "Friday":["телевизор", "книга", "игра"]
  , "Saturday":["поло", "театр", "концерт"]
  , "Sunday":["прогулка", "экскурсия","прыжки"]
}
;
console.log(price.toFixed(2), "грн.");
// for(var i = 0; i < 100; i++ ){
randNum = Math.floor(Math.random() * (n - m + 1)) + m;
// }
randNumEvent = Math.floor(Math.random() * (n2 - m + 1)) + m;
console.log(arr[randNum], strEvent[arr[randNum]][randNumEvent]);