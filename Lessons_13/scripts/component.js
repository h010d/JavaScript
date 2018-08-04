function Component() {
    this.elem = null;
    this.init = function(sSelector) {
        this.elem = $(sSelector);
    };
    this.findObj = function(sSelector) {
        /*  f.name = f.form.find('.b-form__name'); */
        return this.elem.find(sSelector);
    };
    this.getVal = function(oElem, sSeparator) {
        var elemType = oElem.attr('type'),
            elemTagName = oElem.prop('tagName').toLowerCase(),
            separator = sSeparator || ' '; // sSeparator = sSeparator
        // console.log(elemType, elemTagName);
        if ('radio' == elemType) {
            return oElem.filter(':checked').val();
        } else if ('text' == elemType ||
            'select' == elemTagName ||
            'textarea' == elemTagName) {
            return oElem.val();
        } else if ('checkbox' == elemType) {
            var checkboxList = '';
            oElem.filter(':checked')
                .each(function() {
                    /*   checkboxList += $(this).val() + ' '; */
                    if (checkboxList) {
                        checkboxList += separator; // sSeparator
                    }
                    checkboxList += $(this).val();
                });
            return checkboxList;
        } else {
            console.log('Элемент управления с типом ', elemType, ' и именем тега ', elemTagName, ' не существует');
        }
    };
    this.copyData = function(oSource, oDestination, aFieldNames) {
        $.each(aFieldNames, function(i, fieldName) {
            var oSourceElement = oSource.find(fieldName),
                oDestinationElement = oDestination.find(fieldName),
                tagName = oSourceElement.prop('tagName');
            console.log('oSourceElement :', oSourceElement);
            console.log('oDestinationElement :', oDestinationElement);
            console.log('tagName.IMG :', tagName.IMG);
            if (tagName == 'IMG') {
                oDestination.attr('src', oSourceElement.attr('src'));
            } else if (tagName == 'INPUT' || tagName == 'TEXTAREA') {
                oDestinationElement.val(oSourceElement.val());
            } else { oDestinationElement.html(oSourceElement.html()); }
        });
    };
}