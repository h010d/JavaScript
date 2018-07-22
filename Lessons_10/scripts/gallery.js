function Gallery(sSelector) {
    // ***************** свойства
    var g = this;
    g.init(sSelector);
    g.pictures = g.findObj('.b-picture');
    g.arrowPrev = g.findObj('.b-preview__arrow_prev');
    g.arrowNext = g.findObj('.b-preview__arrow_next');
    g.preview = g.findObj('.b-preview');
    g.previewImage = g.findObj('.b-preview__image');
    g.previewText = g.findObj('.b-preview__text');
    g.current = 0;
    g.max = g.pictures.length;
    // console.log('g.pictures:', g.pictures);
    // console.log('g.pictures:', g.pictures);
    // console.log('g.pictures:', g.pictures);
    // console.log('g.pictures:', g.pictures);
    // ******************* методы

    g.showPreview = function() {
        console.log('g.showPreview:');
        var currentPicture = $(this);
        g.display(currentPicture);
        g.current = g.pictures.index(currentPicture);

        console.log('g.pictures.index(currentPicture):', g.pictures.index(currentPicture));
        console.log('g.current:', g.current);
    };
    g.closePreview = function() {
        // console.log('this:', $(this).attr('class'));
        // console.log('event.currentTarget:', $(event.currentTarget).attr('class'));
        // console.log('event.target:', $(event.target).attr('class'));
        if ($(event.target).hasClass('b-preview')) {
            g.preview.removeClass('b-preview_shown');
        }
        console.log('g.closePreview:');
    };

    g.showImage = function(iShift) {
        g.current += iShift;
        if (g.current >= g.max) {
            g.current = 0;
        } else if (g.current < 0) {
            g.current = g.max - 1;
        }
        g.display(g.pictures.eq(g.current));
        console.log('g.showImage:');
    };
    g.display = function(oPicture) {
        console.log('g.display:');
        var smallImage = oPicture.find('.b-picture__image'),
            bigImageSrc = smallImage.attr('src').replace('small_', '');
        g.previewImage.attr('src', bigImageSrc);
        g.previewText.html(smallImage.attr('alt'));
        g.preview.addClass('b-preview_shown');

        // console.log('$( window ).width():', $(window).width());
        // console.log('$( window ).height():', $(window).height());

        //console.log('g.previewText:', bigImageSrc);
    };
    g.showPrevious = function() {
        console.log('g.showPrevious:');
        g.showImage(-1);

    };
    g.showNext = function() {
        console.log('g.showNext');
        g.showImage(1);

    }

    // ******************* события
    g.pictures.click(g.showPreview);
    g.preview.click(g.closePreview);
    g.arrowPrev.click(g.showPrevious);
    g.arrowNext.click(g.showNext);
}

Gallery.prototype = new Component();