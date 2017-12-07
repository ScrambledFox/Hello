/******************************************************************
*	Name    : getCurrentPosition function
*	Author  : Kony
*	Purpose : This function helps to get the current location
*******************************************************************/
function getPosition()
{
    var positionoptions = {timeout: 15000}; // 15 secs 
    kony.location.getCurrentPosition(successcallback, errorcallback, positionoptions);
} 

// Callback that is executed on success of getCurrentPosition function.
function successcallback(position)
{
    var geoPosition = "Latitude: " + position.coords.latitude;
    geoPosition = geoPosition + " Longitude: " + position.coords.longitude;
    geoPosition = geoPosition + " Altitude: " + position.coords.altitude;
    geoPosition = geoPosition + " Accuracy: " + position.coords.accuracy;
    geoPosition = geoPosition + " Altitude Accuracy: "+ position.coords.altitudeAccuracy;
    geoPosition = geoPosition + " Heading: " + position.coords.heading;
    geoPosition = geoPosition + " Speeding: " + position.coords.speeding;
    geoPosition = geoPosition + " Timestamp: " + position.timestamp;
    alert(geoPosition);
}

// Callback that is executed on error of getCurrentPosition function.
function errorcallback(positionerror)
{
    var errorMesg = "Error code: " + positionerror.code;
    errorMesg = errorMesg  + " message: " + positionerror.message;
    alert(errorMesg);
}