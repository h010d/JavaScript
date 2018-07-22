
var form = document.getElementById("form-container")
, btn = document.getElementById("myBtn")
, span = document.getElementsByClassName("close")[0]
, sbmBtn = document.getElementsByClassName("submit-button")[0]
;
btn.onclick = function myFuntion(){
    var x = document.getElementById("form-container");
    if(x.className === "form-container"){
        // Скрываем окно при нажатии кнопки "Contact"
        x.className += " form_hidden";
    }else{
        // Пщказываем окно при нажатии кнопки "Contact"
        x.className = "form-container";
    }
}
// Закрываем окно при нажатии "крестика"
span.onclick = function(){
    form.className += " form_hidden";
}
// Закрываем окно при нажатии кнопки "отправить"
sbmBtn.onclick = function(){
    form.className += " form_hidden";
}
// ????????????????????????????
// window.onclick = function(){
//         form.className += " form_hidden";
// }
