var currentLatitude = 0;
var currentLongitude = 100;
var currentLocationData = {lat:currentLatitude,lon:currentLongitude,name:"Current Location",desc:"CurrentLocation"};

function successcallback1(position) {
	var geoPosition = "Latitude: " + position.coords.latitude;
	geoPosition = geoPosition + " Longitude: " + position.coords.longitude;
	geoPosition = geoPosition + " Altitude: " + position.coords.altitude;
	geoPosition = geoPosition + " Accuracy: " + position.coords.accuracy;
	geoPosition = geoPosition + " Altitude Accuracy: " + position.coords.altitudeAccuracy;
	geoPosition = geoPosition + " Heading: " + position.coords.heading;
	geoPosition = geoPosition + " Speeding: " + position.coords.speeding;
	geoPosition = geoPosition + " Timestamp: " + position.timestamp;
  
  	currentLatitude = position.coords.latitude;
  	currentLongitude = position.coords.longitude;
  	currentLocationData = {lat:position.coords.latitude,lon:position.coords.longitude,name:"Current Location",desc:"CurrentLocation"};
}

function errorcallback1(positionerror) {
	lblTest.text = "working with watchPosition err call back";
	var errorMesg = "Error code: " + positionerror.code;
	errorMesg = errorMesg  + " message: " + positionerror.message;
	alert(errorMesg);
}

//error callback when the permission is denied.
function errorCallback(error) {
       if(error.code == kony.location.PERMISSION_DENIED){
       	alert("PERMISSON IS DENIED");
       }
}
  
var positionoptions = {maximumAge: 3000, minimumDistance: 5, minimumTime: 5000};
watchID = kony.location.watchPosition (successcallback1, errorcallback1, positionoptions);

var previousPin;
function UpdatedCurrentLocationPin () {
  currentLocationPin = {
      id : "currentPositionPin", // id is mandatory for every pin
      lat : currentLatitude,
      lon : currentLongitude,
      name : "Current Position",
      image : "location_pin_medium.png",
      focusImage:"location_pin.png",  //focus image will be shown while map pin selected
      desc: "You are here!",
      showCallout : false,
      meta: {
          color: "black",
          label: ""
      }
	};
  	
  	previousPin = currentLocationPin;
 	return currentLocationPin;
}

function UpdateCurrentLocationPin(){
	var currentLocationPin = UpdatedCurrentLocationPin();
  	var t = kony.application.getCurrentForm();
  	if(previousPin !== null){
      t.MainMap.removePin(previousPin);
    }
  	t.MainMap.addPin(currentLocationPin);
}

function RefreshCurrentPosition () {
  	//alert("Refreshing Position"); 				/// Just for testing purposes!
  	var t = kony.application.getCurrentForm();
    currentLocationData = {lat:currentLatitude,lon:currentLongitude,name:"Current Location",desc:"CurrentLocation"};
  	UpdateCurrentLocationPin();
    t.MainMap.navigateToLocation(currentLocationData, false, false);
}