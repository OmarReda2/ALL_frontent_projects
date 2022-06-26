var thirdDate = document.getElementById('thirdDay');
var thirdDayDeg = document.getElementById('thirdDayDeg');
var thirdSmDeg = document.getElementById('thirdSmDeg');
var thirdState = document.getElementById('thirdState');
var thirdImgState = document.getElementById('thirdImgState');


var secondDate = document.getElementById('secondDate');
var secondSmDeg = document.getElementById('secondSmDeg');
var secondDayDeg = document.getElementById('secondDayDeg');
var secondState = document.getElementById('secondState');
var secondImgState = document.getElementById('secondImgState');


var currentDate2 = document.getElementById('currentDate2');
var currentDate = document.getElementById('currentDate');
var city = document.getElementById('city');
var info1 = document.getElementById('info1');
var info2 = document.getElementById('info2');
var info3 = document.getElementById('info3');
var firstState = document.getElementById('firstState');
var firstDayDeg = document.getElementById('firstDayDeg');
var firstImgState = document.getElementById('firstImgState');

// document.querySelector('body').addEventListener('load', getData('cairo'));


var search = document.getElementById('search');
search.addEventListener('keydown', function () { getData(search.value) })



function forecastDateMon(x) {
    var nextDate = new Date()
    nextDate.setDate(nextDate.getDate() + x)
    var nextDateString = nextDate.toDateString()
    var nextDateStringMon = nextDateString.slice(4, 7)
    return nextDateStringMon;
}


function forecastDateDay(x) {
    var nextDate = new Date()
    nextDate.setDate(nextDate.getDate() + x)
    var nextDateString = nextDate.toDateString()
    var nextDateStringDay = nextDateString.slice(8, 11)
    return nextDateStringDay;
}


function forecastDateWeekDay(x) {
    var nextDate = new Date()
    nextDate.setDate(nextDate.getDate() + x)
    var nextDateString = nextDate.toDateString()
    var nextDateStringDay = nextDateString.slice(0, 3)
    return nextDateStringDay;
}


async function getData(x) {
    if (x == '' || x == null) {
        var myRes = await fetch('http://api.weatherapi.com/v1/forecast.json?key=ceef8b2a5ba8486a8a7122640222601&q=cairo&days=3');
    }
    else {
        var myRes = await fetch('http://api.weatherapi.com/v1/forecast.json?key=ceef8b2a5ba8486a8a7122640222601&q=' + x + '&days=3');
    }

    var data = await myRes.json()



    if (myRes.status == 200 && data != '') {
        currentDate.innerHTML = forecastDateWeekDay(0);
        currentDate2.innerHTML = `${forecastDateDay(0)}  ${forecastDateMon(0)}`;
        city.innerHTML = data.location.name;
        firstDayDeg.innerHTML = data.current.temp_c + "<sup>o</sup>C";
        firstState.innerHTML = data.current.condition.text;
        firstImgState.setAttribute('src', 'http://' + data.current.condition.icon);
        info1.innerHTML = data.current.humidity + '%';
        info2.innerHTML = data.current.wind_mph + ' Km/h';
        info3.innerHTML = data.current.wind_dir;


        secondDate.innerHTML = forecastDateWeekDay(1);
        secondDayDeg.innerHTML = data.forecast.forecastday[1].day.maxtemp_c + "<sup>o</sup>C";
        secondSmDeg.innerHTML = data.forecast.forecastday[1].day.mintemp_c + "<sup>o</sup>C";
        secondState.innerHTML = data.forecast.forecastday[1].day.condition.text;
        secondImgState.setAttribute('src', 'http://' + data.forecast.forecastday[1].day.condition.icon);

        thirdDate.innerHTML = forecastDateWeekDay(2);
        thirdDayDeg.innerHTML = data.forecast.forecastday[2].day.maxtemp_c + "<sup>o</sup>C";
        thirdSmDeg.innerHTML = data.forecast.forecastday[2].day.mintemp_c + "<sup>o</sup>C";
        thirdState.innerHTML = data.forecast.forecastday[2].day.condition.text;
        thirdImgState.setAttribute('src', 'http://' + data.forecast.forecastday[2].day.condition.icon);






    }

}






