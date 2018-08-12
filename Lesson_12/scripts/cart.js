function Cart(sSelector, sCartSelector) {
    /* *
     *findObj() для каталога
     *find() для корзины
     */
    var c = this;
    c.init(sSelector);
    c.cart = $(sCartSelector);
    c.list = find('.b-minicart__list'); // список корзины
    c.button = find('.b-minicart__button'); // кнопка корзины
    c.total = find('.b-minicart__total'); //общая
    c.quantity = find('.b-minicart__quantity'); //количество
    c.add = function(event) {
        event.preventDefault();
        console.info('hi');
    };
    c.put = function(oCurrentGood) {};
    c.load = function() {};
    c.showHideCart = function() {};
    c.changeQuantity = function() {};
    c.del = function(param) {};
    c.showCartInfo = function() {};
    /* ***************************** */
    c.findObj('.b-order-form').submit(c.add);
}
Cart.prototype = new Component();