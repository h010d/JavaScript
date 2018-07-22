function Gallery(sSelector) {
    // ***************** свойства *******************//
    var g = this;
    g.init(sSelector);
    g.pictures = g.findObj('.picture');
    g.picturesImage = g.findObj('.picture__image');
    g.this = g.findObj('.picture__image-show');
    g.arrowPrev = g.findObj('.preview__arrow_prev');
    g.arrowNext = g.findObj('.preview__arrow_next');
    g.circles = g.findObj('.circles');
    g.refer = g.findObj('.ref');
    g.li = g.findObj('li');
    g.current = 0;
    g.max = g.pictures.length;
    // назначаем какую картинку показываем при старте
    g.picturesImage.eq(0).addClass('picture__image-show');
    g.circles.eq(0).addClass('circles-light');

    // ******************* методы  *******************//

    g.showCurrent = function() {
        g.picturesImage.eq(g.current).addClass('picture__image-show');
        g.circles.eq(g.current).addClass('circles-light');
    };

    g.showImage = function(iShift) {

        g.current += iShift;
        if (g.current >= g.max) {
            g.current = 0;
        } else if (g.current < 0) {
            g.current = g.max - 1;
        }
        if (g.circles.hasClass('circles-light')) {
            g.circles.removeClass('circles-light');
        }
        g.showCurrent();
    };
    g.display = function(oPicture) {


    };
    g.showPrevious = function() {
        g.closeCurrent(g.picturesImage);
        g.showImage(-1);

    };
    g.showNext = function() {
        g.closeCurrent(g.picturesImage);
        g.showImage(1);

    }
    g.closeCurrent = function(oPicture) {
        if (oPicture.eq(g.current).hasClass('picture__image-show')) {
            oPicture.eq(g.current).removeClass('picture__image-show');
        }
    };
    g.showRefImage = function() {
        g.closeCurrent(g.picturesImage);
        if (g.circles.hasClass('circles-light')) {
            g.circles.removeClass('circles-light');
        }
        g.circles.eq(g.circles.index(this)).addClass('circles-light');
        g.current = g.circles.index(this);
        g.showCurrent();
    };
    // ******************* события *******************//
    g.pictures.click(g.showCurrent);
    g.arrowPrev.click(g.showPrevious);
    g.arrowNext.click(g.showNext);
    g.circles.click(g.showRefImage);
}

Gallery.prototype = new Component();