function Form(sSelector) {
    var f = this;
    /* *************свойства******************** */
    /*  f.form = $(sSelector); */
    f.init(sSelector);
    f.name = f.findObj('.b-form__name');
    f.surname = f.findObj('.b-form__surname');
    f.seasons = f.findObj('.b-form__season');
    f.fruit = f.findObj('.b-form__fruit');
    f.animal = f.findObj('.b-form__animals');
    f.review = f.findObj('.b-form__review');
    f.btn = f.findObj('.b-form__ok-button');
    f.langLinks = f.findObj('.b-langs__lang ');
    /* *************методы******************** */
    f.showInfo = function(event) {
        event.preventDefault();
        console.log(f.seasons);
        var seasonsList = '';
        f.seasons.filter(':checked').each(function() {
            seasonsList += $(this).val() + ' ';
        });
        console.log(
            f.name.val() +
            '\n' +
            f.surname.val() +
            '\n' +
            seasonsList +
            '\n' +
            f.fruit.filter(':checked').val() +
            '\n' +
            f.animal.val() +
            '\n' +
            f.review.val()
        );

        console.log(

            f.getVal(f.name) +
            '\n' +
            f.getVal(f.surname) +
            '\n' +
            f.getVal(f.seasons, ',') +
            '\n' +
            f.getVal(f.fruit) +
            '\n' +
            f.getVal(f.animal) +
            '\n' +
            f.getVal(f.review) +
            '\n*******************' +
            f.elem
        );
        var goods = {
            "notebook Apple": 27000,
            "smartphone LG": 5000,
            "smartphone HP": 6000
        };
        $.each(goods, function(title, price) {
            console.log(title, ' -- ', price, 'uah');
        });
        f.getVal(f.name);
    };
    f.translate = function(event) {
        event.preventDefault();
        var currentLang = $(this).data('lang'),
            lang = Settings.get('langs');
        // console.log(currentLang);
        //console.log(Settings.data.langs);
        $.each(lang, function(className, textData) {
            f.findObj('.' + className).text(textData[currentLang]);
        });
    };
    /* *************события******************** */
    f.btn.click(f.showInfo);
    f.langLinks.click(f.translate);

}

/* ******************* наследование ******************* */
Form.prototype = new Component();