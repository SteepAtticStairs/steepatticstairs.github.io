import {
    lengthToRender,
    getHour,
    userCurrentHour,
    convertToF,
    convertToMph
} from './utils.mjs'
import { sortArrays } from './sortArrays.mjs'

var index = [0, 0, 0, 0, 0, 0, 0];
var prev = [0, 0, 0, 0, 0, 0, 0];

var tempArr = [];
var feelsLikeArr = [];

var cloudArr = [];
var cloudPercentArr = [];

var humidityArr = [];
var humidityPercentArr = [];

var popArr = [];
var popPercentArr = [];

var dewpointArr = [];

var windSpeedArr = [];
var windSpeedPercentArr = [];

var tsArr = [];
var hourArr = [];
var dateArr = [];

var hourMatches = [];
var indexInInfoArr;

function extractData(data) {
    for (var x = 0; x < lengthToRender; x++) {
        // timestamps
        var ts = data.properties.validTimes.split('/')[0];
        var currentDateObj = new Date(new Date(ts).getTime() + (60*x)*60000);
        var curHour = getHour(currentDateObj);
        if (curHour == userCurrentHour) {
            hourMatches.push(x);
        }

        var tsMonth = currentDateObj.toLocaleString('default', { month: 'long' });
        dateArr.push(`${tsMonth} ${currentDateObj.getDate()}, ${currentDateObj.getFullYear()}`)
        if (curHour == '12:00 AM') {
            tsArr.push(`${currentDateObj.getMonth() + 1}/${currentDateObj.getDate()}`);
        } else {
            tsArr.push(curHour);
        }
        hourArr.push(curHour);

        // temperature
        indexInInfoArr = 0;
        var tempTime = new Date(data.properties.temperature.values[index[indexInInfoArr]].validTime.split('/')[0]);
        if (tempTime.toISOString() == currentDateObj.toISOString()) {
            var theVal = convertToF(data.properties.temperature.values[index[indexInInfoArr]].value);
            tempArr.push(theVal);
            index[indexInInfoArr]++;
            prev[indexInInfoArr] = theVal;
            //console.log(getHour(tempTime), theVal)
        } else {
            tempArr.push(prev[0])
        }
        indexInInfoArr = 1;
        var feelsLikeTime = new Date(data.properties.apparentTemperature.values[index[indexInInfoArr]].validTime.split('/')[0]);
        if (feelsLikeTime.toISOString() == currentDateObj.toISOString()) {
            var theVal = convertToF(data.properties.apparentTemperature.values[index[indexInInfoArr]].value);
            feelsLikeArr.push(theVal);
            index[indexInInfoArr]++;
            prev[indexInInfoArr] = theVal;
        } else {
            feelsLikeArr.push(prev[indexInInfoArr])
        }

        // clouds
        indexInInfoArr = 2;
        var cloudTime = new Date(data.properties.skyCover.values[index[indexInInfoArr]].validTime.split('/')[0]);
        if (cloudTime.toISOString() == currentDateObj.toISOString()) {
            var theVal = data.properties.skyCover.values[index[indexInInfoArr]].value;
            cloudArr.push(theVal);
            cloudPercentArr.push(theVal);
            index[indexInInfoArr]++;
            prev[indexInInfoArr] = theVal;
        } else {
            cloudArr.push(prev[indexInInfoArr])
            cloudPercentArr.push(prev[indexInInfoArr])
        }

        // humidity
        indexInInfoArr = 3;
        var humidityTime = new Date(data.properties.relativeHumidity.values[index[indexInInfoArr]].validTime.split('/')[0]);
        if (cloudTime.toISOString() == currentDateObj.toISOString()) {
            var theVal = data.properties.relativeHumidity.values[index[indexInInfoArr]].value;
            humidityArr.push(theVal);
            humidityPercentArr.push(theVal);
            index[indexInInfoArr]++;
            prev[indexInInfoArr] = theVal;
        } else {
            humidityArr.push(prev[indexInInfoArr])
            humidityPercentArr.push(prev[indexInInfoArr])
        }

        // percent of precipitation
        indexInInfoArr = 4;
        var popTime = new Date(data.properties.probabilityOfPrecipitation.values[index[indexInInfoArr]].validTime.split('/')[0]);
        if (popTime.toISOString() == currentDateObj.toISOString()) {
            var theVal = data.properties.probabilityOfPrecipitation.values[index[indexInInfoArr]].value;
            popArr.push(theVal);
            popPercentArr.push(theVal);
            index[indexInInfoArr]++;
            prev[indexInInfoArr] = theVal;
        } else {
            popArr.push(prev[indexInInfoArr])
            popPercentArr.push(prev[indexInInfoArr])
        }

        // dew point
        indexInInfoArr = 5;
        var dewpointTime = new Date(data.properties.dewpoint.values[index[indexInInfoArr]].validTime.split('/')[0]);
        if (dewpointTime.toISOString() == currentDateObj.toISOString()) {
            var theVal = convertToF(data.properties.dewpoint.values[index[indexInInfoArr]].value);
            dewpointArr.push(theVal);
            index[indexInInfoArr]++;
            prev[indexInInfoArr] = theVal;
        } else {
            dewpointArr.push(prev[indexInInfoArr])
        }

        // dew point
        indexInInfoArr = 6;
        var windSpeedTime = new Date(data.properties.windSpeed.values[index[indexInInfoArr]].validTime.split('/')[0]);
        if (windSpeedTime.toISOString() == currentDateObj.toISOString()) {
            var theVal = convertToMph(data.properties.windSpeed.values[index[indexInInfoArr]].value);
            windSpeedArr.push(theVal);
            windSpeedPercentArr.push(theVal);
            index[indexInInfoArr]++;
            prev[indexInInfoArr] = theVal;
        } else {
            windSpeedArr.push(prev[indexInInfoArr])
            windSpeedPercentArr.push(prev[indexInInfoArr])
        }
    }
    sortArrays(tempArr, feelsLikeArr, dewpointArr, cloudArr, humidityArr, popArr, windSpeedArr)
}

export {
    extractData,

    tempArr,
    feelsLikeArr,

    cloudArr,
    cloudPercentArr,

    humidityArr,
    humidityPercentArr,

    popArr,
    popPercentArr,

    dewpointArr,

    windSpeedArr,
    windSpeedPercentArr,

    tsArr,
    hourMatches,
    dateArr,
    hourArr
}