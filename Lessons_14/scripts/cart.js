function Cart(sSelector, sCartSelector) {
    /* *
     *findObj() для каталога
     *find() для корзины
     */
    var c = this;
    c.init(sSelector);
    c.cart = $(sCartSelector);
    c.list = c.cart.find('.b-minicart__list'); // список корзины
    c.button = c.cart.find('.b-minicart__button'); // кнопка корзины
    c.total = c.cart.find('.b-minicart__total'); //общая
    c.quantity = c.cart.find('.b-minicart__quantity'); //количество
    c.goods = {}; /* id : qty */
    $.cookie.json = true;

    c.add = function(event) {
        event.preventDefault();
        var orderForm = $(this);
        var currentGood = orderForm.closest('.b-good');
        c.showTagName('currentGood', currentGood);
        // console.info('currentGood.attr(\'class\')', currentGood.attr('class'));
        var addedGood = c.put(currentGood); // * добавляем товар в корзину
        // console.log('addedGood :', addedGood);
        // c.goods[addedGood.getId()] = orderForm.find('.b-order-form__quantity').val(); //?
        // console.log('c.goods :', c.goods);
        //**установка куки
        $.cookie('cartGoods', c.goods, { 'expires': 7, 'path': '/' });
        // разворачивает корзину
        c.list.stop().slideDown();

    };
    c.put = function(oCurrentGood) {
        var addedGood = new Good(oCurrentGood);
        // console.log('addedGood :', addedGood);
        oCurrentGood.addClass('b-good_in-cart');
        var goodIdClass = 'b-good_id_' + addedGood.getId();
        // console.log('goodIdClass :', goodIdClass);
        var existingGood = c.list.find('.' + goodIdClass);
        // console.log('existingGood :', existingGood);
        if (existingGood.length) {

        } else {
            var newGood = c.list.find('.b-good:first-child').clone();
            newGood.addClass(goodIdClass);
            // console.log('newGood :', newGood);
            c.copyData(oCurrentGood, newGood, [
                '.b-good__image',
                '.b-good__name',
                '.b-order-form__quantity'
            ]);
            c.list.find('.b-goods').append(newGood);
        }
        return addedGood;
    };
    c.load = function() {
        //считываем товары из куки
        c.goods = $.cookie('cartGoods');
        console.log('load.c.goods  :', c.goods);
        if (c.goods) {
            $.each(c.goods, function(goodId, quantity) {
                var currentGood = c.findObj('.b-good_id_' + goodId);
                currentGood.find('.b-b-order-form__quantity').val(quantity);
                c.put(currentGood);
            });
        }
    };
    c.showHideCart = function() {
        c.list.stop().slideToggle();
    };
    c.changeQuantity = function(oBtn, iShift) {
        console.log('oBtn :', oBtn);
        console.log('iShift :', iShift);
    };
    c.del = function(param) {};
    c.showCartInfo = function() {};
    c.increaseQuantity = function() {
        c.changeQuantity(this, 1);
    };
    c.decreaseQuantity = function() {
        c.changeQuantity(this, -1);
    };
    /* ***************************** */
    c.load();
    c.findObj('.b-order-form').submit(c.add);
    c.button.click(c.showHideCart);
    c.findObj('.b-order-form__plus').click(c.increaseQuantity);
    c.findObj('.b-order-form__minus').click(c.decreaseQuantity);
}
Cart.prototype = new Component();