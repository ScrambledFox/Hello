var lockToCurrentLocation = false;

function SetGPSLockState (state) {
  lockToCurrentLocation = state;
  UpdateGPSButton();
}

function GetGPSLockState () {
  return lockToCurrentLocation;
}

function UpdateGPSButton(){
  var t = kony.application.getCurrentForm();
  
  if(GetGPSLockState()){
    t.GPSCenterButton.src = "/gps_center_blue.png";
  	t.MainMap.zoomLevel = 15;
  	RefreshCurrentPosition();
  	kony.timer.schedule("RefreshCurrentPosition", RefreshCurrentPosition, 1, true);
  } else{
    t.GPSCenterButton.src = "/gps_center.png";
  	kony.timer.cancel("RefreshCurrentPosition");
  }
}