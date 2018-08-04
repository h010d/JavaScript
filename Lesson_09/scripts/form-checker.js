function FormChecker(sSelector) {
    var f = this;
    f.init(sSelector);
    f.textfields = f.findObj('.b-textfield');
    f.errorMessage = f.findObj('.b-form__message_error');
    f.checkTextfield = function(textfield) {
        var currentTextfield = textfield.length ? textfield : $(this),
            currentTextfieldVal = currentTextfield.val(),
            regexps = Settings.get('regexps'),
            currentRegExp = regexps[currentTextfield.attr('name')],
            oCurrentRegExp = new RegExp(currentRegExp),
            textfieldError = !currentTextfieldVal.match(oCurrentRegExp);

        currentTextfield.toggleClass('b-textfield_error', textfieldError);
        console.log('textfieldError', textfieldError);
        // console.log('currentRegExp', currentRegExp);
        return textfieldError;

    };
    f.checkTextfields = function(event) {
        event.preventDefault();
        var formError = false;
        f.textfields.each(function() {
            var currentTextfield = $(this);
            textfieldError = f.checkTextfield(currentTextfield);
            // console.log(textfieldError);
            if (textfieldError) {
                formError = true;
            }
        });
        var methodType = formError ? 'slideDown' : 'slideUp';
        f.errorMessage[methodType]();
    };
    f.textfields.blur(f.checkTextfield);
    f.elem.submit(f.checkTextfields);
}

FormChecker.prototype = new Component();