$("#myModalBody").draggable({
    handle: "#myModalBodyDrag"
});
$("#myModalAlertBody").draggable({
    handle: "#myModalAlertBodyDrag"
});
$("#myModalForecastBody").draggable({
    handle: "#myModalForecastBodyDrag"
});
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
/*
* https://stackoverflow.com/a/47297180
*/
var parseXml;
if (window.DOMParser) {
    parseXml = function(xmlStr) {
        return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");
    };
} else if (typeof window.ActiveXObject != "undefined" && new window.ActiveXObject("Microsoft.XMLDOM")) {
    parseXml = function(xmlStr) {
        var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(xmlStr);
        return xmlDoc;
    };
} else {
    parseXml = function() { return null; }
}

function xmlToJson(xml) {
    // Create the return object
    var obj = {};
    // console.log(xml.nodeType, xml.nodeName );
    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } 
    else if (xml.nodeType == 3 || 
             xml.nodeType == 4) { // text and cdata section
        obj = xml.nodeValue
    }
    // do children
    if (xml.hasChildNodes()) {
        for(var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof(obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof(obj[nodeName].length) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                if (typeof(obj[nodeName]) === 'object') {
                    obj[nodeName].push(xmlToJson(item));
                }
            }
        }
    }
    return obj;
}

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    var k = 1024;
    var dm = decimals < 0 ? 0 : decimals;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    var i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
else
    checkList.classList.add('visible');
}
function printFancyTime(dateObj) {
    return dateObj.toLocaleDateString() + " " + dateObj.toLocaleTimeString();
}
setView(36.8281576, -98.5606744, 4);
function setMapDimensions() {
    $("#map").css("border-radius", "0%");
    $("#map").css("height", "400px");
    if (window.innerHeight > 750) {
        $("#map").css("top", "300px");
    } else { 
        $("#map").css("top", "250px");
    }
}

//$('#labels').trigger('click');
$('#pause').trigger('click');

function toggleRadstatModal() {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal 
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    // span.onclick = function () {
    //     modal.style.display = "none";
    // }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
function toggleAlertModal() {
    // Get the modal
    var alertmodal = document.getElementById("myModalAlert");
    // Get the <span> element that closes the modal
    var alertspan = document.getElementById("close");
    // When the user clicks the button, open the modal 
    alertmodal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    // alertspan.onclick = function () {
    //     alertmodal.style.display = "none";
    // }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == alertmodal) {
            alertmodal.style.display = "none";
        }
    }
}
function toggleForecastModal() {
    // resets the iframe
    document.getElementById('forecastIframe').src += '';
    // Get the modal
    var forecastmodal = document.getElementById("myModalForecast");
    // Get the <span> element that closes the modal
    var forecastspan = document.getElementById("closeForecast");
    // When the user clicks the button, open the modal 
    forecastmodal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    // forecastspan.onclick = function () {
    //     forecastmodal.style.display = "none";
    // }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == forecastmodal) {
            forecastmodal.style.display = "none";
        }
    }
}

var modalText = document.getElementById('modalText');
modalText.innerHTML = "Waiting for the user to input a radar station...";

var alertModalText = document.getElementById('alertModalText');
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var txt = this.responseText;
        alertModalText.innerHTML = txt;
    }
};
xhttp.open("GET", '/weather/test/alertModal.html', true);
xhttp.send();

function setView(lat, lon, zoom, opac, shouldBeFullscreen) {
    var currentTime = new Date();
    var oopaac;
    document.getElementById('weathermap').innerHTML = "<div id='map'></div>";
    // $("#map").css("border-radius", "50%");
    // $("#map").css("height", "500px");
    // $("#map").css("top", "0px");
    // if (window.innerHeight > 750) {
    //     $("#map").css("top", "250px");
    // } else { 
    //     $("#map").css("top", "170px");
    // }
    setMapDimensions();
    
    var map = 
    L.map('map', {
        renderer: L.svg(),
        attributionControl: false, // Disable the autogenerated attribution 
        zoomControl: true,
        //touchZoom: false,
        zoomDelta: 0.5,
        zoomSnap: 0.5,
        scrollWheelZoom: false,
        smoothWheelZoom: true,
        smoothSensitivity: 1,
    }).setView([lat, lon], zoom);
    map.scrollWheelZoom = true;
    // map.setView([36.8281576, -98.5606744], 4);
    // function waitForElement()   {
    //     if (typeof trashButton !== "undefined") {
    //         //variable exists, do what you want
    //         allLayerGroup.clearLayers();
    //         map.eachLayer(function (layer) {
    //             if (layer != osmLayer) {
    //                 map.removeLayer(layer);
    //                 allLayerGroup.addLayer(layer);
    //             }
    //         });
    //     }
    //     else {
    //         setTimeout(waitForElement, 250);
    //     }
    // }
    // if (lat != 36.8281576) {
    //     waitForElement();
    // }
    // map.flyTo([lat, lon], zoom, {
    //     "animate": true,
    //     'duration': 1
    // });

    var fullscreenOptions = {
        pseudoFullscreen: true
    }
    map.addControl(new L.Control.Fullscreen(fullscreenOptions));

    map.on('fullscreenchange', function () {
        if (map.isFullscreen()) {
            $("#map").css("z-index", "10000");
        } else {
            $("#map").css("z-index", "0");
        }
    });
    if (shouldBeFullscreen == true) {
        map.toggleFullscreen(fullscreenOptions);
    }
    // if (!map.isFullscreen()) {
    //     map.toggleFullscreen(fullscreenOptions);
    // }

    L.control.locate({
        keepCurrentZoomLevel: true,
        returnToPrevBounds: true,
    }).addTo(map);

    var osmLayer = 
    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var notification = L.control.notifications({
        position: 'bottomright',
    }).addTo(map);
    function checkIfRadarStation() {
        if (document.getElementById('statti').innerHTML == '') {
            notification.alert('Error', 'Please select a radar station before choosing a product.', {
                timeout: 2000,
                closable: true,
                dismissable: true,
                icon: 'fa fa-times-circle',
            });
        }
    }

    var textinput = L.Control.textinput({
        position: 'bottomleft',
        placeholder: 'Input Station',
    })
    .on('textinput', function(e) {
        //console.log(e.text);
        setRadarStation(e.text);
    })
    .addTo(map);


    var stationButton = 
        L.easyButton({
            states: [{
                icon: 'fa-satellite-dish',
                stateName: 'add',
                onClick: function(control) {
                    clickOnCheckbox('#labels');
                    control.state('remove');
                }
            }, {
                icon: 'fa-satellite-dish icon-selected',
                stateName: 'remove',
                onClick: function(control) {
                    clickOnCheckbox('#labels');
                    control.state('add');
                },
            }],
                tagName: 'a'
        });
    var lightningButton = 
        L.easyButton({
            states: [{
                icon: 'fa-bolt',
                stateName: 'add',
                onClick: function(control) {
                    clickOnCheckbox('#lightning');
                    control.state('remove');
                }
            }, {
                icon: 'fa-bolt icon-selected',
                stateName: 'remove',
                onClick: function(control) {
                    clickOnCheckbox('#lightning');
                    control.state('add');
                },
            }],
                tagName: 'a'
        });
    var alertButton = 
        L.easyButton({
            states: [{
                icon: 'fa-circle-exclamation',
                stateName: 'add',
                onClick: function(control) {
                    clickOnCheckbox('#alerts');
                    control.state('remove');
                }
            }, {
                icon: 'fa-circle-exclamation icon-selected',
                stateName: 'remove',
                onClick: function(control) {
                    clickOnCheckbox('#alerts');
                    control.state('add');
                },
            }],
                tagName: 'a'
        });

    var editBarBL = L.easyBar([
        stationButton,
        lightningButton,
        alertButton,
    ], {position: 'bottomleft'});
    editBarBL.addTo(map);


    var dataBtn = 
        L.easyButton({
            states: [{
                icon: 'fa-server',
                stateName: 'add',
                onClick: function(control) {
                    clickOnCheckbox('#datacheck');
                    checkIfRadarStation();
                    control.state('remove');
                }
            }, {
                icon: 'fa-server icon-selected',
                stateName: 'remove',
                onClick: function(control) {
                    console.log('sus');
                    // control.state('add');
                },
            }],
                tagName: 'a'
        });
    var animReflBtn = 
        L.easyButton('fa-hurricane anim-refl', function(btn, map) {
            if ($(".anim-refl").hasClass("icon-selected-removable")) {
                // if the button is clicked while the layer is being displayed
                $(".anim-refl").removeClass("icon-selected-removable");
            } else {
                // remove blue from all other selected buttons
                $(".icon-selected-removable").removeClass("icon-selected-removable");
                // add blue to this button
                $(".anim-refl").addClass("icon-selected-removable");
            }
            clickOnCheckbox('#reflectivity');
        }, {tagName: 'a'});
    var animVelBtn = 
        L.easyButton('fa-gauge anim-vel', function(btn, map) {
            if ($(".anim-vel").hasClass("icon-selected-removable")) {
                // if the button is clicked while the layer is being displayed
                $(".anim-vel").removeClass("icon-selected-removable");
            } else {
                // remove blue from all other selected buttons
                $(".icon-selected-removable").removeClass("icon-selected-removable");
                // add blue to this button
                $(".anim-vel").addClass("icon-selected-removable");
            }
            clickOnCheckbox('#velocity');
        }, {tagName: 'a'});

    var editBarTR = L.easyBar([
        dataBtn,
        animReflBtn,
        animVelBtn,
    ], {position: 'topright'});
    editBarTR.addTo(map);
    animReflBtn.disable();
    animVelBtn.disable();

    var stillReflBtn = 
        L.easyButton('fa-hurricane still-refl', function(btn, map) {
            if ($(".still-refl").hasClass("icon-selected-removable")) {
                // if the button is clicked while the layer is being displayed
                $(".still-refl").removeClass("icon-selected-removable");
            } else {
                // remove blue from all other selected buttons
                $(".icon-selected-removable").removeClass("icon-selected-removable");
                // add blue to this button
                $(".still-refl").addClass("icon-selected-removable");
            }
            clickOnCheckbox('#singimgreflectivity');
            checkIfRadarStation();
        }, {tagName: 'a'});
    var stillVelBtn = 
        L.easyButton('fa-gauge still-vel', function(btn, map) {
            if ($(".still-vel").hasClass("icon-selected-removable")) {
                // if the button is clicked while the layer is being displayed
                $(".still-vel").removeClass("icon-selected-removable");
            } else {
                // remove blue from all other selected buttons
                $(".icon-selected-removable").removeClass("icon-selected-removable");
                // add blue to this button
                $(".still-vel").addClass("icon-selected-removable");
            }
            clickOnCheckbox('#singimgvelocity');
            checkIfRadarStation();
        }, {tagName: 'a'});
    var stillEchoTopsBtn = 
        L.easyButton('fa-cloud-arrow-up still-echotops', function(btn, map) {
            if ($(".still-echotops").hasClass("icon-selected-removable")) {
                // if the button is clicked while the layer is being displayed
                $(".still-echotops").removeClass("icon-selected-removable");
            } else {
                // remove blue from all other selected buttons
                $(".icon-selected-removable").removeClass("icon-selected-removable");
                // add blue to this button
                $(".still-echotops").addClass("icon-selected-removable");
            }
            clickOnCheckbox('#singimgechotops');
            checkIfRadarStation();
        }, {tagName: 'a'});
    var stillVILBtn = 
        L.easyButton('fa-droplet still-vil', function(btn, map) {
            if ($(".still-vil").hasClass("icon-selected-removable")) {
                // if the button is clicked while the layer is being displayed
                $(".still-vil").removeClass("icon-selected-removable");
            } else {
                // remove blue from all other selected buttons
                $(".icon-selected-removable").removeClass("icon-selected-removable");
                // add blue to this button
                $(".still-vil").addClass("icon-selected-removable");
            }
            clickOnCheckbox('#singimgvil');
            checkIfRadarStation();
        }, {tagName: 'a'});

    var editBarTRStill = L.easyBar([
        stillReflBtn,
        stillVelBtn,
        stillEchoTopsBtn,
        stillVILBtn
    ], {position: 'topright'});
    editBarTRStill.addTo(map);


    // https://stackoverflow.com/a/57961941
    L.Control.textbox = L.Control.extend({
        onAdd: function(map) {
            var text = L.DomUtil.create('div');
            text.id = "info_text";
            text.innerHTML = "\
                <div style='\
                width: auto;\
                padding: 5px 10px;\
                height: auto;\
                /* line-height: 25px; */\
                background-color: white;\
                border: 1px solid black;\
                border-radius: 5px;\
                '>\
                    <b><div id='stationThing'></div></b>\
                    <div id='timestampThing'></div>\
                    <i><b><div id='additionalInfo' style='\
                        display: none;\
                        color:rgb(0, 132, 255);\
                        cursor: pointer\
                    '>Click Me</div></b></i>\
                    <i><div id='recievedOnMapDiv'><div id='recievedOnMap'></div></div></i>\
                    <div id='mapZipDisplay' style='display: none'></div>\
                    <div id='mapCoordsDisplay' style='display: none'></div>\
                </div>"
            return text;
        },
        onRemove: function(map) {
            // Nothing to do here
        }
    });
    L.control.textbox = function(opts) { return new L.Control.textbox(opts);}
    L.control.textbox({ position: 'topcenter' }).addTo(map);
    document.getElementById('stationThing').innerHTML = document.getElementById('statti').innerHTML;

    var additionalInfoDiv = document.getElementById('additionalInfo');
    if (document.getElementById('radstatzipList').value != '') {
        additionalInfoDiv.style.display = 'block';
    }
    additionalInfoDiv.addEventListener("click", function() {
        if (mapZipDisplay.style.display == 'none') {
            console.log('this is mouse over');
            document.getElementById('mapZipDisplay').innerHTML = document.getElementById('radstatzip').innerHTML;
            document.getElementById('mapCoordsDisplay').innerHTML = document.getElementById('radstatcoords').innerHTML;
            document.getElementById('recievedOnMapDiv').style.display = 'block';
            document.getElementById('mapZipDisplay').style.display = 'block';
            document.getElementById('mapCoordsDisplay').style.display = 'block';
        } else if (mapZipDisplay.style.display == 'block') {
            console.log('this is mouse out');
            document.getElementById('recievedOnMapDiv').style.display = 'none';
            document.getElementById('mapZipDisplay').style.display = 'none';
            document.getElementById('mapCoordsDisplay').style.display = 'none';
        }
    });


    // L.Control.Button = L.Control.extend({
    //     options: {
    //         position: 'topleft'
    //     },
    //     onAdd: function (map) {
    //         var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
    //         var button = L.DomUtil.create('a', 'leaflet-control-button', container);
    //         button.innerHTML = '<i class="fa fa-globe"></i>';
    //         $(container).css("cursor", "pointer");
    //         L.DomEvent.disableClickPropagation(button);
    //         L.DomEvent.on(button, 'click', function(){
    //             console.log('click');
    //         });
    //         container.title = "Title";
    //         return container;
    //     },
    //     onRemove: function(map) {},
    // });
    // var control = new L.Control.Button()
    // control.addTo(map);

    // var applemapsLayer = 
    // L.tileLayer.wms('https://{s}.apple-mapkit.com/ti/tile?x={x}&y={y}&z={z}', {
    //     attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    //     style: 0,
    //     size: 1,
    //     scale: 2,
    //     lang: 'en',
    //     v: 2205152,
    //     poi: 0,
    //     accessKey: '1652643964_2363654940696277058_/_IErJ36c3BiIJd8BvPMpOP6/YYd6BZyKTYozWSrYUbpc=',
    //     labels: 1,
    //     tint: 'dark',
    //     emphasis: 'standard',
    //     subdomains: ['cdn','cdn1','cdn2','cdn3','cdn4']
    // }).addTo(map);

    var tileLayers = L.layerGroup([]);
    var allLayerGroup = L.layerGroup();
    var markerLayerGroup = L.layerGroup().addTo(map);
    var locationMarkerLayerGroup = L.layerGroup().addTo(map);
    var alertLayerGroup = L.layerGroup().addTo(map);
    var geojsonAlertLayerGroup = L.layerGroup().addTo(map);
    var lightningLayerGroup = L.layerGroup().addTo(map);
    var productLayerGroup = L.layerGroup().addTo(map);
    var alertClusterGroup = L.markerClusterGroup().addTo(map);

    var radarIcon = L.icon({
        iconUrl: '/icons/radar.png',
    
        iconSize: [35, 35], // size of the icon
        popupAnchor: [0, -30] // point from which the popup should open relative to the iconAnchor
    });

    var redMarkerIcon = L.icon({
        iconUrl: "/icons/leaflet/RED_marker-icon.png",
        iconRetinaUrl: "/icons/leaflet/RED_marker-icon-2x.png",
        shadowUrl: "/icons/leaflet/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
    });
    var greenMarkerIcon = L.icon({
        iconUrl: "/icons/leaflet/GREEN_marker-icon.png",
        iconRetinaUrl: "/icons/leaflet/GREEN_marker-icon-2x.png",
        shadowUrl: "/icons/leaflet/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
    });
    var yellowMarkerIcon = L.icon({
        iconUrl: "/icons/leaflet/YELLOW_marker-icon.png",
        iconRetinaUrl: "/icons/leaflet/YELLOW_marker-icon-2x.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
    });

    function showMarkers() {
        document.getElementById('stationLabel').innerHTML = "<i>Loading...</i>"
        $.getJSON('/weather/json/wdg_radar-stations_05042022.json', function(data) {
            for (let n = 0; n < 208; n++) {
                var radarStation = data.features[n].properties.id;
                var latt = data.features[n].geometry.coordinates[1];
                var lonn = data.features[n].geometry.coordinates[0];
                var stationType = data.features[n].properties.stationType;
                
                if (stationType == "WSR-88D") {
                    //L.marker([latt, lonn], {icon: radarIcon}).addTo(markerLayerGroup)
                    //L.marker([latt, lonn]).addTo(markerLayerGroup)
                    //    .bindPopup(radarStation);

                    L.marker([latt, lonn]).addTo(markerLayerGroup)
                        .bindPopup("<div><b><div style='cursor: pointer' id='radarStationDiv' onclick='getStation()'>" + radarStation + "</div></b><i>Still loading station data...</i></div>");
                }
            }
            $.getJSON('https://api.weather.gov/radar/stations', function(data) {
                markerLayerGroup.clearLayers();
                for (let n = 0; n < 208; n++) {
                    var radarStation = data.features[n].properties.id;
                    var latt = data.features[n].geometry.coordinates[1];
                    var lonn = data.features[n].geometry.coordinates[0];
                    var stationType = data.features[n].properties.stationType;

                    var radstatLastReceivedData = new Date(data.features[n].properties.latency.levelTwoLastReceivedTime);
                    var currentTimeForStatus = new Date();
                    var timeDiff = currentTimeForStatus - radstatLastReceivedData;
                    var formattedLastReceivedData = printFancyTime(radstatLastReceivedData);
                    
                    if (stationType == "WSR-88D") {
                        //L.marker([latt, lonn], {icon: radarIcon}).addTo(markerLayerGroup)
                        //L.marker([latt, lonn]).addTo(markerLayerGroup)
                        //    .bindPopup(radarStation);

                        if (timeDiff >= 900000) {
                            //$('body').append
                            var isRadarDown = true;
                            L.marker([latt, lonn], {icon: redMarkerIcon}).addTo(markerLayerGroup)
                                .bindPopup("<div><b><div style='cursor: pointer' id='downRadarStation' onclick='getDownStation()'>" + radarStation + "</div></b><div style='color: rgb(226, 0, 0)'>OFFLINE</div><div>" + formattedLastReceivedData + "</div></div>");
                        } else if (timeDiff < 900000) {
                            //$('body').append
                            var isRadarDown = false;
                            L.marker([latt, lonn], {icon: greenMarkerIcon}).addTo(markerLayerGroup)
                                .bindPopup("<div><b><div style='cursor: pointer' id='upRadarStation' onclick='getUpStation()'>" + radarStation + "</div></b><div style='color: rgb(16, 160, 10)'>ONLINE</div><div>" + formattedLastReceivedData + "</div></div>");
                        }
                    }
                }
            }).done(function (result) {
                console.log("finished station");
                document.getElementById('stationLabel').innerHTML = "Stations"
            });
        });
    }
    //showMarkers();



    /*
    * SHOWS ALL OF THE ALERT MARKERS
    */
    function showAlertMarkers() {
        document.getElementById('alertsLabel').innerHTML = "<i>Loading...</i>";
        $.getJSON('https://api.weather.gov/alerts/active', function(data) {
            for (let n = 0; n < data.features.length; n++) {
                if (data.features[n].geometry != null) {
                    //console.log(data.features[n].properties.event + ", " + data.features[n].properties.senderName);
                    var alertLat = data.features[n].geometry.coordinates[0][0][1];
                    var alertLon = data.features[n].geometry.coordinates[0][0][0];
                    var alertEvent = data.features[n].properties.event;
                    var alertSenderName = data.features[n].properties.senderName;
                    var alertHeadline = data.features[n].properties.headline;
                    var alertDescription = data.features[n].properties.description;
                    var alertInstruction = data.features[n].properties.instruction;

                    var alertID = data.features[n].id;
                    var alertWMOidenifier = data.features[n].properties.parameters.WMOidentifier;
                    var alertVTEC = data.features[n].properties.parameters.VTEC;
                    var alertNWSheadline = "No headline for this alert."

                    if (alertInstruction == null) {
                        alertInstruction = "No instruction for this alert."
                    }

                    if (data.features[n].properties.parameters.hasOwnProperty('NWSheadline')) {
                        alertNWSheadline = data.features[n].properties.parameters.NWSheadline;
                    }

                    var alertSeverity = data.features[n].properties.severity;
                    var alertUrgency = data.features[n].properties.urgency;

                    var alertSentTime = new Date(data.features[n].properties.sent);
                    var alertEffectiveTime = new Date(data.features[n].properties.effective);
                    var alertOnsetTime = new Date(data.features[n].properties.onset);
                    var alertExpiresTime = new Date(data.features[n].properties.expires);
                    var alertEndsTime = new Date(data.features[n].properties.ends);

                    var alertPopupContent = "<div><b>" + alertEvent + "<br>" + alertSenderName + "</b><br>\
                        <br><b>Send Time: </b>" + printFancyTime(alertSentTime) + "\
                        <br><b>Effective Time: </b>" + printFancyTime(alertEffectiveTime) + "\
                        <br><b>Onset Time: </b>" + printFancyTime(alertOnsetTime) + "\
                        <br><b>Expires Time: </b>" + printFancyTime(alertExpiresTime) + "\
                        <br><b>Ends Time: </b>" + printFancyTime(alertEndsTime) + "\
                        <br><br><b><i>" + alertSeverity + "</i></b>, <b><i>" + alertUrgency + "</i></b><br><br>\
                        <b>WMO Identifier:</b> " + alertWMOidenifier + "<br>\
                        <b>VTEC:</b> " + alertVTEC + "<br>\
                        <b>NWS Headline:</b> " + alertNWSheadline + "<br>\
                        <b>ID:</b> " + alertID + "<br><br>\
                        <b>Headline:</b> " + alertHeadline + "<br>\
                        <b>Description:</b> " + alertDescription + "<br>\
                        <b>Instructions:</b> " + alertInstruction + "</div>";
                    var alertPopup = L.popup({maxHeight: 100}).setContent(alertPopupContent);

                    //L.marker([alertLat, alertLon], {icon: yellowMarkerIcon}).addTo(alertLayerGroup)
                    //    .bindPopup(alertPopup);
                    var allCoordinates = data.features[n].geometry.coordinates[0];
                    var coordinateArray = [];

                    for (let x = 0; x < Object.keys(allCoordinates).length; x++) {
                        coordinateArray.push(allCoordinates[x].reverse());
                    }

                    var polygon = L.polygon([
                        coordinateArray
                    ]).addTo(alertLayerGroup).bindPopup(alertPopup);

                    if (alertUrgency == "Future") {
                        // grey
                        polygon.setStyle({color: '#838383'});
                    } else if (alertUrgency == "Expected") {
                        // green
                        polygon.setStyle({color: '#5cc32a'});
                    } else if (alertUrgency == "Immediate") {
                        // blue
                        polygon.setStyle({color: '#327cff'});
                    }
                } else if (data.features[n].geometry = 'null') {
                    $.getJSON(data.features[n].properties.affectedZones[0], function(data2) {
                        var alertEvent = data.features[n].properties.event;
                        var alertSenderName = data.features[n].properties.senderName;
                        var alertHeadline = data.features[n].properties.headline;
                        var alertDescription = data.features[n].properties.description;
                        var alertInstruction = data.features[n].properties.instruction;

                        var alertID = data.features[n].id;
                        var alertWMOidenifier = data.features[n].properties.parameters.WMOidentifier;
                        var alertVTEC = data.features[n].properties.parameters.VTEC;
                        var alertNWSheadline = "No headline for this alert."

                        if (alertInstruction == null) {
                            alertInstruction = "No instruction for this alert."
                        }

                        if (data.features[n].properties.parameters.hasOwnProperty('NWSheadline')) {
                            alertNWSheadline = data.features[n].properties.parameters.NWSheadline;
                        }

                        var alertSeverity = data.features[n].properties.severity;
                        var alertUrgency = data.features[n].properties.urgency;

                        var alertSentTime = new Date(data.features[n].properties.sent);
                        var alertEffectiveTime = new Date(data.features[n].properties.effective);
                        var alertOnsetTime = new Date(data.features[n].properties.onset);
                        var alertExpiresTime = new Date(data.features[n].properties.expires);
                        var alertEndsTime = new Date(data.features[n].properties.ends);

                        var alertPopupContent = "<div><b>\
                            <a style='cursor: pointer' onclick='clickOnPolygonBtn()'>Draw Polygon</a>&nbsp;&nbsp;&nbsp;&nbsp;\
                            <a style='cursor: pointer' onclick='clearPolygons()'>Clear</a>\
                            <div id='noPolygonPopup'>" + alertEvent + "<br>" + alertSenderName + "</b><br>\
                            <br><b>Send Time: </b>" + printFancyTime(alertSentTime) + "\
                            <br><b>Effective Time: </b>" + printFancyTime(alertEffectiveTime) + "\
                            <br><b>Onset Time: </b>" + printFancyTime(alertOnsetTime) + "\
                            <br><b>Expires Time: </b>" + printFancyTime(alertExpiresTime) + "\
                            <br><b>Ends Time: </b>" + printFancyTime(alertEndsTime) + "\
                            <br><br><b><i>" + alertSeverity + "</i></b>, <b><i>" + alertUrgency + "</i></b><br><br>\
                            <b>WMO Identifier:</b> " + alertWMOidenifier + "<br>\
                            <b>VTEC:</b> " + alertVTEC + "<br>\
                            <b>NWS Headline:</b> " + alertNWSheadline + "<br>\
                            <b>ID:</b><div id='alertNameDiv'> " + alertID + "</div><br>\
                            <b>Headline:</b> " + alertHeadline + "<br>\
                            <b>Description:</b> " + alertDescription + "<br>\
                            <b>Instructions:</b> " + alertInstruction + "<div></div>";
                        var alertPopup = L.popup({maxHeight: 100}).setContent(alertPopupContent);

                        var singleCoordinateLat = data2.geometry.coordinates[0][0][1];
                        var singleCoordinateLon = data2.geometry.coordinates[0][0][0];
                        var coordinateArray = [];

                        var alertMarker = 
                        L.marker([singleCoordinateLat, singleCoordinateLon], {icon: yellowMarkerIcon})
                        .bindPopup(alertPopup)
                        alertClusterGroup.addLayer(alertMarker)

                        //alertMarker.on('popupclose', (e)=>{
                        //    console.log("closed");
                        //    geojsonAlertLayerGroup.clearLayers();
                        //})
                        //map.addLayer(alertClusterGroup);
                    });
                }
            }
        }).done(function (result) {
            console.log("finished alerts");
            document.getElementById('alertsLabel').innerHTML = "Alerts <button id='modalBtn' onclick='toggleAlertModal()'>?</button>"
        });
    }




    //var nexradLayer = 
    //L.tileLayer.wms("https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0q.cgi", {
    //    layers: 'nexrad-n0q-900913',
    //    format: 'image/png',
    //    transparent: true,
    //    attribution: "Weather data © 2012 IEM Nexrad"
    //}).addTo(map);

    function setIsuLayers(theProduct) {
        var fullScan = document.getElementById('isuarrfull').innerHTML.split(',');
        if (theProduct == 'N0S') {
            var fullScan = document.getElementById('isuarrfullvel').innerHTML.split(',');
        } else if (theProduct == 'N0B') {
            var fullScan = document.getElementById('isuarrfull').innerHTML.split(',');
        }
        fullScan.reverse();
        console.log(theProduct + " array:")
        console.log(fullScan);

        var theYear = [];
        var theMonth = [];
        var theDay = [];
        var theTime = [];

        for (var u = 0; u < 11; u++) {
            theYear.push(fullScan[u].substring(0, 4));
            theMonth.push(fullScan[u].substring(5, 7));
            theDay.push(fullScan[u].substring(8, 10));
            theTime.push(fullScan[u].substring(11, 16).replace(/:/g, ''));
        }

        var radarLayers = [];
        for (var i = 0; i <= 11; i++) {
            radarLayers[i] = L.tileLayer.wms('https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/ridge.cgi', {
                service: 'wms',
                version: '1.1.1',
                request: 'GetMap',
                format: 'png',
                transparent: true,
                sector: document.getElementById('statti').innerHTML.substring(1),
                prod: theProduct,
                layers: 'single-archive',
                year: theYear[i],
                month: theMonth[i],
                day: theDay[i],
                time: theTime[i],
                opacity: 0.0
            });
            //console.log(layer);
            tileLayers.addLayer(radarLayers[i]);
            radarLayers[i].addTo(productLayerGroup);
        }
        return radarLayers;
    }

    function normalLayers() {
        var timeStampe = 
        ['', '-m05m', '-m10m', '-m15m', '-m20m', '-m25m', '-m30m', '-m35m', '-m40m', '-m45m', '-m50m'];
        var minutesToSubtract = 
        [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
        timeStampe.reverse();
        minutesToSubtract.reverse();

        var radarLayers = [];
        for (let i = 0; i <= 11; i++) {
            if (i < 11) {
                var layer = 'nexrad-n0q-900913' + timeStampe[i];
                radarLayers[i] = L.tileLayer.wms("https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0q.cgi", {
                    layers: layer,
                    format: 'image/png',
                    transparent: true,
                    opacity: 0.0,
                });
                //console.log(layer);
                tileLayers.addLayer(radarLayers[i]);
                radarLayers[i].addTo(productLayerGroup);
            }
            if (i == 11) {
                var layer = 'nexrad-n0q-900913'
                radarLayers[11] = L.tileLayer.wms("https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0q.cgi", {
                layers: layer,
                format: 'image/png',
                transparent: true,
                opacity: 0.0,
            });
            //console.log(layer);
            tileLayers.addLayer(radarLayers[i]);
            radarLayers[i].addTo(productLayerGroup);
            }
        }
        return {radarLayers, minutesToSubtract};
    }

    function normal() {
        var normalDataReturned = normalLayers();
        radarLayers = normalDataReturned.radarLayers;
        minutesToSubtract = normalDataReturned.minutesToSubtract;
    }
    

    function isu(isuPro) {
        var normalDataReturned = setIsuLayers(isuPro);
        radarLayers = normalDataReturned;
    }

    normal();

    var isTrashSelected = false;
    var trashButton = 
        L.easyButton({
            states: [{
                icon: 'fa-trash',
                stateName: 'add',
                onClick: function(control) {
                    allLayerGroup.clearLayers();
                    map.eachLayer(function (layer) {
                        if (layer != osmLayer) {
                            map.removeLayer(layer);
                            allLayerGroup.addLayer(layer);
                        }
                    });
                    isTrashSelected = true;
                    control.state('remove');
                }
            }, {
                icon: 'fa-trash red-icon',
                stateName: 'remove',
                onClick: function(control) {
                    allLayerGroup.eachLayer(function (layer) {
                        map.addLayer(layer);
                    });
                    isTrashSelected = false;
                    control.state('add');
                },
            }],
                tagName: 'a',
                position: 'topleft'
        }).addTo(map);

        map.on('zoomstart', function() {
            if (isTrashSelected == false) {
                allLayerGroup.clearLayers();
                map.eachLayer(function (layer) {
                    if (layer != osmLayer) {
                        map.removeLayer(layer);
                        allLayerGroup.addLayer(layer);
                    }
                });
            }
        });
        map.on('zoomend', function() {
            if (isTrashSelected == false) {
                allLayerGroup.eachLayer(function (layer) {
                    map.addLayer(layer);
                });
            }
        });

    var slider = L.control.slider(function(value) {
        oopaac = value;
        $('#opacitySlider').val(value);
        updateLayer($('#timestampSlider').val());
    }, {
        min: 0,
        max: 1,
        value: 1,
        step: 0.1,
        size: '250px',
        orientation: 'horizontal',
        id: 'slider',
        position: 'bottomright',
        logo: 'OP',
        syncSlider: true
    }).addTo(map);
    var tsSlider = L.control.slider(function(value) {
        updateLayer(value);
    }, {
        min: 0,
        max: 10,
        value: 10,
        step: 1,
        size: '250px',
        orientation: 'horizontal',
        id: 'slider',
        position: 'bottomright',
        logo: 'TS',
        syncSlider: true
    }).addTo(map);

    var timestampSlider = document.querySelector("#timestampSlider");
    timestampSlider.addEventListener("click", function() {
        tsSlider.slider.value = this.value;
        tsSlider._updateValue();
    });

    var pausePlayButton = 
        L.easyButton({
            states: [{
                icon: 'fa-play green-icon',
                stateName: 'add',
                onClick: function(control) {
                    $('#play').trigger('click');
                    control.state('remove');
                }
            }, {
                icon: 'fa-pause red-icon',
                stateName: 'remove',
                onClick: function(control) {
                    $('#pause').trigger('click');
                    control.state('add');
                },
            }],
                tagName: 'a',
                position: 'bottomright'
        }).addTo(map);

    var tileProgressBarControl = new L.Control.TileLoadingProgress({
        leafletElt: tileLayers,
        position: 'bottomcenter'
    }).addTo(map);

    function setImageFromCenter(zoomLevel, imagePath) {
        var initMapWidth = document.getElementById("map").style.width;
        var initMapHeight = document.getElementById("map").style.height;

        // if the map is fullscreen, exit it
        var yes;
        if (map.isFullscreen()) {
            yes = true;
        }
        if (yes) {
            map.toggleFullscreen(fullscreenOptions);
            console.log("exited")
        }

        // sets the map's width and height to be the same as the user's value
        $("#map").css("width", zoomLevel + "px");
        $("#map").css("height", zoomLevel + "px");
        map.invalidateSize();

        // sets the image overlay to the map's bounds
        var theSquareBounds = map.getBounds();
        L.imageOverlay(imagePath, theSquareBounds).addTo(lightningLayerGroup);

        // resets the map's initial dimensions
        $("#map").css("height", initMapHeight);
        $("#map").css("width", "auto");
        map.invalidateSize();

        // if the map was fullscreen, re-enter it
        if (yes) {
            map.toggleFullscreen(fullscreenOptions);
            console.log("entered")
        }
    }
    //setImageFromCenter(950, '/weather/nexrad/radar.png');

    function showLightning() {
        var lightningLayer = 
        L.tileLayer('https://tiles.lightningmaps.org/?x={x}&y={y}&z={z}&s=256', {
        }).addTo(lightningLayerGroup);
    }

    function showProduct(stationToShow, product) {
        var velocityLayer = 
        L.tileLayer('https://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/ridge::{station}-{product}-0/{z}/{x}/{y}.png', {
            station: stationToShow,
            product: product
        });
        tileLayers.addLayer(velocityLayer);
        velocityLayer.addTo(productLayerGroup);
    }

    /*
    * hvil for vil as product
    * bref_raw for base reflectivity
    */
    function wdgProduct(stationToShow, product, theOpacity) {
        var urlToGet = `https://opengeo.ncep.noaa.gov/geoserver/${stationToShow.toLowerCase()}/${stationToShow.toLowerCase()}_${product}/ows?`;
        var theService = `${stationToShow.toLowerCase()}_${product}`;
        var wdgProductLayer = 
        L.tileLayer.wms(urlToGet, {
            SERVICE: 'WMS',
            LAYERS: theService,
            format: 'image/png',
            transparent: true
        });
        tileLayers.addLayer(wdgProductLayer);
        wdgProductLayer.addTo(productLayerGroup);
        wdgProductLayer.setOpacity(theOpacity);
    }

    $('#zoomSlider').val(zoom);
    //nexradLayer.setOpacity(opac);
    //$('#opacitySlider').val(opac);
    oopaac = 1;
    $('#opacitySlider').val(oopaac);
    $('#timestampSlider').val(0);
    $('#lightning').prop('checked', false);
    $('#alerts').prop('checked', false);
    $('#labels').prop('checked', false);
    function clearProductCheckboxes() {
        $('#reflectivity').prop('checked', false);
        $('#velocity').prop('checked', false);
    }
    clearProductCheckboxes();
    function clearSingImgProductCheckboxes() {
        $('#singimgreflectivity').prop('checked', false);
        $('#singimgvelocity').prop('checked', false);
        $('#singimgechotops').prop('checked', false);
        $('#singimgvil').prop('checked', false);
    }
    clearSingImgProductCheckboxes();
    document.getElementById('data').style.display = 'block';
    document.getElementById('prods').style.display = 'none';

    document.getElementById('singimg').style.display = 'block';
    document.getElementById('singimgprods').style.display = 'none';

    document.getElementById('isuloaded').innerHTML = '0 bytes';
    //markerLayerGroup.clearLayers();

    //var labelCheckbox = document.getElementById("labels");
    //if (labelCheckbox.checked) {
    //    showMarkers();
    //} else {
    //    markerLayerGroup.clearLayers();
    //}

    /*
    *
    * HELPFUL CODE:
    * https://www.eldoradoweather.com/scripts/weather-scripts.php
    * https://www.eldoradoweather.com/current/misc/maproom/leaflet/leaflet-radar.php
    *
    */
    var msPerMinute = 60000;
    function updateLayer(layernum) {
        // clears all previous layers
        radarLayers.map(function(layer){ layer.setOpacity(0)});
        // gets the time to display, which is the current time minus however many
        // minutes back this frame is from
        var displayedRadarTime = new Date(currentTime - minutesToSubtract[layernum] * msPerMinute);
        // formats and prints that time
        if ($('#reflectivity:checked').val() == 'on') {
            var scen = document.getElementById('isuarrfull').innerHTML.split(',');
            scen.reverse();
            document.getElementById('ts').innerHTML = '<b>N0B</b> ' + printFancyTime(new Date(scen[layernum]));
            document.getElementById('timestampThing').innerHTML = '<b>N0B</b> ' + printFancyTime(new Date(scen[layernum]));
        } else if ($('#velocity:checked').val() == 'on') {
            var scen = document.getElementById('isuarrfullvel').innerHTML.split(',');
            scen.reverse();
            document.getElementById('ts').innerHTML = '<b>N0S</b> ' + printFancyTime(new Date(scen[layernum]));
            document.getElementById('timestampThing').innerHTML = '<b>N0S</b> ' + printFancyTime(new Date(scen[layernum]));
        } else {
            document.getElementById('ts').innerHTML = printFancyTime(displayedRadarTime);
            document.getElementById('timestampThing').innerHTML = printFancyTime(displayedRadarTime);
        }
        // set the initial layer's opacity value to the oopaac value which changes
        radarLayers[layernum].setOpacity(oopaac);
        // sets the timestamp slider to the loop index
        // this does NOT update the layer itself
        $('#timestampSlider').val(layernum);
        $('#timestampSlider').trigger('click');
        // logs the current frame index
        //console.log(layernum);
    }

    /*
    * PUTS THE FIRST IMAGE ON THE SCREEN
    */
    updateLayer(10);

    /*
    * CHANGES FRAMES BASED ON THE SLIDER VALUE
    */
    //var timestampSlider = document.querySelector("#timestampSlider");
    //timestampSlider.addEventListener("input", function() {
    //    window.clearTimeout(loopTimeout);
    //    updateLayer(this.value);
    //});

    /*
    * LOOPS EACH FRAME
    * https://stackoverflow.com/a/57815554/18758797
    */
    function nextStep(i) {
        // prints the right radar image based on the loop index
        updateLayer(i);

        if (i < 11) {
            var loopTimeout = window.setTimeout(nextStep, 700, ++i)

            // stops the loop when timestamp slider is pressed
            var timestampSlider = document.querySelector("#timestampSlider");
            timestampSlider.addEventListener("input", function() {
                window.clearTimeout(loopTimeout);
                updateLayer(this.value);
            });

            // stops the loop when submit button pressed
            var radstatzipSubmitBtn = document.getElementById('radstatzipSubmit');
            radstatzipSubmitBtn.addEventListener('click', function handleClick() {
                window.clearTimeout(loopTimeout);
            });

            var pauseBtn = document.getElementById('pause');
            pauseBtn.addEventListener('click', function handleClick() {
                window.clearTimeout(loopTimeout);
                //var stoppedFrame = $('#timestampSlider').val();
            });
            var playBtn = document.getElementById('play');
            playBtn.addEventListener('click', function handleClick() {
                window.clearTimeout(loopTimeout);
            });
        } else {
            // restart the loop
            nextStep(0);
        }
    }
    nextStep(10);
    $('#pause').trigger('click');

    var drawPolygonBtn = document.getElementById('polygon');
    drawPolygonBtn.addEventListener('click', function handleClick() {
        map.spin(true);
        var rCount = 0;
        var totalData = 0;
        console.log('pls draw polygon');
        var alertDiv = document.getElementById('alertNameDiv');
        var fullPopup = document.getElementById('noPolygonPopup');
        console.log(alertDiv.innerHTML);
        $.getJSON(alertDiv.innerHTML, function(data) {
            for (let r = 0; r < data.properties.affectedZones.length; r++) {
                var xhttpALERT = new XMLHttpRequest();
                xhttpALERT.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var data = JSON.parse(this.responseText);
                        var allCoordinates2 = data.geometry.coordinates[0];
                        var coordinateArray2 = [];
                        for (let x = 0; x < Object.keys(allCoordinates2).length; x++) {
                            coordinateArray2.push(allCoordinates2[x].reverse());
                        }

                        var alertPopupNoPolygon = L.popup({maxHeight: 100}).setContent(fullPopup.innerHTML);
                        var simplified = simplifyGeometry(coordinateArray2, 0.1);

                        //console.log(simplified);
                        var polygon2 = L.polygon([
                            simplified
                        ]).addTo(geojsonAlertLayerGroup)
                        .bindPopup(alertPopupNoPolygon);
                        // grey
                        polygon2.setStyle({color: '#838383'});
                    }
                };
                xhttpALERT.addEventListener('progress', function (e) {
                    //var percent_complete = (e.loaded / e.total) * 100;
                    //document.querySelector('#download-progress').style.width = percent_complete + '%';
                    if (document.getElementById('recieved').innerHTML == 'Waiting...') {
                        totalData = e.loaded;
                        document.getElementById('recieved').innerHTML = formatBytes(totalData);
                        document.getElementById('recievedOnMap').innerHTML = formatBytes(totalData);
                    } else if (document.getElementById('recieved').innerHTML != 'Waiting...') {
                        totalData = totalData + e.loaded;
                        document.getElementById('recieved').innerHTML = formatBytes(totalData);
                        document.getElementById('recievedOnMap').innerHTML = formatBytes(totalData);
                    }
                });
                xhttpALERT.addEventListener('load', function (e) {
                    rCount++;
                    console.log("r: " + rCount);
                    if (rCount == data.properties.affectedZones.length) {
                        console.log('done');
                        map.spin(false);
                    }
                });
                xhttpALERT.open("GET", data.properties.affectedZones[r], true);
                xhttpALERT.send();
            }
        });
    });
    var drawPolygonBtn = document.getElementById('clearpolygon');
    drawPolygonBtn.addEventListener('click', function handleClick() {
        geojsonAlertLayerGroup.clearLayers();
    });

    var playBtn = document.getElementById('play');
    playBtn.addEventListener('click', function handleClick() {
        nextStep(parseInt($('#timestampSlider').val()) + 1);
    });
    var backBtn = document.getElementById('back');
    backBtn.addEventListener('click', function handleClick() {
        updateLayer(parseInt($('#timestampSlider').val()) - 1);
    });
    var forwardBtn = document.getElementById('forward');
    forwardBtn.addEventListener('click', function handleClick() {
        updateLayer(parseInt($('#timestampSlider').val()) + 1);
    });
//
    var opacitySlider = document.querySelector("#opacitySlider");
    opacitySlider.addEventListener("input", function() {
        // universal opacity control variable
        oopaac = this.value;
        updateLayer($('#timestampSlider').val());
    });
//
    var zoomSlider = document.querySelector("#zoomSlider");
    zoomSlider.addEventListener("input", function() {
        map.setZoom(this.value);
        setTimeout(() => { map.setZoom(this.value) }, "200")
        //map.setZoom(this.value);
    });

    var labelCheckbox = document.querySelector("#labels");
    labelCheckbox.addEventListener("change", function() {
        if (this.checked) {
            showMarkers();
        } else {
            markerLayerGroup.clearLayers();
        }
    });

    var lightningCheckbox = document.querySelector("#lightning");
    lightningCheckbox.addEventListener("change", function() {
        if (this.checked) {
            showLightning();
        } else {
            lightningLayerGroup.clearLayers();
        }
    });

    var dataCheckbox = document.querySelector("#datacheck");
    dataCheckbox.addEventListener("change", function() {
        document.getElementById('datatext').innerHTML = "<i>Loading...</i>"
        document.getElementById('singimgprods').style.visibility = 'none';
        document.getElementById('prods').style.visibility = 'block';

        var actualTimeStampe = [];
        var curTime = new Date();
        // 120 = # of minutes in 2 hours
        var yesterday = new Date(curTime - 120 * 60000);
        // https://stackoverflow.com/a/68514256
        var isuCurTime = curTime.toISOString().substr(0,curTime.toISOString().indexOf(".")) + "Z";
        var isuYesterday = yesterday.toISOString().substr(0,yesterday.toISOString().indexOf(".")) + "Z";

        var wdgTsUrl = `https://opengeo.ncep.noaa.gov/geoserver/${document.getElementById('statti').innerHTML.toLowerCase()}/ows?service=wms&version=1.3.0&request=GetCapabilities`;
        var isuTsUrl = `https://mesonet.agron.iastate.edu/json/radar?operation=list&radar=${document.getElementById('statti').innerHTML.substring(1)}&product=N0S&start=${isuYesterday}&end=${isuCurTime}`;
        var isuTsReflUrl = `https://mesonet.agron.iastate.edu/json/radar?operation=list&radar=${document.getElementById('statti').innerHTML.substring(1)}&product=N0B&start=${isuYesterday}&end=${isuCurTime}`;
        // document.getElementById('wdgloaded').href = wdgTsUrl;
        // document.getElementById('isuloaded').href = isuTsUrl;

        var xhttpISU = new XMLHttpRequest();
        xhttpISU.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var resptxt = this.responseText;
                var data = JSON.parse(resptxt);

                var fullTsArray = [];
                for (let y = 1; y < 12; y++) {
                    var latestScan = data.scans[data.scans.length - y].ts;
                    fullTsArray.push(latestScan);
                }
                document.getElementById('isuarrfullvel').innerHTML = fullTsArray;
                //console.log(document.getElementById('isuarr').innerHTML.split(','));

                var xhttpISURefl = new XMLHttpRequest();
                xhttpISURefl.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        var resptxt = this.responseText;
                        var data = JSON.parse(resptxt);

                        var fullTsArray = [];
                        for (let y = 1; y < 12; y++) {
                            var latestScan = data.scans[data.scans.length - y].ts;
                            fullTsArray.push(latestScan);
                        }
                        document.getElementById('isuarrfull').innerHTML = fullTsArray;

                        $('#datacheck').prop('checked', false);
                        document.getElementById('datatext').innerHTML = "Products"
                        document.getElementById('data').style.display = 'none';
                        document.getElementById('prods').style.display = 'block';

                        animReflBtn.enable();
                        animVelBtn.enable();
                    }
                };
                xhttpISURefl.addEventListener('progress', function (l) {
                    document.getElementById('isureflloaded').innerHTML = formatBytes(l.loaded);
                    document.getElementById('isureflloaded').href = isuTsReflUrl;
                });
                xhttpISURefl.open("GET", isuTsReflUrl, true);
                xhttpISURefl.send();
            }
        };
        xhttpISU.addEventListener('progress', function (f) {
            //var percent_complete = (e.loaded / e.total) * 100;
            //document.querySelector('#download-progress').style.width = percent_complete + '%';
            document.getElementById('isuloaded').innerHTML = formatBytes(f.loaded);
            document.getElementById('isuloaded').href = isuTsUrl;
            //console.log("isu: " + formatBytes(f.loaded));
        });
        xhttpISU.open("GET", isuTsUrl, true);
        xhttpISU.send();
    });

    var singleImageCheckbox = document.querySelector('#singimgcheck');
    singleImageCheckbox.addEventListener("change", function() {
        $('#singimgcheck').prop('checked', false);
        document.getElementById('singimgprods').style.display = 'block';
        document.getElementById('singimg').style.display = 'none';
    });



    var reflectivityCheckbox = document.querySelector("#reflectivity");
    reflectivityCheckbox.addEventListener("change", function() {
        if (this.checked) {
            productLayerGroup.clearLayers();
            clearProductCheckboxes();
            clearSingImgProductCheckboxes();
            $('#reflectivity').prop('checked', true);
            //showProduct(document.getElementById('statti').innerHTML.substring(1), 'N0Q');
            //wdgProduct(document.getElementById('statti').innerHTML, "bref_raw", 1);

            isu('N0B');
            updateLayer(10);
        } else {
            productLayerGroup.clearLayers();
            normal();
            oopaac = 1;
            $('#opacitySlider').val(oopaac);
            updateLayer(10);
        }
    });
    var velocityCheckbox = document.querySelector("#velocity");
    velocityCheckbox.addEventListener("change", function() {
        if (this.checked) {
            productLayerGroup.clearLayers();
            clearProductCheckboxes();
            clearSingImgProductCheckboxes();
            $('#velocity').prop('checked', true);
            //showProduct(document.getElementById('statti').innerHTML.substring(1), 'N0S', 1);

            isu('N0S');
            oopaac = 1;
            $('#opacitySlider').val(oopaac);
            updateLayer(10);
        } else {
            productLayerGroup.clearLayers();
            normal();
            updateLayer(10);
        }
    });

    var singimgReflectivityCheckbox = document.querySelector("#singimgreflectivity");
    singimgReflectivityCheckbox.addEventListener("change", function() {
        if (this.checked) {
            productLayerGroup.clearLayers();
            clearProductCheckboxes();
            clearSingImgProductCheckboxes();
            $('#singimgreflectivity').prop('checked', true);
            //showProduct(document.getElementById('statti').innerHTML.substring(1), 'N0Q');
            showProduct(document.getElementById('statti').innerHTML.substring(1), 'N0B', 1);
        } else {
            productLayerGroup.clearLayers();
            normal();
            updateLayer(10);
        }
    });
    var singimgVelocityCheckbox = document.querySelector("#singimgvelocity");
    singimgVelocityCheckbox.addEventListener("change", function() {
        if (this.checked) {
            productLayerGroup.clearLayers();
            clearProductCheckboxes();
            clearSingImgProductCheckboxes();
            $('#singimgvelocity').prop('checked', true);
            //showProduct(document.getElementById('statti').innerHTML.substring(1), 'N0Q');
            showProduct(document.getElementById('statti').innerHTML.substring(1), 'N0S', 1);
        } else {
            productLayerGroup.clearLayers();
            normal();
            updateLayer(10);
        }
    });
    var singimgEchoTopsCheckbox = document.querySelector("#singimgechotops");
    singimgEchoTopsCheckbox.addEventListener("change", function() {
        if (this.checked) {
            productLayerGroup.clearLayers();
            clearProductCheckboxes();
            clearSingImgProductCheckboxes();
            $('#singimgechotops').prop('checked', true);
            //showProduct(document.getElementById('statti').innerHTML.substring(1), 'N0Q');
            wdgProduct(document.getElementById('statti').innerHTML, "beet", 1);
        } else {
            productLayerGroup.clearLayers();
            normal();
            updateLayer(10);
        }
    });
    var singimgVilCheckbox = document.querySelector("#singimgvil");
    singimgVilCheckbox.addEventListener("change", function() {
        if (this.checked) {
            productLayerGroup.clearLayers();
            clearProductCheckboxes();
            clearSingImgProductCheckboxes();
            $('#singimgvil').prop('checked', true);
            //showProduct(document.getElementById('statti').innerHTML.substring(1), 'N0Q');
            wdgProduct(document.getElementById('statti').innerHTML, "hvil", 0.5);
        } else {
            productLayerGroup.clearLayers();
            normal();
            updateLayer(10);
        }
    });



    var alertsCheckbox = document.querySelector("#alerts");
    alertsCheckbox.addEventListener("change", function() {
        if (this.checked) {
            document.getElementById('recievedDiv').style.display = 'block';
            // document.getElementById('recievedOnMapDiv').style.display = 'block';
            console.log("yes")
            showAlertMarkers();
        } else {
            alertLayerGroup.clearLayers();
            alertClusterGroup.clearLayers();
            geojsonAlertLayerGroup.clearLayers();
            document.getElementById('recievedDiv').style.display = 'none';
            // document.getElementById('recievedOnMapDiv').style.display = 'none';
        }
    });

    // code to get the zip code from a radar station
    var radstatzipSubmitBtn = document.getElementById('radstatzipSubmit');
    radstatzipSubmitBtn.addEventListener('click', function handleClick() {
        event.preventDefault();

        var radstat = document.querySelector('[name="radstatzipList"]').value;
        radstat = radstat.toUpperCase();
        $.getJSON('/weather/json/radarStations.json', function(data) {
            var zippy = data[radstat][0];
            var lati = data[radstat][1];
            var longi = data[radstat][2];

            //console.log(radstat + ": " + lati + ", " + longi);
            document.getElementById('statti').innerHTML = radstat;
            document.getElementById('radstatcoords').innerHTML = radstat + ": " + lati + ", " + longi;
            document.getElementById('radstatzip').innerHTML = zippy;
            if (map.isFullscreen()) {
                setView(lati, longi, 7, 1, true);
                console.log('it was fullscreen');
            } else if (map.isFullscreen() == false) {
                setView(lati, longi, 7, 1, false);
                console.log('it was not fullscreen');
            }



            /*
            *  Gets all of the weather information
            *  WEATHER.GOV
            *  RADAR STATUS
            */
            var modalTextTemplate = 
                '<div><b>Radar Status: <a id="radstat"></a></b></div> \
                <br> \
                <div><b>Radar Station: </b><a id="radstatStation"></a></div> \
                <div><b>Radar Name: </b><a id="radstatName"></a></div> \
                <div><b>Data Last Received: </b><a id="radstatLastData"></a></div> \
                <br> \
                <div><b>Message ID: </b><a id="radstatMessageID"></a></div> \
                <div><b>Message Name: </b><a id="radstatMessageName"></a></div> \
                <br> \
                <div><b>Message Time: </b><a id="radstatMessageTime"></a></div> \
                <div style="white-space: pre-wrap;"><b>Message: </b><ul><a id="radstatMessage"></a></ul></div>'
            modalText.innerHTML = modalTextTemplate;

            var radstatURL = `https://api.weather.gov/radar/stations/${radstat}`;
            $.getJSON(radstatURL, function(data) {

                var radstatLastReceivedData = new Date(data.properties.latency.levelTwoLastReceivedTime);
                var currentTime = new Date();
                var timeDiff = currentTime - radstatLastReceivedData;

                var radstatELEM = document.getElementById('radstat');
                // if it has been 15 minutes (900000 ms) since last radar data, radar is down
                if (timeDiff >= 900000) {
                    var isRadarDown = true;
                    radstatELEM.style.color = 'rgb(226, 0, 0)';
                    document.getElementById('radstat').innerHTML = "OFFLINE";
                } else if (timeDiff < 900000) {
                    var isRadarDown = false;
                    radstatELEM.style.color = 'rgb(16, 160, 10)';
                    document.getElementById('radstat').innerHTML = "ONLINE";
                }

                document.getElementById('radstatStation').innerHTML = radstat;
                document.getElementById('radstatName').innerHTML = data.properties.name;
                document.getElementById('radstatLastData').innerHTML = printFancyTime(radstatLastReceivedData);


                var radmessageURL = `https://api.weather.gov/products/types/FTM/locations/${radstat.substring(1)}`;
                $.getJSON(radmessageURL, function(data) {

                    // THIS CODE IS TO REPLACE THE @ CHARACTERS WITH "AT"
                    // @ json to string
                    var stringjson = JSON.stringify(data);
                    // replace @ with AT
                    var stringjsonwithoutat = stringjson.replace(/@/g, 'AT');
                    // re-parse the AT json
                    var PARSEDstringjsonwithoutat = JSON.parse(stringjsonwithoutat);

                    var emptyJsonString = '{"ATcontext":{"ATversion":"1.1"},"ATgraph":[]}';

                    if (JSON.stringify(PARSEDstringjsonwithoutat) === emptyJsonString) {
                        console.log("has no message");
                        document.getElementById('radstatMessage').innerHTML = "No active message for this radar station.";
                        document.getElementById('radstatMessageID').innerHTML = "None";
                        document.getElementById('radstatMessageName').innerHTML = "None";
                        document.getElementById('radstatMessageTime').innerHTML = "None";
                    } else {
                        console.log("has message");
                        var msgURL = PARSEDstringjsonwithoutat.ATgraph[0].ATid;
                        $.getJSON(msgURL, function(data) {
                            var radstatMessageIssuanceTime = new Date(data.issuanceTime);
                            var radstatMessageText = data.productText;

                            // extract the text in between the \n\n sequences -
                            // that text is all we need
                            var middle = radstatMessageText.slice(
                                radstatMessageText.indexOf('\n\n') + 1,
                                radstatMessageText.lastIndexOf('\n\n'),
                            );

                            radstatMessageText.replace(/\n/g, '<br>');

                            document.getElementById('radstatMessageID').innerHTML = data.id;
                            document.getElementById('radstatMessageName').innerHTML = data.productName;
                            document.getElementById('radstatMessage').innerHTML = radstatMessageText;
                            document.getElementById('radstatMessageTime').innerHTML = printFancyTime(radstatMessageIssuanceTime);

                            console.log(radstatMessageText);
                        });
                    }
                });
            });



        });
    });
}
function getDownStation() {
    var downStationDiv = document.getElementById('downRadarStation');
    console.log(downStationDiv.innerHTML);
    document.getElementById('radstatzipList').value = downStationDiv.innerHTML;
    $('#radstatzipSubmit').trigger('click');
}
function getUpStation() {
    var upStationDiv = document.getElementById('upRadarStation');
    console.log(upStationDiv.innerHTML);
    document.getElementById('radstatzipList').value = upStationDiv.innerHTML;
    $('#radstatzipSubmit').trigger('click');
}
function getStation() {
    var stationDiv = document.getElementById('radarStationDiv');
    console.log(stationDiv.innerHTML);
    document.getElementById('radstatzipList').value = stationDiv.innerHTML;
    $('#radstatzipSubmit').trigger('click');
}

function setRadarStation(thingToSet) {
    document.getElementById('radstatzipList').value = thingToSet.toUpperCase();
    $('#radstatzipSubmit').trigger('click');
}

function clickOnPolygonBtn() {
    $('#polygon').trigger('click');
}
function clearPolygons() {
    $('#clearpolygon').trigger('click');
}

function clickOnCheckbox(divname) {
    $(divname).trigger('click');
}