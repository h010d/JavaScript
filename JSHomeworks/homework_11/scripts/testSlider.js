function Gallery(sSelector) {
    // ***************** свойства ******************* //
    let g = this;
    g.init(sSelector);
    g.pictures = g.findObj('.picture');
    g.display = g.findObj('.display');
    g.buttonStart = g.findObj('.button_start');
    g.backgroundSize = '100% 100%';
    g.currentImage = '';
    g.nextImage = '';
    g.prevImage = '';
    var pathSecond = "url(\'https://orig00.deviantart.net/5a7d/f/2013/311/4/f/miley_cyrus_png_by_eda_asdfg-d6tcthx.png\')";
    var pathOne = "url(\'https://orig00.deviantart.net/b5c3/f/2011/283/4/6/46935a1388497ef3fd180d004b75f8a8-d4cf4cy.png\')";
    // ******************* методы  ******************* //
    g.startInit = function() {
        g.currentImage = 'url(\'../images/gallery/0.JPG\')';
        // g.setNumberQueue();
        g.display.css({
            'background-image': pathSecond,
            'background-size': g.backgroundSize
        });
        // g.setDisplayInfoText();
    };
    g.addBlock = function() {

        var newdiv1 = $("<div class='object1'></div>");
        var newdiv2 = $("<div class='object2'></div>");
        // g.display.append(newdiv1, newdiv2);
        g.display.css({ "background-image": pathSecond });
        // newdiv2.css({ "background": "url('" + pathOne + "')", opacity: 1.0 });


        console.log('g.buttonStart :', g.buttonStart);
    };

    // ******************* события ******************* //
    g.startInit();
    g.buttonStart.click(g.addBlock);
}

Gallery.prototype = new Component();