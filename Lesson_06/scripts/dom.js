function showMessage() {
	console.log('my meccage');
	
}

// Ставим объект в соответсвие html-элементу с id msgBtn1
var msgBtn1  = document.getElementById('msgBtn1')
	, listLi = document.getElementsByTagName('li');
console.log(msgBtn1);
console.log(msgBtn1.value, msgBtn1.type);
console.log(listLi);
//на событие клик Назначаем функцию showMeccage
msgBtn1.onclick = showMessage;
for (var i in listLi) {
	//На событие наведение мышки назначаем фунцию showMeccage
	listLi[i].onmouseover = showMessage;
}
console.log('############################################');

function translit() {
	var message      = document.getElementById('msg')
		, newMessage = document.getElementById('newMsg')
		, symbols    = {'н': 'n', 'а': 'a', 'ч': 'ch', 'л': 'l', 'о': 'o', 'е': 'e', 'т': 't'}
	;
	newMessage.value = '';
	for (var i = 0; i < message.value.length; i++) {
		newMessage.value += symbols[message.value[i]] ? symbols[message.value[i]] : message.value[i];
		
		/*
		 if(symbols[message[i]]){
		  newMessage += symbols[message[i]];
		 }
		 else{
		  newMessage += message[i];
		 }
		*/
	}
	//console.log(newMessage);
	
}

var btn     = document.getElementById('btn');
btn.onclick = translit;
