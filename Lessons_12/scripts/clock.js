function Clock(sSelector) {
    var c = this;

    c.init(sSelector);


    c.getTimeData = function(timeSelector, methodType) {
        var today = new Date(),
            time = today[methodType](),
            timePlace = c.findObj('.' + timeSelector);
        timePlace.text(time);
    };

    c.getTimeData("hours", "getHours");
}

Clock.prototype = new Component();