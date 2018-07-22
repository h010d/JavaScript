
//2. Написать рекурсивную функцию для суммы чисел от 0 до 100
function factorial(N){
 return N<=1 ? 1 : N+factorial(--N);
}
console.log(factorial(100))


/*function printRange(iNumber){
   if (iNumber){
	    console.log(iNumber);
	    printRange(-- iNumber);  
    }
}
  printRange(100);
  */