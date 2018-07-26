function Gallery(sSelector) {
    // ***************** свойства ******************* //
    var g = this;
    g.init(sSelector);
    g.pictures = g.findObj('.b-picture');
    g.arrowPrev = g.findObj('.b-preview__arrow_prev');
    g.arrowNext = g.findObj('.b-preview__arrow_next');
    g.preview = g.findObj('.b-preview');
    g.previewImage = g.findObj('.b-preview__image');
    g.previewText = g.findObj('.b-preview__text');
    g.currentPlace = g.findObj('.b-preview__currentPlace');
    g.maxPlace = g.findObj('.b-preview__maxPlace');
    g.slideshowBtn = g.findObj('.b-preview__slideshowBtn');
    g.slideshowPeriod = 1;
    //Признак того что работает setInterval()
    g.slideshowIntervalStart = null;
    // признак запуска слайдшоу
    g.slideshowStart = false;
    g.current = 0;
    g.max = g.pictures.length;
    // ******************* методы ******************* //

    g.showPreview = function() {
        var currentPicture = $(this);
        g.current = g.pictures.index(currentPicture); // TODO: посмотреть разницу разобраться
        g.display(currentPicture);
    };
    g.closePreview = function() {
        //|| $(event.target)
        if (!event || $(event.target).hasClass('b-preview')) {
            g.preview.removeClass('b-preview_shown');
            g.stopSlideshow();
        }
    };

    g.showImage = function(iShift) {
        g.current += iShift;
        if (g.current >= g.max) {
            g.current = 0;
        } else if (g.current < 0) {
            g.current = g.max - 1;
        }
        g.display(g.pictures.eq(g.current));
    };
    g.display = function(oPicture) {
        var smallImage = oPicture.find('.b-picture__image'),
            bigImageSrc = smallImage.attr('src').replace('small_', '');
        g.previewImage.attr('src', bigImageSrc);
        g.previewText.html(smallImage.attr('alt'));
        g.preview.addClass('b-preview_shown');
        g.currentPlace.html(g.current + 1);
        g.maxPlace.html(g.max);
    };
    g.showPrevious = function() {
        g.showImage(-1);

    };
    g.showNext = function() {
        g.showImage(1);

    };
    g.galleryEvents = function() {
        // console.info(event.which, event.altKey, event.ctrlKey, event.shiftKey);
        if (event.which == 27) {
            g.closePreview();
        }
        if (event.which == 37) {
            g.showPrevious();
        }
        if (event.which == 39) {
            g.showNext();
        }
    };
    g.slideshow = function() {
        // g.slideshowStart ? g.slideshowBtn.text('stop') : g.slideshowBtn.text('start');
        if (g.slideshowStart) {

            // g.slideshowBtn.text('start');
            // g.slideshowStart = false;
            g.stopSlideshow();

        } else {
            g.setSlideshowData('stop', true);
            g.slideshowIntervalStart = setInterval(g.showNext, g.slideshowPeriod * 1000);
        }

    };
    g.stopSlideshow = function() {
        g.setSlideshowData('start', false);
        clearInterval(g.slideshowIntervalStart);
    };
    g.setSlideshowData = function(btnText, slideshowStart) {
        g.slideshowBtn.text(btnText);
        g.slideshowStart = slideshowStart;
    };
    // ******************* события ******************* //
    g.slideshowBtn.click(g.slideshow);
    g.pictures.click(g.showPreview);
    g.preview.click(g.closePreview);
    g.arrowPrev.click(g.showPrevious);
    g.arrowNext.click(g.showNext);
    $('body').keyup(g.galleryEvents);
}
Gallery.prototype = new Component();