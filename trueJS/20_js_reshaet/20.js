// Мяу! Меня утомляют диета и тренировки, поэтому я хочу узнать, сколько ещё дней осталось заниматься, чтобы добиться нужного веса к мероприятию.

// Входные данные: вес в начале и вес в конце.

// Логика работы: если я тренируюсь и сижу на диете, то теряю 5% своей массы в день (на сухом корме не особо пожируешь, а тренировки суровые).

// Просто посчитай, сколько дней понадобится провести в таком режиме и запиши количество в переменную days.

var initialWeight = 60000; // Исходный вес в граммах
var targetWeight = 50000; // Желанный вес в граммах

for (let i=1; initialWeight>=targetWeight; i++){
	initialWeight = initialWeight - initialWeight*0.05;
	console.log(i+' --- '+ initialWeight);
}