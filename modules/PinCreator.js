


function CreatePin (id, latitude, longitude, name, description, imageSource, imageSourceFocus) {
  newPin = {
	id : id, // id is mandatory for every pin
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
  
  return newPin;
}