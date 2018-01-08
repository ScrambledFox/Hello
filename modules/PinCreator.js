
var lastCreatedPin;

function GenerateRandomID(){
  var randomID = (Math.round(Math.random() * 1000000)).toString();
  return randomID;
}

function CreatePin (id, latitude, longitude, name, description, imageSource, imageSourceFocus) {
  var randomPinID = GenerateRandomID();
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