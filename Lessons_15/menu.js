// класс ES5
class Menu {
    constructor(sSelector) {
        //********  Свойства *****************//
        this.menu = $(sSelector);
        this.menuItems = this.menu.children("li");

        //********  События *****************//
        this.createEvents();
    }


    //********  Методы *****************//

    showSubMenu(event) {
        console.log("show");
        console.log(this);
        console.log(event);
        console.log(event.currentTarget);
        console.log(event.target);
        console.log($(this).children("ul"));
        // $(this).children("ul").show();
        // $(this).children("ul").addClass("b-submenu_shown");
        // $(this).children("ul").stop().slideDown();
        $(event.currentTarget).children("ul")
            .addClass("b-submenu_shown")
            .stop()
            .animate({ "opacity": 1 }, 400);
    }

    hideSubMenu(event) {
        // $(this).children("ul").hide();
        // $(this).children("ul").removeClass("b-submenu_shown");
        //$(this).children("ul").stop().slideUp();
        let subMenu = $(event.currentTarget);
        subMenu.children("ul")

        .stop()
            .animate({ "opacity": 0 }, 400, () => {
                // console.log(this);
                subMenu.removeClass("b-submenu_shown");
            });
    }
    showHideSubMenu(event) {
        this.menuItems.children("ul").stop().slideUp();
        $(event.currentTarget).children("ul").stop().slideToggle();
    }
    addText() {
            $(event.currentTarget).text("hi I am here!");
        }
        //********  События *****************//
    createEvents() {
        this.menuItems
            .mouseover(this.showSubMenu.bind(this))
            .mouseout(this.hideSubMenu.bind(this));
        this.menuItems.click(this.showHideSubMenu.bind(this));
    }

    // m.menuItems.click(m.showHideSubMenu)
    // m.menuItems.click(m.addText)
}