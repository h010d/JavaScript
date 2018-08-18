function Giga(sSelector) {
    var g = this;
    g.init(sSelector);

    g.menuAccordion = g.findObj('#menu1');
    g.menuAccordionItems = g.menuAccordion.children('li');

    //** ****************    methods   *****************    */
    g.showHideSubMenu = function(event) {
        event.preventDefault();
        // console.log('event.target :', event.target);
        if ($(event.target).hasClass('accordion__link')) {
            // console.info('accordion__link working');
            g.menuAccordionItems.children("ul").stop().slideUp();
            $(this).children("ul").stop().slideToggle();
        }
    }


    //** *****************    events   *****************    */
    g.menuAccordionItems.click(g.showHideSubMenu);
}
Giga.prototype = new Component();