var orderSum = 499
, discount = 0
, economy = 0
,vipClient = true
,promoCode = true
,msg = ""
,bonusCard = 1500
,bonusesInUah = 0
,deliverySum = orderSum >= 500 ? 0 : 40 // терн оператор
;



if(orderSum >= 500){
  console.log("бесплатная доставка");
}else{
  console.log("доставка - 40 грн");
}

if(orderSum >= 700 && orderSum < 2000){
  discount = 3;
}
else if(orderSum >= 2000 && orderSum < 5000){
  discount = 5;
}
else if(orderSum > 5000){
  discount = 7;
  if(vipClient){
    discount = 10;
msg = "Специальная скидка для вип-клиента!";
  }
}
if(promoCode){
  discount += 5;
}

console.log("Сумма заказа:", orderSum, "грн");
console.log("Ваша скидка:", discount, "%", msg);
economy = orderSum * discount / 100;
console.log("Вы экономите :", economy, "грн");
orderSum -= discount;
console.log("Сумма заказа со скидкой :", orderSum, "грн");

console.log("На вашей бонусной карте :", bonusCard, "бонусов");
  if(bonusCard){
    bonusesInUah = bonusCard / 100;
    console.log(" Бонусы в грн :", bonusesInUah);
    orderSum -= bonusesInUah;
    console.log("Сумма заказа после снятия бонусов :", orderSum, "грн");
    bonusCard = 0;
}
orderSum += deliverySum;
console.log("Сумма к оплате с доставкой :", orderSum, "грн");



var orderSum = 9000
, discount = 0
,intention = true
,friend = 5
;
if(orderSum && intention){
  discount = 10;
  if(friend){
    discount += 5;
  }
  orderSum -= orderSum * discount / 100;
console.log("Ваша сумма: ", orderSum, "грн");
}


/*
сумма 9000 
намерение true
discount = 0
9000
10% - 8100
друг +=5%
*/