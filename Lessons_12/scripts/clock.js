function Clock(sSelector) {
    var c = this;

    c.init(sSelector);


    c.getTimeData = function(timeSelector, methodType) {
        var today = new Date(),
            time = today[methodType](),
            timePlace = c.findObj('.' + timeSelector);
        timePlace.text(time < 10 ? '0' + time : time);
    };
    c.main = function() {
        c.getTimeData('hours', 'getHours');
        c.getTimeData('min', 'getMinutes');
        c.getTimeData('sec', 'getSeconds');
    };
    c.main();
    setInterval(c.main, 1000);
}

Clock.prototype = new Component();
//? delay() задержка запуска
//?  в .animate(callback)