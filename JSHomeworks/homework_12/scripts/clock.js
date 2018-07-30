/**
 * long description for the file
 *
 * @summary short description for the file
 * @author {Anatolii Kravchenko}
 *
 * Created at     : 2018-07-30 21:00:47 
 * Last modified  : 2018-07-30 22:43:48
 */
function Clock(sSelector) {
    var c = this;
    c.init(sSelector);
    //* ********************  properties ******************** *//



    // console.log('c.mainDate :', c.mainDate);
    //* ********************  methods ******************** *//
    c.getTimeData = function(timeSelector, methodType) {
        var today = new Date(),
            time = today[methodType](),
            timePlace = c.findObj('.' + timeSelector);
        timePlace.text(time < 10 ? '0' + time : time);
    };
    c.setTimeData = function(timeSelector, timeValue) {
        //today = new Date(),

        var timePlace = c.findObj('.' + timeSelector);
        timePlace.text(timeValue < 10 ? '0' + timeValue : timeValue);
    };
    c.main = function() {
        c.getTimeData('hours', 'getHours');
        c.getTimeData('min', 'getMinutes');
        c.getTimeData('sec', 'getSeconds');
    };

    c.getTimeLeftTest = function() {
        c.mainDate = new Date(2018, 7, 11, 14, 30, 0);
        c.today = new Date();
        c.timeLeft = c.mainDate - c.today;
        let day = 24 * 60 * 60 * 1000,
            hour = 60 * 60 * 1000,
            minute = 60 * 1000,
            second = 1000;
        c.setTimeData('days', c.getTimeLeft(c.timeLeft, day));
        c.setTimeData('hours', c.getTimeLeft(c.timeLeft, hour));
        c.setTimeData('min', c.getTimeLeft(c.timeLeft, minute));
        c.setTimeData('sec', c.getTimeLeft(c.timeLeft, second));

        // console.log('//c.getTimeLeft :', c.getTimeLeft(c.timeLeft, day));
        // // // console.log('c.timeLeft 3 :', c.timeLeft);
        // console.log('c.getTimeLeft :', c.getTimeLeft(c.timeLeft, hour));
        // // // console.log('c.timeLeft 4 :', c.timeLeft);
        // console.log('c.getTimeLeft :', c.getTimeLeft(c.timeLeft, minute));
        // // // console.log('c.timeLeft 5 :', c.timeLeft);
        // console.log('c.getTimeLeft :', c.getTimeLeft(c.timeLeft, second));
        // console.log('//c.timeLeft 6 :', c.timeLeft);
        // dayLeft = Math.floor(c.timeLeft / day);
        // c.timeLeft -= (day * dayLeft);
        // hoursLeft = Math.floor(c.timeLeft / hour);
        // c.timeLeft -= (hour * hoursLeft);
        // minutesLeft = Math.floor(c.timeLeft / minute);
        // c.timeLeft -= (minute * minutesLeft);
        // secondsLeft = Math.floor(c.timeLeft / second);
        // console.info('(dayLeft:', dayLeft + ', ' + 'hoursLeft:', hoursLeft + ', ' + 'minutesLeft:', minutesLeft + ', ' + 'secondsLeft:', secondsLeft + ');');
    };
    c.getTimeLeft = function(oTimeLeft, intTime) {
        var temp = 0;

        // console.log('c.timeLeft 1 :', c.timeLeft);
        temp = Math.floor(oTimeLeft / intTime);
        c.timeLeft -= (intTime * temp);
        // console.log('c.timeLeft 2 :', c.timeLeft);
        // console.log('temp :', temp);
        return temp;
    };

    //* ********************  events ******************** *//
    setInterval(c.getTimeLeftTest, 1000);
    // c.getTimeLeftTest();

}
Clock.prototype = new Component();
//? delay() задержка запуска
//?  в .animate(callback);