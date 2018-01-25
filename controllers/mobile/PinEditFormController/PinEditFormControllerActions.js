define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Image_b2ee20f5a4634faa8283c6222682cbe3: function AS_Image_b2ee20f5a4634faa8283c6222682cbe3(eventobject, x, y) {
        var self = this;
        var data = GetLattLong();
        var lat = data[0];
        var lon = data[1];
        var newPin = CreatePin("new pin", lat, lon, this.view.pinNameText.text, this.view.pinDescriptionText.text, "location_pin_medium.png", "location_pin.png");
        var t = kony.application.getPreviousForm();
        t.MainMap.addPin(newPin);
        var ntf = new kony.mvc.Navigation("MainForm");
        ntf.navigate();
    },
    AS_Image_dee62000203e40aba5a278a7f50edf8c: function AS_Image_dee62000203e40aba5a278a7f50edf8c(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("MainForm");
        ntf.navigate();
    }
});