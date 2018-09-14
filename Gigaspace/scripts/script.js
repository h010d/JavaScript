function Giga(sSelector) {
    var g = this;
    g.init(sSelector);

    var h = window.screen.availHeight;
    var w = window.screen.availWidth;
    // console.log(window.screen.height, window.screen.availHeight);
    // console.log(window.screen.width, window.screen.height);
    var ScreenWidth = screen.width;
    var ScreenHeight = screen.height;
    // alert(ScreenWidth + 'x' + ScreenHeight);
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
        // console.log('event.target :', event.target);
        if ($(event.target).hasClass('accordion__link')) {
            // console.info('accordion__link working');
            g.menuAccordionItems.children("ul").stop().slideUp();
            $(this).children("ul").stop().slideToggle();
        }
    }
    g.showHideHamburger = function(event) {
        event.preventDefault();
        $(g.menuLink).stop().slideToggle(300);
        $(g.menuHamburger).toggleClass('menuToggle-active');
    }
    g.checkHamburger = function() {
        if ((g.menuHamburger).hasClass('menuToggle-active')) {
            $(g.menuHamburger).removeClass('menuToggle-active');
        }
        g.menuLink.css(
            'display', 'none'
        );
    }
    $(window).resize(function() {
        if ($(window).width() >= 710) {
            g.menuLink.css(
                'display', 'block'
            );
        } else {
            g.checkHamburger();
        }
    });
    g.showBasketModal = function() {
        $('.modal__background').css({ display: 'block' });
        $('.basket__block').css({ display: 'block' });
        g.checkHamburger();
        // console.log('g.buttonBasket :', g.buttonBasket);
    }
    g.showSearchModal = function() {
        $('.modal__background').css({ display: 'block' });
        $('.search__block').css({ display: 'block' });
        g.checkHamburger();
        // console.log('g.buttonSearch :', g.buttonSearch);
    }
    g.showLoginModal = function() {
        $('.modal__background').css({ display: 'block' });
        $('.form__login').css({ display: 'block' });
        g.checkHamburger();
        // console.log('g.buttonLogin :', g.buttonLogin);
    }
    g.closeAllModals = function() {
        $('.modal__background').css({ display: 'none' });
        $('.basket__block').css({ display: 'none' });
        $('.form__login').css({ display: 'none' });
        $('.search__block').css({ display: 'none' });
        g.checkHamburger();
        // console.log(' g.buttonClose :', g.buttonClose);
    }
    g.closeModalField = function(event) {
            // console.log(' g.modalField:', g.modalField);
            // console.log('this:', $(this).attr('class'));
            // console.log('event.currentTarget:', $(event.currentTarget).attr('class'));
            // console.log('event.target:', $(event.target).attr('class'));
            if ($(event.target).hasClass('modal__background')) {
                g.closeAllModals();
            }
        }
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