var dotAdded      = !1, //false
    checkDivision = !1,
    dividingValue = '',
    firstStart    = !1,
    showClc       = !1;

function Calculate(sSelector){
	var operators = ['+', '-', '*', '/', '%']; //массив с операторами для удобного перебора при поиске
	this.btn      = $(sSelector);
	this.btnItems = $(sSelector).children('.btn');
	// miniBtn = document.querySelector('.button_open');
	var save      = document.querySelector('.save'), //Такая форма записи возвращает чистое поле
	                                                 // //$(sSelector).children('.save')
	    inValue   = save.innerHTML,
	    general;
	if (undefined === this.value){
		// Чистим поле от "лишних" значений
		this.value = '';
	}
	if ('/' == this.value || checkDivision){
		//Проверяем деление на 0
		var uncheck = !1;
		if (checkDivision){
			dividingValue = inValue.substr(inValue.lastIndexOf('/') + 1);
			if (0 == (dividingValue *= 1)){
				inValue        = inValue.replace(/(\/[0]+)/g, '\/');
				save.innerHTML = inValue;
			} else {
				checkDivision = !1;
				uncheck       = !0;
			}
		}
		if (!uncheck){
			checkDivision = !0;
		}
	}
	if ('C' == this.value){
		save.innerHTML = '';
		dotAdded       = !1;
	} else if ('del' == this.value){
		save.innerHTML = delLastChar(save.innerHTML);
	} else if ('=' == this.value){
		var equation = inValue;
		 lastChar = equation[equation.length - 1];
		if (operators.indexOf(lastChar) > -1 || '.' == lastChar){
			equation = equation.replace(/.$/, '');
		}
		if (equation){
			general = eval(equation);
			// Если нужна точность вычислений, то нужно закоментировать блок ниже
			if (general.toString().indexOf('.') != -1){
				general = general.toFixed(2);
			}
			save.innerHTML = general;
		}
		dotAdded = checkDot(save.innerHTML);
	} else if (operators.indexOf(this.value) > -1){
		if (checkDivision){

		}
		 lastChar = inValue[inValue.length - 1];

		if ('' != inValue && operators.indexOf(lastChar) == -1){
			save.innerHTML += this.value;
		} else if ('' == inValue  && '-' == this.value){
			save.innerHTML += this.value;
		}
		if (operators.indexOf(lastChar) > -1 &&  1 < inValue.length){
			save.innerHTML = inValue.replace(/.$/, this.value);
		}
		dotAdded = !1;
	} else if ('.' == this.value){
		if (!dotAdded){
			save.innerHTML += this.value;
			dotAdded = !0;
		}
	} else {
		// проверяем длину строки чтобы не настягивалась форма
		if ( 10 > save.innerHTML.length){
			save.innerHTML += this.value;
		}

	}

	// проверка на  десятичную точку
	function checkDot(str){
		return (str.indexOf('.') != -1);
	}

	//Удаление последнего символа
	function delLastChar(str){
		if ('0' == str) return;
		var strCurnt = str;
		strCurnt     = strCurnt.substring(0, strCurnt.length - 1);
		dotAdded     = checkDot(strCurnt);
		return strCurnt;
	}


}

/*
Calculator
var  = this;
свойства
c.btn
...

методы
	c.calculate
		var operators = ['+', '-', '*', '/', '%'];
		
	c.checkDot
	c.delLastChar
	
c.btn.click(calculate)	
*/


//TODO: можно еще дописать ввод с клавиатуры
function ShowCalc(sSelector){
	var s = this;

	s.page = $(sSelector);
	s.form = s.page.find(".wrapper");
	s.btn  = s.page.find('#miniBtn');

	var calc = new Calculate('#calculator');

	s.show = function (event){
		event.preventDefault();
		s.form.toggleClass("hidden_calc");
	}

	/* s.methodName = function(){} */
}

//$(".btn").click(Calculate);
