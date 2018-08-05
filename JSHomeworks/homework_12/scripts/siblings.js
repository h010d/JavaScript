function Siblings(sSelector) {
    let s = this;
    s.init(sSelector);
    s.wrapperInner = s.findObj('.wrapper_inner');
    s.buttonClear = s.findObj('.button_clear');
    s.top = s.findObj('.top');
    s.radioButton = s.findObj('.choise__method');
    s.showInfo = s.findObj('.showInfo');
    s.radioList = '';
    s.clear = '';
    s.getCurrentMethod = function() {
        return s.radioButton.filter(':checked').val();
    };
    s.clearAll = function(sClassName) {
        let str = 'div.' + sClassName;
        if (sClassName) {
            $(str).removeClass(sClassName);
        }
    };
    /**
     * @param  {string} MethodName
     */
    s.addNamePrefix = function(MethodName) {
        if (MethodName) {
            return s.radioList = 'selected-' + MethodName;
        } else {
            return s.radioList = 'selected-' + s.getCurrentMethod();
        }
    };
    s.main = function() {
        let tmpStr = '$(event.target)';
        s.clearAll(s.clear);
        s.radioList = s.addNamePrefix();
        s.clear = s.radioList;
        //интересует как можно сократить этот switch:case чтобы 
        // все методы поместились в одну строку-выражение 
        // s.getCurrentMethod() отдает нам имя метода === строку  
        // как можно эту строку поставить в выражение чтобы получился рабочий код такого вида
        // $(event.target). + <s.getCurrentMethod()> + ().addClass(s.radioList);
        // идея в том чтобы при возврате имени класса(которое совпадает с именем метода),
        //не делать больших проверок. Такой код и работать будет быстрее, на мой взгляд.
        //ну может если нужно то оставить пару проверок,
        // где идет не четкое соответствие "азвание класса" == "название метода"  
        switch (true) {
            case 'siblings' == s.getCurrentMethod():
                $(event.target).siblings().addClass(s.radioList);
                s.addShowInfoText(tmpStr + '.' + s.getCurrentMethod() + '()');
                break;

            case 'parent' == s.getCurrentMethod():
                $(event.target).parent().addClass(s.radioList);
                s.addShowInfoText(tmpStr + '.' + s.getCurrentMethod() + '()');
                break;

            case 'parents' == s.getCurrentMethod():
                $(event.target).parents().addClass(s.radioList);
                s.addShowInfoText(tmpStr + '.' + s.getCurrentMethod() + '()');
                break;

            case 'aftparent' == s.getCurrentMethod():
                $(event.target).parent().parent().addClass(s.radioList);
                s.addShowInfoText(tmpStr + '.' + 'parent().parent()');
                break;

            case 'closest' == s.getCurrentMethod():
                $(event.target).closest('.rip').addClass(s.radioList);
                s.addShowInfoText(tmpStr + '.' + s.getCurrentMethod() + '()');
                break;

            case 'children' == s.getCurrentMethod():
                $(event.target).children().addClass(s.radioList);
                s.addShowInfoText(tmpStr + '.' + s.getCurrentMethod() + '()');
                break;

            case 'next' == s.getCurrentMethod():
                $(event.target).next().addClass(s.radioList);
                s.addShowInfoText(tmpStr + '.' + s.getCurrentMethod() + '()');
                break;

            case 'prev' == s.getCurrentMethod():
                $(event.target).prev().addClass(s.radioList);
                s.addShowInfoText(tmpStr + '.' + s.getCurrentMethod() + '()');
                break;

            case 'nextAll' == s.getCurrentMethod():
                $(event.target).nextAll().addClass(s.radioList);
                s.addShowInfoText(tmpStr + '.' + s.getCurrentMethod() + '()');
                break;

            case 'prevAll' == s.getCurrentMethod():
                $(event.target).prevAll().addClass(s.radioList);
                s.addShowInfoText(tmpStr + '.' + s.getCurrentMethod() + '()');
                break;

            case 'nextUntil' == s.getCurrentMethod():
                $(event.target).nextUntil('.until').addClass(s.radioList);
                s.addShowInfoText(tmpStr + '.' + s.getCurrentMethod() + '()');
                break;

            case 'prevUntil' == s.getCurrentMethod():
                $(event.target).prevUntil('.until').addClass(s.radioList);
                s.addShowInfoText(tmpStr + '.' + s.getCurrentMethod() + '()');
                break;

            default:
                console.error('Метод не найден!');
        }
    };
    s.addShowInfoText = function(sString) {
        s.showInfo.text(sString);
    };
    s.buttonClear.click(s.clearAll);
    s.top.click(s.main);
    $('body').click(s.bodyEvents);
}

Siblings.prototype = new Component();