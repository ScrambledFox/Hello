var currentWeatherSituation = "Unknown";

function GetWeatherData () {
  var client = new kony.net.HttpRequest();
  
  client.open(constants.HTTP_METHOD_GET, "http://api.openweathermap.org/data/2.5/weather?lat=" + currentLatitude + "&lon=" + currentLongitude + "&appid=9306a7ad6c2ca1e516889b67f7788691");
  
  client.onReadyStateChange = GetWeatherDataCallback;
  try{
  	client.send();
  }
  catch(error){
    alert(error.message);
  }
}

function GetWeatherDataCallback () {
  if(this.readyState == constants.HTTP_READY_STATE_DONE){
    for(var k in this.response){
      r = this.response[k];
      for(var k2 in r){
        r2 = r[k2];
        for(var k3 in r2){
          if(k3 == "main"){
            currentWeatherSituation = r2[k3];
            alert("The current weather situation is: " + currentWeatherSituation);
          }
        }
      }
    }
  }
}