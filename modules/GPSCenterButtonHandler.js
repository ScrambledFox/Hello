var lockToCurrentLocation = true;

function SetGPSLockState (state) {
  lockToCurrentLocation = state;
}

function GetGPSLockState () {
  return lockToCurrentLocation;
}