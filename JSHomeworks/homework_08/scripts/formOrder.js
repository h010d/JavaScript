function FormOrder(sSelector){

	var f = this;
	/* ****************свойства******************* */
	
	f.init(sSelector);
	f.name = f.findObj('.form-field_name');
	f.surname = f.findObj('.form-field_surname');
	f.phone = f.findObj('.form-field_phone');
	f.city = f.findObj('.form-field_city');
	f.address = f.findObj('.form-field_address');
	f.email = f.findObj('.form-field_email');
	// f.textarea_box             = f.findObj('.form-field_textarea_box');
	f.delivery = f.findObj('.delivery');
	f.formSubscribe = f.findObj('.form__subscribe');
	f.btn = f.findObj('.submit-button');
	f.displayInformer = f.findObj('.displayInformer');
	f.displayInformer__inner_text = f.findObj('.displayInformer__inner_text');
	f.comment_message = f.findObj('.comment_message');
	f.close = f.findObj('.close');
	/* ****************методы******************* */
	f.showHideObj = function (event){
		event.preventDefault();
		$(f.displayInformer).toggleClass('displayInformer-show');
		$(f.displayInformer__inner_text).text(f.makeString(f.getVal(f.name), f.getVal(f.phone), f.getVal(f.email)));
		$(f.close).show();
		// console.log(
		//     f.getVal(f.name) +
		//     '\n' +
		//     f.getVal(f.surname) +
		//     '\n' +
		//     f.getVal(f.phone) +
		//     '\n' +
		//     f.getVal(f.city) +
		//     '\n' +
		//     f.getVal(f.address) +
		//     '\n' +
		//     f.getVal(f.email) +
		//     '\n' +
		//     f.getVal(f.delivery) +
		//     '\n' +
		//     f.getVal(f.formSubscribe, ', ') +
		//     '\n' +
		//     f.getVal(f.comment_message)
		// );
	};
	f.hideShowFormInfo = function (event){
		event.preventDefault();
		$(f.displayInformer).removeClass('displayInformer-show');
		$(f.close).removeClass('displayInformer-show');
		$(f.displayInformer__inner_text).text('');
	};
	f.showMyText = function (){
		// console.log('hi ih hi');
		                     f.name.val('hi hi hi') ;
		                     f.name.css({'background-color':'white'})
	}
	f.name.blur(f.showMyText);
	f.btn.click(f.showHideObj);
	f.displayInformer.click(f.hideShowFormInfo);
}

FormOrder.prototype = new Component();
