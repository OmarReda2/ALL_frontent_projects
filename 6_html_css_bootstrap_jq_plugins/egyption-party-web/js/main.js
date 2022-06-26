// home section

$('#options-hide').click(function () {
    $('#options').animate({ width: '0px' }, function () { $('#options').css({ display: 'none' }) })
})


$('#options-show').click(function () {
    $('#options').css('display', 'block').animate({ width: '250px' })
})













// singer info section

$('.singer-info-name').click(function () {

    $(this).next().slideToggle()
    $('.singer-info-content').not($(this).next()).slideUp()
})












// event section

let secCountDown
let minCountDown
let hourCountDown
let dayCountDown

function eventCountDown(dd, mm) {   //  12/5

    let currentMonth = new Date().getMonth() + 1;
    let currentDay = new Date().getDate()
    

    let remainMonth = mm - currentMonth;
    console.log

    let eventDay = $('#event-day')
    let remainDay = eventDay.html(Number((remainMonth * 30)) + Number(dd) - Number(currentDay))



    let eventHour = $('#event-hour')
    let remainHour = eventHour.html(remainDay.html() * 24)


    let eventMin = $('#event-min')
    eventMin.html(60)

    let eventSec = $('#event-sec')
    eventSec.html(60)


    let sec = 1000
    let min = sec * 60
    let hour = min * 60
    let day = hour * 24


    
    secCountDown = setInterval(function () {

        prevSec = eventSec.html()
        eventSec.html(prevSec - 1)
        if (eventSec.html() == 0) {
            eventSec.html(60)
        }

    }, sec)

    
    minCountDown = setInterval(function () {

        prevMin = eventMin.html()
        eventMin.html(prevMin - 1)
        if (eventMin.html() == 0) {
            eventMin.html(60)
        }

    }, min)


    hourCountDown = setInterval(function () {

        prevHour = eventHour.html()
        eventHour.html(prevHour - 1)

    }, hour)


    dayCountDown = setInterval(function () {

        prevDay = eventDay.html()
        eventDay.html(prevDay - 1)

    }, day)
}






let dayInput = $('#day')
let monInput = $('#mon')


    
dayInput.keyup(function(){
    clearInterval(secCountDown)
    clearInterval(minCountDown)
    clearInterval(hourCountDown)
    clearInterval(dayCountDown)

    eventCountDown(dayInput.val(), monInput.val())
    
})

monInput.keyup(function(){
    clearInterval(secCountDown)
    clearInterval(minCountDown)
    clearInterval(hourCountDown)
    clearInterval(dayCountDown)

    eventCountDown(dayInput.val(), monInput.val())
    
})



// console.log(dayInput.val())







// contact info section

let textarea = $('#contact-info textarea');
let charCount = $('#char-count');
let charMax = 100;
let counter = 0;
let charLength;




textarea.keypress(function (e) {
    charLength = textarea.val().length + 1

    if (charLength <= 100) {

        charCount.html(charMax - charLength)
    }

    else {
        counter += 1
    }
})




textarea.keydown(function (e) {
    if (e.key == 'Backspace' && counter == 0 && charCount.html() < 100) {
        charCount.html(Number(charCount.html()) + 1)
    }


    else if (e.key == 'Backspace' && counter > 0) {
        counter -= 1
        if (counter == 0) {
            charCount.html(0)
        }
    }
})



