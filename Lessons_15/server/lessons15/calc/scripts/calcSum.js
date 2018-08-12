function AjaxSample(sSelector) {
    var aj = this;
    aj.init(sSelector);
    aj.a = aj.findObj('.b-calc__a');
    aj.b = aj.findObj('.b-calc__b');
    aj.result = aj.findObj('.b-calc__result');
    aj.calcSum = function() {
        event.preventDefault();
        //Возвращает объект XMLHttpRequest
        $.ajax({
            //текущая страница URL к запросу
            'url': 'calc.php', // 'url': 'ajaxcalc.php',
            //метод передачи данных
            'method': 'POST',
            //тип данных возращаемых в callback функцию
            'dataType': 'json',
            // время таймаут в милисикундах
            'timeout': 1000,
            'data': {
                'a': aj.a.val(),
                'b': aj.b.val()
            },
            'success': function(jsonServerResponse) {
                console.info('==========');
                // console.info(jsonServerResponse);
                aj.result.html(jsonServerResponse.result);
            },
            //если произошла ошибка
            'error': function(oAjax) {
                console.log('oAjax :', oAjax);
                if (oAjax.statusText == 'timeout') {
                    console.info('timeout');
                } else if (oAjax.status == 403 /* (401 || 403 || 404 || 500 || 503) */ ) {
                    console.info('403');
                }
            },
            'complete': function(oAjax) {
                console.log('oAjax commplete :', oAjax);
                var jsonServerResponse = oAjax.responseJSON;
                console.log('jsonServerResponse commplete:', jsonServerResponse);
                if (oAjax.status == 200) {
                    console.info('oAjax.status:', oAjax.status);
                    if (jsonServerResponse != undefined) {
                        aj.result.html(jsonServerResponse.result);
                    } else {
                        alert('response that cannot be parsed as JSON:\n' +
                            oAjax.responseTxt);
                    }
                } else if (oAjax.status == 404) {
                    alert('AJAX backend is not found');
                } else if (oAjax.statusText == 'timeout') {
                    alert('AJAX request has timed out');
                } else {
                    alert('Totally unpredicted error');
                }
            }
        });
        console.info('shuito7lrl');
    };
    aj.elem.submit(aj.calcSum);
}
AjaxSample.prototype = new Component();