import {
    tempArr,
    feelsLikeArr,
    cloudArr,
    humidityArr,
    popArr,
    dewpointArr,
    windSpeedArr,
} from './extractData.mjs'
import { lengthToRender } from './utils.mjs'
import { initChart } from './initChart.mjs'

function sortArrays() {
    var minArray = [];
    var maxArray = [];
    var tempArrMin = Math.floor(Math.min(...tempArr) / 10) * 10;
    var tempArrMax = Math.ceil(Math.max(...tempArr) / 10) * 10;
    var feelsLikeArrMin = Math.floor(Math.min(...feelsLikeArr) / 10) * 10;
    var feelsLikeArrMax = Math.ceil(Math.max(...feelsLikeArr) / 10) * 10;
    var dewpointArrMin = Math.floor(Math.min(...dewpointArr) / 10) * 10;
    var dewpointArrMax = Math.ceil(Math.max(...dewpointArr) / 10) * 10;

    minArray.push(tempArrMin);
    minArray.push(feelsLikeArrMin);
    minArray.push(dewpointArrMin);
    minArray.sort();

    maxArray.push(tempArrMax);
    maxArray.push(feelsLikeArrMax);
    maxArray.push(dewpointArrMax);
    maxArray.sort();

    var minTemp = minArray[0];
    var maxTemp = maxArray[0];

    for (var w = 0; w < lengthToRender; w++) {
        // https://stackoverflow.com/questions/11107227/how-to-get-a-percentage-from-a-range#comment59972657_11107254
        cloudArr[w] = ((cloudArr[w] / 100) * (maxTemp - minTemp)) + minTemp;
        humidityArr[w] = ((humidityArr[w] / 100) * (maxTemp - minTemp)) + minTemp;
        popArr[w] = ((popArr[w] / 100) * (maxTemp - minTemp)) + minTemp;
        windSpeedArr[w] = ((windSpeedArr[w] / 100) * (maxTemp - minTemp)) + minTemp;
    }

    initChart();
}

export {
    sortArrays
}