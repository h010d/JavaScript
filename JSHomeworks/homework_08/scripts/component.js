function Component(){
	// console.log('this: ', this);
	this.elem       = null;
	this.init       = function (sSelector){
		this.elem = $(sSelector);
	};
	this.findObj    = function (sSelector){
		return this.elem.find(sSelector);
	};
	this.getVal     = function (oElem, sSeparator){
		var elemType    = oElem.attr('type'),
		    elemTagName = oElem.prop('tagName').toLowerCase(),
		    separator   = sSeparator || ' ';
		if ('radio' == elemType){
			return oElem.filter(':checked').val();
		} else if ('text' ==
		           elemType ||
		           'select' ==
		           elemTagName ||
		           'textarea' ==
		           elemTagName ||
		           'phone' ==
		           elemTagName){
			return oElem.val();
		} else if ('checkbox' == elemType){
			var checkboxList = '';
			oElem.filter(':checked').each(function (){
				if (checkboxList){
					checkboxList += separator;
				}
				checkboxList += $(this).val();
			});
			return checkboxList;
		} else {
			console.log("Элемент управления с типом ", elemType, " и именем тега ", elemTagName, " не существует");
		}

	};
	this.makeString = function (sObjectName, sObjectPhone, sObjectEmail){
		 showInfoString = 'Здравствуйте ' + sObjectName +
		                     '.' + ' Наш менеджер свяжется с вами в ближайшее время по тел: ' + sObjectPhone +
		                     ' который вы указали в контактных данных. Также на ваш email: ' +
		                     sObjectEmail + ' отправлена копия введенных данных с уникальным ID заказа.' +
		                     '\n' + ' Благодарим вас за то что пользуетесь нашими услугами!';
		return showInfoString;
	};

}
