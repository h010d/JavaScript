function Scroll(sSelector) {
    var s = this;

    s.init(sSelector);
    s.topLink = s.findObj('.topLink');

    s.showHideTopLink = function() {
        $(window).scrollTop() > 300 ? s.topLink.show() : s.topLink.hide();

    };
    s.slowScroll = function(event) {
        /**
         * *ссылка кнопка submit
         */
        event.preventDefault();
        $('html, body')
            .stop()
            .animate({ scrollTop: 0 }, 2000);
    };
    $(window).scroll(s.showHideTopLink);
    s.topLink.click(s.slowScroll);
}
Scroll.prototype = new Component();