function Good(oGoodElement) {
    var g = this;
    g.elem = oGoodElement;
    g.getId = function() {
        return g.elem.attr('class').match(/id_(\d{1,11})/)[1];
    };
}