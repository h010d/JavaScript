function Order(sSelector) {
var o = this;

o.init(sSelector);
o.name		= o.find('.b-order__textfield_name');
o.email		= o.find('.b-order__textfield_email');
o.tel		= o.find('.b-order__textfield_tel');
o.goods		= o.find('.b-order__textfield_goods');
o.message	= o.find('.b-order__message');
o.btn		= o.find('.b-order__btn');

o.cartOrder = function(event){
	event.preventDefault();
	console.log(o.name.val(), o.email.val(), o.tel.val());

	$.ajax({
		'url' 		: 'order.php'
		,'method'	: 'POST'
		,'dataType'	: 'json'
		,'timeout'	: 1000
		,'data'		: {
			 'name'	: o.name.val()	 
			,'email': o.email.val()
			,'tel'	: o.tel.val()
			,'goods': o.goods.val()
			}
		,'success'	: function(serverResponse){
			}
		,'error'	: function(oAjax){
		}
		,'complete'	: function(oAjax){
			var serverResponse = oAjax.responseJSON;
			console.log(serverResponse)
			if (oAjax.status == 200){	
				if (serverResponse!=undefined){
					o.message.html(serverResponse.message);
					}
				else {
					alert('The server has returned an incorrect '
						+ 'response that cannot be parsed as JSON:\n' 
						+ oAjax.responseText);
					}
				}
			else{
				alert('Totally unpredicted error.');
				}
			}
		});
	}

o.elem.bind('submit', o.cartOrder);
}


Order.prototype = new Component();