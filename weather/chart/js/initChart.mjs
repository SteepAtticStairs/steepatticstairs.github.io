import {
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
} from './extractData.mjs'

function initChart() {
    if (Chart.getChart("weatherChart")) {
        Chart.getChart("weatherChart").destroy();
    }

    var weatherChart = new Chart("weatherChart", {
        type: "line",
        data: {
            labels: tsArr,
            datasets: [{
                label: "temp",
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(255, 30, 0, 1.0)",
                borderColor: "rgba(255, 30, 0, 0.1)",
                data: tempArr
            }, {
                label: "feelsLike",
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(145, 17, 0, 1.0)",
                borderColor: "rgba(145, 17, 0, 0.1)",
                data: feelsLikeArr
            }, {
                label: "clouds",
                fill: true,
                lineTension: 0,
                backgroundColor: "rgba(130, 130, 130, 0.2)",
                borderColor: "rgba(130, 130, 130, 0.5)",
                pointBackgroundColor: 'rgba(130, 130, 130, 1)',
                data: cloudArr,
            }, {
                label: "humidity",
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(4, 216, 0, 0.2)",
                borderColor: "rgba(4, 216, 0, 0.5)",
                pointBackgroundColor: 'rgba(4, 216, 0, 1)',
                data: humidityArr,
            }, {
                label: "pop",
                fill: true,
                lineTension: 0,
                backgroundColor: "rgba(0, 156, 255, 0.2)",
                borderColor: "rgba(0, 156, 255, 0.5)",
                pointBackgroundColor: 'rgba(0, 156, 255, 1)',
                data: popArr,
            }, {
                label: "dewpoint",
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0, 148, 35, 0.2)",
                borderColor: "rgba(0, 148, 35, 0.5)",
                pointBackgroundColor: 'rgba(0, 148, 35, 1)',
                data: dewpointArr,
            }, {
                label: "windspeed",
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(255, 230, 0, 0.2)",
                borderColor: "rgba(255, 230, 0, 0.5)",
                pointBackgroundColor: 'rgba(255, 230, 0, 1)',
                data: windSpeedArr,
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        font: {
                            weight: (tick) => (tick?.tick?.label.includes('/') ? 'bold' : 'normal')
                        }
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                annotation: {
                    annotations: {
                        pastTime: {
                            type: 'box',
                            xMin: 0,
                            xMax: hourMatches[0],
                            backgroundColor: 'rgba(70, 70, 70, 0.25)'
                        }
                    }
                },
                legend: {display: false},
                zoom: {
                    zoom: {
                        wheel: {
                            enabled: true,
                        },
                        pinch: {
                            enabled: true
                        },
                        mode: 'x',
                    },
                    pan: {
                        enabled: true,
                        mode: 'x',
                    },
                    limits: {
                        x: {
                            min: 'original',
                            max: 'original',
                            minRange: 3,
                        },
                    },
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            var label = context.parsed.y || '';
                            var id = context.dataset.label;
                            var dataIndex = context.dataIndex;

                            if (id == 'clouds') {
                                return `${cloudPercentArr[dataIndex]} %`
                            } else if (id == 'humidity') {
                                return `${humidityPercentArr[dataIndex]} %`
                            } else if (id == 'pop') {
                                return `${popPercentArr[dataIndex]} %`
                            } else if (id == 'windspeed') {
                                return `${windSpeedPercentArr[dataIndex]} mph`
                            } else if (id == 'temp' || id == 'feelsLike' || id == 'dewpoint') {
                                return label += ' F'
                            }
                        },
                        beforeTitle: function(context) {
                            var label = context[0].label;
                            var dataIndex = context[0].dataIndex;

                            return dateArr[dataIndex];
                        },
                        title: function(context) {
                            var label = context[0].label;
                            var dataIndex = context[0].dataIndex;

                            return hourArr[dataIndex];
                        }
                    }
                }
            },
        }
    });
}

export {
    initChart
}