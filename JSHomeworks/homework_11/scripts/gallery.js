function Gallery(sSelector) {
    // ***************** свойства ******************* //
    var g = this;
    g.init(sSelector);
    g.pictures = g.findObj('.picture');
    g.displayCurrent = g.findObj('.display');
    g.displayNext = g.findObj('.display2');
    g.button = g.findObj('.button');
    g.startPosition = 0;
    g.imageMaxPosition = 5;
    g.currentImage = '';
    g.nextImage = '';
    g.prevImage = '';
    g.maxCount = 5;
    g.backgroundSize = "100% 100%";

    var pathOne = 'https://orig00.deviantart.net/b5c3/f/2011/283/4/6/46935a1388497ef3fd180d004b75f8a8-d4cf4cy.png',
        pathSecond = 'https://orig00.deviantart.net/5a7d/f/2013/311/4/f/miley_cyrus_png_by_eda_asdfg-d6tcthx.png',
        current = '../images/gallery/0.JPG',
        next = '../images/gallery/1.JPG',
        count = 0,
        timeAnim = 4000;

    // ******************* методы ******************* //
    g.startInit = function() {
        g.currentImage = "url('../images/gallery/" + count++ + ".JPG')";
        g.nextImage = "url('../images/gallery/" + count++ + ".JPG')";
        g.displayCurrent.css({ "background-image": g.currentImage, "background-size": g.backgroundSize });
    };
    rotation = function() {
        if (count >= g.maxCount) {
            count = 0;
        }
        g.changeImageCurrent(g.displayCurrent).animate({ opacity: 0.0 }, timeAnim);
        g.changeImageNext(g.displayNext).animate({ opacity: 1.0 }, timeAnim);
        g.currentImage = g.nextImage;
        g.nextImage = "url('../images/gallery/" + count++ + ".JPG')";

    };

    g.changeImageCurrent = function(oObject) {
        oObject.css({ "background-image": g.currentImage, "background-size": g.backgroundSize, opacity: 1.0 });
        return oObject;
    };
    g.changeImageNext = function(oObject) {
        oObject.css({ "background-image": g.nextImage, opacity: 0.0, "background-size": g.backgroundSize });
        return oObject;
    };

    g.show = function() {
        window.setInterval(rotation, timeAnim * 2);
    };
    g.startInit();
    // ******************* события ******************* //
    g.button.click(g.show);
}
Gallery.prototype = new Component();