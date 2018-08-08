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
        // console.log('addedGood.getId() :', addedGood.getId());
        c.goods[addedGood.getId()] = orderForm.find('.b-order-form__quantity').val();
        // console.log('c.goods :', c.goods);
        //**установка куки
        c.saveCookie();
        // разворачивает корзину
        c.list.stop().slideDown();
        c.showCartInfo();
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
            c.copyData(oCurrentGood, existingGood, ['.b-order-form__quantity']);
        } else {
            var newGood = c.list.find('.b-good:first-child').clone();
            newGood.addClass(goodIdClass);
            // console.log('newGood :', newGood);
            c.copyData(oCurrentGood, newGood, [
                '.b-good__image',
                '.b-good__name',
                '.b-order-form__quantity'
            ]);
            newGood.find('.b-good__delete').click(c.del);
            newGood.find('.b-order-form__plus').click(c.increaseQuantity);
            newGood.find('.b-order-form__minus').click(c.decreaseQuantity);
            newGood.find('.b-order-form').submit(c.add);
            c.list.find('.b-goods').append(newGood);
        }
        return addedGood;
    };
    c.load = function() {
        //считываем товары из куки
        c.goods = $.cookie('cartGoods');
        // console.log('load.c.goods  :', c.goods);
        if (c.goods) {
            $.each(c.goods, function(goodId, quantity) {
                var currentGood = c.findObj('.b-good_id_' + goodId);
                currentGood.find('.b-order-form__quantity').val(quantity);
                c.put(currentGood);
            });
        } else {
            c.goods = {};
        }
        c.showCartInfo();
    };
    c.showHideCart = function() {
        c.list.stop().slideToggle();
    };
    c.changeQuantity = function(oBtn, iShift) {
        // console.log('oBtn :', oBtn);
        // console.log('iShift :', iShift);
        var quantityTextField = $(oBtn).siblings('.b-order-form__quantity'),
            currentQuantity = parseInt(quantityTextField.val()) + iShift;

        // console.log('quantityTextField :', quantityTextField);
        // console.log('currentQuantity 1 :', currentQuantity);
        if (currentQuantity > 0) {
            quantityTextField.val(currentQuantity)
                // console.log('currentQuantity :', currentQuantity);
        } else { alert('товаров не может быть меньше одного!'); }
    };
    c.del = function(event) {
        event.preventDefault();
        // console.log('del :');
        var currentGood = $(this).closest('.b-good');
        var goodDel = new Good(currentGood),
            goodId = goodDel.getId();
        // console.log('goodId :', goodId);
        // Удаляем из списка
        currentGood.remove();
        // удалить отметку в списке
        c.findObj('.b-good_id_' + goodId).removeClass('b-good_in-cart');
        //удалить из куки
        delete c.goods[goodId];
        c.saveCookie();
        c.showCartInfo();
    };
    c.saveCookie = function() {
        $.cookie('cartGoods', c.goods, { 'expires': 7, 'path': '/' });
    };
    c.showCartInfo = function() {
        var quantity = 0
        total = 0;
        $.each(c.goods, function(id, qty) {
            quantity += +qty;
            total += +c.findObj('.b-good_id_' + id + ' .b-good__price').text() * qty;
        });
        c.quantity.text(quantity);
        c.total.text(total);
    };
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