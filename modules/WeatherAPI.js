function GetLocationKey () {
  
  var client = new kony.net.HttpRequest();
  
  client.open(constants.HTTP_METHOD_GET, "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=1AroNNJ7AVX7tYlCcIRMFCCct1P44bbT&q=" + currentLatitude + "%2C" + currentLongitude + "&language=en-us&details=false&toplevel=false");
  
  client.onReadyStateChange = GetLocationKeyCallback;
  client.send();
}

var currentLocationKey = 0;

function GetLocationKeyCallback () {
  if(this.readyState == constants.HTTP_READY_STATE_DONE){
    for(var k in this.response){
      if(k == "Key"){
        currentLocationKey = this.response[k];
      }
    }
  } 
}