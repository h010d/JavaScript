function Calculator(sSelector){
	//console.log(this);
	var c = this;

	/* *************** свойства *************** */

	c.calculator = $(sSelector);
	console.log("1", c.calculator);
	c.num1 = c.calculator.children("#num1");
	console.log("2", c.num1);
	c.operators = c.calculator.children("#operators");
	console.log("3", c.operators);
	c.operator = c.calculator.find(".operator");
	console.log("4", c.operator);
	c.num2 = c.calculator.children("#num2");
	console.log("5", c.num2);
	c.result = c.calculator.children("#result");
	console.log("6", c.result);
	c.button = c.calculator.children("#calc_btn");
	console.log("7", c.button);

	/* *************** методы *************** */

	c.calculate = function(){
		var num1 	= $(".num1")
		,num2 		= $(".num2")
		,operators 	= $(".operators")
		,result 	= $(".result")
		;
		num2.css("box-shadow", "none");	
	
		if(operators.val() == "+"){
			result.val((+ num1.val()) + (+ num2.val()));
		}
		else if(operators.val() == "-"){
			result.val((+ num1.val()) - (+ num2.val()));
		}
		else if(operators.val() == "*"){
			result.val((+ num1.val()) * (+ num2.val()));
		}
		else if(operators.val() == "/"){
			if(+ num2.val()){
				result.val((+ num1.val()) / (+ num2.val()));
			}
			else{
				result.val("");
				num2.css("box-shadow", "0 0 3px #ff0000");
			}
		}
		else if(operators.val() == "^"){
			result.val(Math.pow((+ num1.val()), (+ num2.val())));
		}
		else if(operators.val() == "%"){
   			result.val((+ num1.val()) / (+ num2.val()) * 100);
   		}

		console.log("Правильно!!!");
	}

	/* *************** события *************** */
	c.button.click(c.calculate);
}

