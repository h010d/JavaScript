var arr =  new Array()
, arrLenght = 100
, i = 0
, str = ""
, max = 100
, min = -100
, ma = Math.round(Math.random() * (max - min)) + min
, arrSum = 0
;

for(; i < arrLenght; i++){
arr[i] = Math.round(Math.random() * (max - min)) + min;
}

for(i = 0; i < arrLenght; i++){
str += arr[i] + " ";
}
console.log("Исходный массив: \n", str);
str = "";
for(i = 0; i < arrLenght; i++){
  if(arr[i] >= 0){
    str += arr[i] + " ";
  }
}
console.log("Положительные числа: \n", str);
str = "";
for(i = 0; i < arrLenght; i+=2){
    str += arr[i] + " ";

}
console.log("Числа через одно: \n", str);
str = "";

for(i = 0; i < arrLenght; i++){
  if(arr[i] > -1 && (!(arr[i] % 2))){
    str += arr[i] + " ";
}
}
console.log("Чётные числа в диапазоне от -1 до 10: \n", str);
str = "";

for(i = 0; i < arrLenght; i++){

 arrSum += arr[i];

}
console.log("Сумма всех чисел массива с учетом знака минус: \n",  arrSum);
str = "";

var arrSumNegative = 0;
arrSum = 0;
for(i = 0; i < arrLenght; i++){
arr[i] > 0 ? arrSum += arr[i] : arrSumNegative += arr[i];
}
console.log("Сумма всех чисел массива отдельно положительных и отрицательных: \n",  arrSum, arrSumNegative);
str = "";

for(i = 0, arrSum = arr[0], arrSumNegative = arr[0]; i < arrLenght; i++){
arrSum < arr[i]  ? arrSum = arr[i] : false;
arrSumNegative > arr[i]  ? arrSumNegative = arr[i] : false;
}
console.log("Максимальные числа в массиве: \n",  arrSum, arrSumNegative);
str = "";

for(i = 0, arrSum = 0; i < arrLenght; i += 2){
  if(arr[i +1]){
    arrSum = arr[i];
 arr[i] = arr[i +1];
 arr[i + 1] = arrSum;

  }
}
for(i = 0; i < arrLenght; i++){
str += arr[i] + " ";
}
console.log("Попарная перестановка элементов массива: \n", str);
str = "";

for(i = 0, arrSum = 0; i < arrLenght; i += 2){
  if(arr[i +1]){
 arr[i] += arr[i +1];
 arr[i + 1] = arr[i] - arr[i + 1];
 arr[i] = arr[i] - arr[i +1];

  }
}
for(i = 0; i < arrLenght; i++){
str += arr[i] + " ";
}
console.log("Попарная перестановка элементов  массива, без дополнительной переменной: \n", str);
str = "";

