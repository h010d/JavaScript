function Giga(sSelector) {
    var g = this;
    g.init(sSelector);
    g.menuAccordion = g.findObj('#menu1');
    g.menuAccordionItems = g.menuAccordion.children('li');
    g.menuHamburger = g.findObj('.menuToggle');
    g.menuHamburgerStatus = false;
    g.menuLink = g.findObj('.menu');
    g.buttonBasket = g.findObj('.navbar__button-basket');
    g.buttonSearch = g.findObj('.navbar__button-search');
    g.buttonLogin = g.findObj('.navbar__button-login');
    g.modalField = g.findObj('.modal__background');
    g.buttonClose = g.findObj('.close');
    g.showHideSubMenu = function(event) {
        event.preventDefault();
        if ($(event.target).hasClass('accordion__link')) {
            g.menuAccordionItems.children('ul').stop().slideUp();
            $(this).children('ul').stop().slideToggle();
        }
    };
  
    g.showHideHamburger = function(event) {
        event.preventDefault();
        $(g.menuLink).stop().slideToggle(300);
        $(g.menuHamburger).toggleClass('menuToggle-active');
    };
    g.checkHamburger = function() {
        if ((g.menuHamburger).hasClass('menuToggle-active')) {
            $(g.menuHamburger).removeClass('menuToggle-active');
        }
        g.menuLink.css(
            'display', 'none'
        );
    };
    $(window).resize(function() {
        if ($(window).width() >= 710) {
            g.menuLink.removeAttr('style');
        } else {
            g.checkHamburger();
        }
    });
    g.showBasketModal = function() {
        $('.modal__background').css({ display: 'block' });
        $('.basket__block').css({ display: 'block' });
        g.checkHamburger();
    };
    g.showSearchModal = function() {
        $('.modal__background').css({ display: 'block' });
        $('.search__block').css({ display: 'block' });
        g.checkHamburger();
    };
    g.showLoginModal = function() {
        $('.modal__background').css({ display: 'block' });
        $('.form__login').css({ display: 'block' });
        g.checkHamburger();
    };
    g.closeAllModals = function() {
        $('.modal__background').css({ display: 'none' }).removeAttr('style');
        $('.basket__block').css({ display: 'none' }).removeAttr('style');
        $('.form__login').css({ display: 'none' }).removeAttr('style');
        $('.search__block').css({ display: 'none' }).removeAttr('style');
        g.checkHamburger();
    };
    g.closeModalField = function(event) {
        if ($(event.target).hasClass('modal__background')) {
            g.closeAllModals();
        }
    };
    //** *****************    events   *****************    */
    g.menuAccordionItems.click(g.showHideSubMenu);
    g.menuHamburger.click(g.showHideHamburger);
    g.buttonBasket.click(g.showBasketModal);
    g.buttonSearch.click(g.showSearchModal);
    g.buttonLogin.click(g.showLoginModal);
    g.buttonClose.click(g.closeAllModals);
    g.modalField.click(g.closeModalField);
}

Giga.prototype = new Component();