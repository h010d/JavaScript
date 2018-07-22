// класс ES5
function Menu(sSelector) { // sSelector - хранит идентификатор меню
    // console.log(this);
    var m = this;
    //********  Свойства *****************//
    this.menu = $(sSelector);
    this.menuItems = this.menu.children("li");
    console.log(this.menuItems[0].className);
    console.log(m.menuItems[0].className);
    console.log(this.menuItems[0].value);
    console.log(m.menuItems[0].value);
    console.log($(this.menuItems[0]));
    console.log($(m.menuItems[0]));
    //********  Методы *****************//
    console.log("methods");
    this.showSubMenu = function(event) {
        console.log("show");
        console.log(this);
        console.log(event);
        console.log(event.currentTarget);
        console.log(event.target);
        console.log($(this).children("ul"));
        // $(this).children("ul").show();
        // $(this).children("ul").addClass("b-submenu_shown");
        // $(this).children("ul").stop().slideDown();
        $(this).children("ul")
            .addClass("b-submenu_shown")
            .stop()
            .animate({ "opacity": 1 }, 400);
    }

    this.hideSubMenu = function() {
        // $(this).children("ul").hide();
        // $(this).children("ul").removeClass("b-submenu_shown");
        //$(this).children("ul").stop().slideUp();
        $(this).children("ul")

        .stop()
            .animate({ "opacity": 0 }, 400, function() {
                console.log(this);
                $(this).removeClass("b-submenu_shown");
            });
    }
    m.showHideSubMenu = function() {
        m.menuItems.children("ul").stop().slideUp();
        $(this).children("ul").stop().slideToggle();
    }
    m.addText = function() {
            $(this).text("hi I am here!");
        }
        //********  События *****************//
    console.log("events");
    // this.menuItems.mouseover(this.showSubMenu);
    // $(m.menuItems[0]).mouseover(this.showSubMenu);
    // this.menuItems.mouseout(this.hideSubMenu);
    m.menuItems
        .mouseover(this.showSubMenu)
        .mouseout(this.hideSubMenu);
    // m.menuItems.click(m.showHideSubMenu)
    // m.menuItems.click(m.addText)
}