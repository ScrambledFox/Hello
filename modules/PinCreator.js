
var lastCreatedPin;

function GenerateRandomID(){
  var randomID = (Math.round(Math.random() * 1000000)).toString();
  return randomID;
}

function CreatePin (id, latitude, longitude, name, description, imageSource, imageSourceFocus) {
  var randomPinID = id;
  newPin = {
	id : randomPinID, // id is mandatory for every pin
	lat : latitude,
	lon : longitude,
	name : name,
	image : imageSource,
	focusImage: imageSourceFocus,  //focus image will be shown while map pin selected
	desc: description,
	showCallout : false,
	meta: {
		color: "none",
		label: ""
	}
  };
  
  lastCreatedPin = newPin;
  return newPin;
}


var latt, long;
function SetLattLong (newLatt, newLong) {
  latt = newLatt;
  long = newLong;
}

function GetLattLong () {
  var data = new Array(latt, long);
  return data;
}

function UploadPinData (pinIndex, latitude, longitude, pinName, pinDescription, pinImageSource) {
  var postData = {
    "pinIndex": pinIndex,
    "latitude": latitude,
    "longitude": longitude,
    "pinTitle": pinName,
    "pinDescription": pinDescription,
    "pinImage": pinImageSource
  };
  
  try{
    GetHTTPClient("PostPin").send(postData);
    alert("Uploaded information");
  }
  catch (error){
    alert(error.message);
  }
}

function RenewPinsFromDB () {
  var client = GetHTTPClient("GetAllPins");
  client.onReadyStateChange = PinsDownloaded;
  
  var t = kony.application.getCurrentForm();
  
  try{
    client.send();
  }
  catch(error){
    alert(error.message);
  }
}

function PinsDownloaded () {
  if(this.readyState == constants.HTTP_READY_STATE_DONE){     
    for(var k in this.response){
      r = this.response[k];
      var pinIndex;
      var pinName;
      var pinDescription;
      var latitude;
      var longitude;
      var pinImageSrc;
      for(var k2 in r) {
        if(k2 == "pinIndex")
          pinIndex = r[k2];
        if(k2 == "pinTitle")
          pinName = r[k2];
        if(k2 == "pinDescription")
          pinDescription = r[k2];
        if(k2 == "latitude")
          latitude = r[k2];
        if(k2 == "longitude")
          longitude = r[k2];
        if(k2 == "pinImage")
          pinImageSrc = r[k2];
      }
      
      var newPin = CreatePin(pinIndex, latitude, longitude, pinName, pinDescription, pinImageSrc, pinImageSrc);
      var t = kony.application.getCurrentForm();
      t.MainMap.addPin(newPin);
    }
  }
}