var currentLatitude = 0;
var currentLongitude = 0;

function successcallback1(position) {
	var geoPosition = "Latitude: " + position.coords.latitude;
	geoPosition = geoPosition + " Longitude: " + position.coords.longitude;
	geoPosition = geoPosition + " Altitude: " + position.coords.altitude;
	geoPosition = geoPosition + " Accuracy: " + position.coords.accuracy;
	geoPosition = geoPosition + " Altitude Accuracy: " + position.coords.altitudeAccuracy;
	geoPosition = geoPosition + " Heading: " + position.coords.heading;
	geoPosition = geoPosition + " Speeding: " + position.coords.speeding;
	geoPosition = geoPosition + " Timestamp: " + position.timestamp;
  	alert(geoPosition);
  
  	currentLatitude = position.coords.latitude;
  	currentLongitude = position.coords.longitude;
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