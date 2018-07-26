function Gallery(sSelector) {
    // ***************** свойства ******************* //
    let g = this;
    g.init(sSelector);
    g.pictures = g.findObj('.picture');
    g.display = g.findObj('.display');
    g.buttonStart = g.findObj('.button_start');
    g.backgroundSize = '100% 100%';
    g.newdiv2 = $("<div class='object2'></div>");
    g.newdiv1 = $("<div class='object2'></div>");
    g.currentImage = '';
    g.nextImage = '';
    g.prevImage = '';
    g.time = 1000 * 3;
    var pathSecond = "url(\'https://orig00.deviantart.net/5a7d/f/2013/311/4/f/miley_cyrus_png_by_eda_asdfg-d6tcthx.png\')";
    var pathOne = "url(\'https://orig00.deviantart.net/b5c3/f/2011/283/4/6/46935a1388497ef3fd180d004b75f8a8-d4cf4cy.png\')";
    // ******************* методы  ******************* //
    g.startInit = function() {
        // g.currentImage = 'url(\'../images/gallery/0.JPG\')';
        // g.setNumberQueue();
        // g.display.css({
        //     'background-image': pathOne,
        //     'background-size': g.backgroundSize
        // });
        // g.setDisplayInfoText();
    };
    g.addBlock = function() {

        g.display.append(g.newdiv2, g.newdiv1);
        g.newdiv2.css({ "background": pathOne, 'background-size': g.backgroundSize, 'opacity': 1.0, "height": "200px", "width": "150px", 'position': 'relative' })
            .animate({ 'opacity': 0.0 }, g.time)
            .animate({ 'opacity': 1.0 }, g.time);
        g.newdiv1.css({ "background": pathSecond, 'background-size': g.backgroundSize, 'opacity': 0.0, "height": "200px", "width": "150px", 'position': 'absolute', 'top': '0' })
            .animate({ 'opacity': 1.0 }, g.time)
            .animate({ 'opacity': 0.0 }, g.time);
        // g.display.css({ "background": transparent, "background-image": pathSecond, 'background-size': g.backgroundSize });


        console.log('g.buttonStart :', g.buttonStart);
    };

    // ******************* события ******************* //
    g.startInit();
    g.buttonStart.click(g.addBlock);
}

Gallery.prototype = new Component();