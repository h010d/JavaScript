/**
 * long description for the file
 *
 * @summary short description for the file
 * @author Anatolii Kravchenko
 *
 * Created at     : 2018-07-30 21:00:47 
 * Last modified  : 2018-07-31 03:23:13
 */
/**
 * @param {oObject} sSelector from html
 */
function Clock(sSelector) {
    var c = this;
    c.init(sSelector);
    //* ********************  properties ******************** *//
    c.mainDate = new Date(2018, 7, 11, 14, 30, 0);
    c.buttonCheck = c.findObj('.button__check');
    c.container = c.findObj('.container');
    c.afterPoster = c.findObj('.after__poster');
    c.today = 0;
    c.startCount;
    /**
     * * modal window 
     */
    c.myModal = c.findObj('#myModal');
    c.modal = c.findObj('.modal');
    // c.buttonOpen = c.findObj('#myBtn');
    c.buttonClose = c.findObj('.close');
    c.video = c.findObj('#video');
    // c.video = new Video();
    // console.log('c.video :', c.video);
    //* ********************  methods ******************** *//
    /**
     * @param  {string} timeSelector from html
     * @param  {byte} timeValue
     */
    c.setTimeData = function(timeSelector, timeValue) {
        var timePlace = c.findObj('.' + timeSelector);
        if (c.mainDate > c.today) {
            timePlace.text(timeValue < 10 ? '0' + timeValue : timeValue);
        } else {
            timePlace.text('00');
            c.afterPoster.text('HI').css({
                'height': '150px',
                'width': '50%',
                backgroundColor: '#fff',
                margin: 'auto'
            });
            c.showModal();
            c.startVideo();
            clearInterval(c.startCount);
        }
    };
    c.remainingTime = function() {
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
    };


    /**
     * @param  {long int} timeLeft
     * @param  {int} time
     */
    c.getTimeLeft = function(timeLeft, time) {
        var temp = 0;
        temp = Math.floor(timeLeft / time);
        c.timeLeft -= (time * temp);
        return temp;
    };
    c.setTimeNow = function() {
        c.mainDate = new Date();
        c.mainDate.setSeconds(c.mainDate.getSeconds() + 7);
    };

    /**
     * * modal window 
     */
    c.showModal = function() {
        c.myModal.css({ display: 'block' });
    };
    c.closeModal = function() {
        c.myModal.css({ display: 'none' });
    };
    c.clickOtherField = function() {
        if ($(event.target).hasClass('modal')) {
            c.myModal.css({ display: 'none' });
        }
    };
    c.startVideo = function() {
        src = c.video.attr('src');
        c.video.attr('src', src + '&autoplay=1');
    };
    //* ********************  events ******************** *//

    c.startCount = setInterval(c.remainingTime, 1000);
    c.buttonCheck.click(c.setTimeNow);

    // c.buttonOpen.click(c.showModal);
    c.buttonClose.click(c.closeModal);
    c.modal.click(c.clickOtherField);
}
Clock.prototype = new Component();
//? delay() задержка запуска
//?  в .animate(callback);