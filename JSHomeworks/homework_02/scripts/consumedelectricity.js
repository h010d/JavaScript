//Программа рассчитывает стоимость потребленной электрики
// при двухзонном тарифе(день/ночь) с тремя порогами 100 : 600 : 600 >
//communal payments
// tariff
//consumed electricity
// electric power
// Діючий тариф: з 21.04.2017 «місто+плита»
// 0.9 грн до 100 кВтг;
//1.68 грн понад 100 кВтг.
//day  день 100%
// hight ночь 50%
//stepFirst < 100 (0.9 uah)
//stepSecond 100 - 600 (1.68 uah)
//stepThird > 600 (2.15 uah)
//currentMeterNight
//currentMeterDay      "Day": "001476"
//             , "Night": "12061"
//previusMeterNight
//previusMeterDay x=35682*5%/100% 136 110
const TARIFF_FIRST_STEP = 0.9; // тариф до 100 кВтг
const TARIFF_SECOND_STEP = 1.68; // тариф свыше 100 кВтг
const TARIFF_THIRD_STEP = 2.15; // тариф свыше 600 кВтг
var stepsFirst = 100
  , stepSecond = 500
  , currentMeter = {
    "Day": "001376"
    , "Night": "12010"
  }
  , previousMeter = {
    "Day": "001340"
    , "Night": "011951"
  }
  , consumedElectricityTotal = 0
  , consumedElectricityDay = 0
  , consumedElectricityNight = 0
  , percentageNight = 0
  , percentageDay = 0
  , toPayStepFirst = 0
  , toPayStepSecond = 0
  , toPayStepThird = 0
  , toPayTotal = 0
  , uah = "грн."
  ;

// Считаем общую электрику потребленную днем
consumedElectricityDay = currentMeter["Day"] - previousMeter["Day"];
// Считаем общую электрику потребленную ночью
consumedElectricityNight = currentMeter["Night"] - previousMeter["Night"];
// Считаем электрику общую
consumedElectricityTotal = consumedElectricityDay + consumedElectricityNight;
console.log("электрика общая: ", consumedElectricityTotal);
// Считаем процент ночного потребления
percentageNight = Math.round(consumedElectricityNight * 100 / consumedElectricityTotal);
// Считаем процент дневного потребления
percentageDay = Math.round(consumedElectricityDay * 100 / consumedElectricityTotal);
console.log("процент ночного потребления: ", percentageNight);
console.log("процент дневного потребления: ", percentageDay);

if (consumedElectricityTotal < stepsFirst) {
  consumedElectricityDay = consumedElectricityTotal / 100 * percentageDay;
  consumedElectricityNight = consumedElectricityTotal / 100 * percentageNight;
  // Сумма к оплате за порог ниже 100 кВтг
  toPayTotal += toPayStepFirst = (consumedElectricityNight * (TARIFF_FIRST_STEP * 0.5)) + (consumedElectricityDay * TARIFF_FIRST_STEP);

  console.log("Сумма к оплате за порог потребления ниже 100 кВтг: ", toPayStepFirst.toFixed(2), uah);

} else if (consumedElectricityTotal > stepsFirst) {
  // Считаем сумму за порог до 100 кВтг
  toPayTotal += toPayStepFirst = (percentageNight * (TARIFF_FIRST_STEP * 0.5)) + (percentageDay * TARIFF_FIRST_STEP);
  console.log("Сумма за порог до 100 кВтг: ", toPayStepFirst, uah);
}

// Находим количество кВтг свыше 100 кВтг
consumedElectricityTotal -= stepsFirst;
console.log("количество кВтг свыше 100 кВтг: ", consumedElectricityTotal);
if (consumedElectricityTotal > 0 && consumedElectricityTotal > stepSecond) {

  consumedElectricityDay = stepSecond / 100 * percentageDay;
  consumedElectricityNight = stepSecond / 100 * percentageNight;
  // Сумма к оплате за порог выше 100 кВтг
  toPayStepSecond = (consumedElectricityNight * (TARIFF_SECOND_STEP * 0.5)) + (consumedElectricityDay * TARIFF_SECOND_STEP);
  console.log("Сумма к оплате за порог cвыше 100 кВтг и до 600 кВтг: ", toPayStepSecond.toFixed(2), uah);

} else if (consumedElectricityTotal > 0 && consumedElectricityTotal < stepSecond) {
  consumedElectricityDay = consumedElectricityTotal / 100 * percentageDay;
  consumedElectricityNight = consumedElectricityTotal / 100 * percentageNight;
  // Сумма к оплате за порог выше 100 кВтг
  toPayTotal += toPayStepSecond = (consumedElectricityNight * (TARIFF_SECOND_STEP * 0.5)) + (consumedElectricityDay * TARIFF_SECOND_STEP);
  console.log("Сумма к оплате за порог cвыше 100 кВтг и до 600 кВтг: ", toPayStepSecond.toFixed(2), uah);
}
consumedElectricityTotal -= stepSecond; // уменьшаем общую сумму на количество 500
if (consumedElectricityTotal > 0) {
  consumedElectricityDay = consumedElectricityTotal / 100 * percentageDay;
  consumedElectricityNight = consumedElectricityTotal / 100 * percentageNight;
  // Сумма к оплате за порог выше 100 кВтг
  toPayTotal += toPayStepThird = (consumedElectricityNight * (TARIFF_THIRD_STEP * 0.5)) + (consumedElectricityDay * TARIFF_THIRD_STEP);
  console.log("Сумма к оплате за порог cвыше 600 кВтг: ", toPayStepThird.toFixed(2), uah);

  if (toPayStepThird > 10000) {
    console.log("Мы рады что Вы пользуетесь нашими услугами! :) ");
  }

}
console.log("Общая сумма к оплате: ", toPayTotal.toFixed(2), uah);
   if (toPayTotal < 60) {
    console.log("Ой вей! Шоб Вы были здоровы!\n Какой нам навар с этого 'босяка'?! o_O ");
  }
