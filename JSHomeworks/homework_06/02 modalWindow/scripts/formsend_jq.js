var form = $("#form-container")
, span = $(".close")[0]
;
// , sbmBtn = $(".submit-button")[0]

// Скрываем /  Показываем окно при нажатии 
// кнопки "Contact"
$('#myBtn').on('click', function() {
    $('.form-container').toggleClass("form_hidden");
});

// Закрываем окно при нажатии "крестика"
function closeForm(){
    $(".form-container").addClass("form_hidden");
}
$(".close").click(closeForm);

// Закрываем окно при нажатии кнопки "отправить"
$('.submit-button').on('click', function() {
    $(".form-container").addClass("form_hidden");
});

// ?????????????????????????????
// window.onclick = function(){
//         form.className += " form_hidden";
// }
