
var user_info;
var message = "Framework for Internal Navigation and Discovery, Hypercube Platforms";
var id = null;
var learnCounter = 0;
var learnLimit = 100;
var progress = 0.0;


function getXMLHttp(){
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
        }
    else {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}

function Calculate(){
    try {
        var server = document.getElementById("ML").value + "/calculate" + "?group=" + user_info.group;
        var xmlhttp = getXMLHttp();
        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4){
                alert(xmlhttp.responseText);
            }
        }
        xmlhttp.open("GET", server);
        xmlhttp.send();
    }
    catch(err){
        alert(err);
    }
}

function SendWifiData(network_data){
    try {
        var server = document.getElementById("ML").value;
        if (document.getElementById("learn").checked) {
            server += "/learn"
        }
        else if (document.getElementById("track").checked) {
            server += "/track"
        }
        var data = {
            "group": document.getElementById("group").value,
            "username": document.getElementById("user").value,
            "password": "none",
            "location": document.getElementById("location").value,
            "time": Date.now(),
            "wifi-fingerprint": network_data
        }
        var xmlhttp = getXMLHttp();
        xmlhttp.onreadystatechange=function() {
            message = xmlhttp.responseText;
            if (xmlhttp.readyState==4 && xmlhttp.status == 200){

            }
        }
        xmlhttp.open("POST", server);
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send(JSON.stringify(data));
    }
    catch(err){
        alert(err);
        TrackWifiOff();
    }
}

function successCallback(networks){
    var network_data = []
    for (var i=0; i < networks.length; i++){
        network_data.push({"mac": networks[i].BSSID,"rssi": networks[i].level})
    }
    SendWifiData(network_data);
}

function errorCallback(response){
    var output = '';
    for (var property in response) {
      output += property + ': ' + response[property]+'; ';
    }
    //alert(output);
    //TrackWifiOff();
    message = output;
}

function TrackWifiOff(){
    if (id != null) {
        navigator.wifi.clearWatch(id);
        alert("trackig off: " + id);
        message = "trackig off: " + id;
        id = null;
    console.log(message)
    }
}

function TrackWifiOn(){
    // var frequency = parseInt(document.getElementById("seconds").value) * 1000;
    var frequency = 2.5 * 1000;
    id = navigator.wifi.watchAccessPoints(successCallback, errorCallback, {"frequency":frequency});
    alert("tracking on: " + id);
    message = "tracking on: " + id;
    console.log(message)
}

/*
function DisplayTime(){
    document.getElementById("time").innerHTML = document.getElementById("seconds").value;
}
*/




var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        app.addListeners();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    // ADD LISTENERS FOR BUTTONS
    addListeners: function(){
        document.getElementById("on").addEventListener("touchstart", TrackWifiOn);
        document.getElementById("off").addEventListener("touchstart", TrackWifiOff);
    }
};

app.initialize();

