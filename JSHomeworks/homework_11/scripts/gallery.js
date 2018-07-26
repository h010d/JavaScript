function Gallery(sSelector) {
    // ***************** свойства ******************* //
    var g = this;
    g.init(sSelector);
    g.pictures = g.findObj('.picture');
    g.displayCurrent = g.findObj('.display');
    g.displayNext = g.findObj('.display2');
    g.button = g.findObj('.button_start');
    g.buttonNext = g.findObj('.button_next');
    g.buttonPrev = g.findObj('.button_prev');
    g.displayInfo = g.findObj('.display_info');
    g.prevObject = '';
    g.startPosition = 0;
    g.imageMaxPosition = 5;
    g.currentImage = '';
    g.nextImage = '';
    g.prevImage = '';
    g.maxCount = 21;
    g.backgroundSize = '100% 100%';
    //Признак того что работает setInterval()
    g.slideshowIntervalStart = null;
    // признак запуска слайдшоу
    g.slideshowStart = false;
    g.slideshowFirstStart = true;
    g.firstClickNext = true;
    g.firstClickPrev = true;

    var pathOne = 'https://orig00.deviantart.net/b5c3/f/2011/283/4/6/46935a1388497ef3fd180d004b75f8a8-d4cf4cy.png',
        pathSecond = 'https://orig00.deviantart.net/5a7d/f/2013/311/4/f/miley_cyrus_png_by_eda_asdfg-d6tcthx.png',
        current = '../images/gallery/0.JPG',
        next = '../images/gallery/1.JPG',
        count = 0,
        timeAnim = 3 * 1000;

    // ******************* методы ******************* //
    g.startInit = function() {
        g.currentImage = 'url(\'../images/gallery/0.JPG\')';
        g.setNumberQueue();
        g.displayCurrent.css({
            'background-image': g.currentImage,
            'background-size': g.backgroundSize
        });
        g.setDisplayInfoText();
    };
    g.rotation = function() {
        g.checkEndLength(g.returnCurrentNumber(g.currentImage));
        g.changeImageCurrent(g.displayCurrent).animate({
            opacity: 0.0
        }, timeAnim);
        g.changeImageNext(g.displayNext).animate({
            opacity: 1.0
        }, timeAnim);
        g.currentImage = g.nextImage;
        g.setNumberQueue();
        g.setDisplayInfoText();
    };

    g.changeImageCurrent = function(oObject) {
        oObject.css({
            'background-image': g.currentImage,
            'background-size': g.backgroundSize,
            opacity: 1.0,
            'z-index': 0
        });
        return oObject;
    };
    g.changeImageNext = function(oObject) {
        oObject.css({
            'background-image': g.nextImage,
            'background-size': g.backgroundSize,
            opacity: 0.0,
            'z-index': 0
        });
        return oObject;
    };

    g.show = function() {
        if (g.slideshowStart) {
            g.stopSlideshow();
        } else {
            g.setSlideshowData('stop', true);
            g.setDisplayInfoText('Слайдшоу запущено');
            g.slideshowIntervalStart = window.setInterval(g.rotation, timeAnim * 2);
        }

    };
    g.stopSlideshow = function() {
        g.setSlideshowData('start', false);
        clearInterval(g.slideshowIntervalStart);
        g.setDisplayInfoText('Слайдшоу остановлено');
    };
    g.setSlideshowData = function(btnText, slideshowStart) {
        g.button.text(btnText);
        g.slideshowStart = slideshowStart;
    };
    g.setDisplayInfoText = function(sStr) {
        if (!sStr) {
            var sStr = (g.returnCurrentNumber(g.currentImage) + 1) + ' изображение из ' + (g.maxCount + 1);
        }

        g.displayInfo.text(sStr);
    };
    g.showNextImage = function() {
        g.dropOpacityPrev();
        g.setNumberQueue();
        g.displayImage(g.nextImage);
        g.setDisplayInfoText();
    };
    g.showPreviousImage = function() {
        g.dropOpacityPrev();
        g.setNumberQueue();
        g.displayImage(g.prevImage);
        g.setDisplayInfoText();
    };
    g.checkEndLength = function(iNumb) {
        if (iNumb >= g.maxCount + 1) {
            iNumb = 0;
        } else if (iNumb < 0) {
            iNumb = g.maxCount;
        }
        return iNumb;
    };
    g.displayImage = function(sCurrentPatch) {
        g.displayCurrent.css({
            'background-image': sCurrentPatch,
            'background-size': g.backgroundSize,
            opacity: 1.0,
            'z-index': 1000
        });

        g.currentImage = sCurrentPatch;
    };
    g.returnCurrentNumber = function() {
        var num = parseInt(g.currentImage.replace(/\D+/g, ""));
        return num;
    };
    g.setNumberQueue = function() {
        var currentNext,
            currentPrev,
            current;
        currentNext = currentPrev = current = g.returnCurrentNumber(g.currentImage);
        g.nextImage = 'url(\'../images/gallery/' + g.checkEndLength(++currentNext) + '.JPG\')';
        g.prevImage = 'url(\'../images/gallery/' + g.checkEndLength(--currentPrev) + '.JPG\')';
    };
    g.dropOpacityPrev = function() {
        g.prevObject = g.displayCurrent;
        g.prevObject.css({ opacity: 0.0, 'z-index': -1 });
        g.displayNext.css({ opacity: 0.0, 'z-index': -1 });
    };
    g.galleryEvents = function() {
        // console.info(event.which, event.altKey, event.ctrlKey, event.shiftKey);
        if (event.which == 32 && event.ctrlKey) {
            if (!g.slideshowStart) {
                g.show();
            } else {
                g.stopSlideshow();
            }

        }
        if (event.which == 37) {
            g.showPreviousImage();
        }
        if (event.which == 39) {
            g.showNextImage();
        }
    };
    g.startInit();
    // ******************* события ******************* //
    g.button.click(g.show);
    g.buttonPrev.click(g.showPreviousImage);
    g.buttonNext.click(g.showNextImage);
    $('body').keyup(g.galleryEvents);
}

Gallery.prototype = new Component();