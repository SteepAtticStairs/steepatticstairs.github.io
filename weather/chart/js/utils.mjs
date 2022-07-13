function setHeight() {
    /*
    * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    */

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', function(event) {
    setHeight();
}, true);
setHeight();

function printFancyTime(dateObj) {
    return dateObj.toLocaleDateString() + " " + dateObj.toLocaleTimeString();
}

// https://bobbyhadz.com/blog/javascript-get-hours-and-minutes-from-date
function getHour(dateObject) {
    return dateObject.toLocaleTimeString('en-US', {
        // en-US can be set to 'default' to use user's browser settings
        hour: '2-digit',
        minute: '2-digit',
    });
}

function getUserPosition() {
    function showPosition(position) {
        var posLat = position.coords.latitude;
        var posLng = position.coords.longitude;
        var accuracy = position.coords.accuracy;
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function convertToF(celsius) {
    return celsius * 9/5 + 32;
}

function convertToMph(kph) {
    // https://stackoverflow.com/a/11832950
    return Math.round((kph / 1.609344 + Number.EPSILON) * 100) / 100;
}

var OWMkey = "dbf262da490678e53bec10704ce4032d";
var lengthToRender = 50;
var userTime = new Date();
var userCurrentHour = `${getHour(new Date()).slice(0, -5)}00 ${userTime >= 12 ? 'PM' : 'AM'}`;

export {
    printFancyTime,
    getHour,
    getUserPosition,
    convertToF,
    convertToMph,
    OWMkey,
    lengthToRender,
    userTime,
    userCurrentHour,
}