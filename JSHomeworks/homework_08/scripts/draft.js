function FormOrder(sSelector) {

    var f = this;
    /* ****************свойства******************* */
    f.init(sSelector);
    f.name = f.findObj('.form-field_name');
    f.surname = f.findObj('.form-field_surname');
    f.phone = f.findObj('.form-field_phone');
    f.city = f.findObj('.form-field_city');
    f.address = f.findObj('.form-field_address');
    f.email = f.findObj('.form-field_email');
    // f.textarea_box = f.findObj('.form-field_textarea_box');
    f.delivery = f.findObj('.delivery');
    f.btn = f.findObj('.submit-button');
    f.displayInformer = f.findObj('.displayInformer');
    f.displayInformer__inner_text = f.findObj('.displayInformer__inner_text');
    f.comment_message = f.findObj('.comment_message');
    f.close = f.findObj('.close');

    // console.log('showInfoString', showInfoString);

    /* ****************методы******************* */
    f.showFormInfo = function(event) {
        event.preventDefault();
        // console.log('f.name', f.name);
        // console.log('f.surname', f.surname);
        // console.log('f.phone', f.phone);
        // console.log('f.city', f.city);
        // console.log('f.address', f.address);
        // console.log('f.email', f.email);
        // console.log('hi f.showFormInfo');
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
        //     f.getVal(f.comment_message)
        //     // f.getVal(f.displayInformer)
        // );

        $(f.displayInformer__inner_text).text(f.makeString(f.getVal(f.name), f.getVal(f.phone), f.getVal(f.email)));
        $(f.displayInformer).toggleClass('displayInformer-show');
        $(f.close).show();
    };
    f.hideShowFormInfo = function(event) {
        event.preventDefault();
        $(f.displayInformer).removeClass('displayInformer-show');
        $(f.close).removeClass('displayInformer-show');
        $(f.displayInformer__inner_text).text('');
    };
    f.btn.click(f.showFormInfo);
    f.displayInformer.click(f.hideShowFormInfo);
}
FormOrder.prototype = new Component();