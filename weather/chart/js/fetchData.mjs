import { OWMkey } from './utils.mjs'
import { printFancyTime } from './utils.mjs'
import { extractData } from './extractData.mjs'

async function fetchData() {
    var geoUrl = `https://api.openweathermap.org/geo/1.0/zip?zip=${$('#zipCodeInput').val()},US&units=imperial&appid=${OWMkey}`;
    var geoData = await (await fetch(geoUrl)).json();
    var getNWSLocationUrl = `https://api.weather.gov/points/${geoData.lat},${geoData.lon}`;
    var nwsLocationData = await (await fetch(getNWSLocationUrl)).json();

    var cityname = nwsLocationData.properties.relativeLocation.properties.city + ", " + nwsLocationData.properties.relativeLocation.properties.state;
    document.getElementById('cityDisplay').innerHTML = cityname;
    document.getElementById('currentTime').innerHTML = printFancyTime(new Date());

    var nwsPointData = await (await fetch(`https://api.weather.gov/points/${geoData.lat},${geoData.lon}`)).json();
    var nwsForecastData = await (await fetch(nwsPointData.properties.forecastGridData)).json();

    extractData(nwsForecastData);
}

document.getElementById('zipCodeSubmit').addEventListener('click', function() {
    fetchData();
});
// Execute a function when the user presses a key on the keyboard
document.getElementById('zipCodeInput').addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key == "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("zipCodeSubmit").click();
    }
});