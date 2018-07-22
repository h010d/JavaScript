// 4. Написать функцию расчета площади треугольника.
var a = 4
, b = 5
;
  function areaOfATriangle(hight , sideLength){
      //S= 0.5 * a *b
      const VAL = 0.5;
    var S = 0;
    return S =  VAL * hight * sideLength;
  }
  console.log("площадь треугольника: ",areaOfATriangle(a,b));
  // 5*. Написать универсальную функцию для расчета площади прямоугольника, треугольника и многоугольника.
  // если вычисляем круг то hight = 0, sideLength = радиус круга, amountSides не передаем
  // если вычисляем треугольник amountSides = 3
  // прямоугольник amountSides = 4
  // пятиугольник amountSides = 5 и т.д
  var c = 6;
      function areaOfShapes(hight , sideLength, amountSides){
         //console.log("test!");
         var sMsgError = "Значение в поле amount не может быть меньше 3!\nВы ввели: "
         ,sMsgErrorBegin = "Значение в поле "
         ,sMsgErrorEnd = " не может быть меньше 0!\nВы ввели: "
         , sMsgArea = "Площадь "
         , sMsgCircle = "круга со сторонами: "
         , sMsgShape = "фигуры со сторонами: "
         , sMsgNaN = "в одно из полей передано значение NaN"
         ;
         switch(true){
           case (hight < 0):
           return sMsgErrorBegin += "hight" + sMsgErrorEnd + hight ;
           case (sideLength < 0):
          return sMsgErrorBegin += "sideLength" + sMsgErrorEnd + sideLength ;
          case (amountSides < 0):
          return sMsgErrorBegin += "amountSides" + sMsgErrorEnd + amountSides ;
           case (!(hight) || !(sideLength) || !(amountSides)):
           if(hight == 0){
             break;
           }
          return sMsgNaN;
         }
      if(hight == 0){
        console.log(sMsgArea, sMsgCircle, "\"PI\"", "x", sideLength, ":");
        return  Math.PI * sideLength;
      }
      if(amountSides < 3){
        sMsgError += amountSides;
        return sMsgError;
      }else{
     var Sn = 0;
      if(amountSides < 5){
        // делаем поправку на треугольник и прямоугольник
        amountSides -=2;
      }
      console.log(sMsgArea, sMsgShape,"(", hight, "x", sideLength,")", "/2", "x", amountSides, ":");
    return Sn = amountSides * areaOfATriangle(hight, sideLength);
      }
  }
console.log(areaOfShapes(a, b, c));