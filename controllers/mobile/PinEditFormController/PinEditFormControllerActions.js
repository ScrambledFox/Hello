define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Image_b2ee20f5a4634faa8283c6222682cbe3: function AS_Image_b2ee20f5a4634faa8283c6222682cbe3(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("MainForm");
        ntf.navigate();
    },
    AS_Image_dee62000203e40aba5a278a7f50edf8c: function AS_Image_dee62000203e40aba5a278a7f50edf8c(eventobject, x, y) {
        var self = this;
        var t = kony.application.getPreviousForm();
        t.MainMap.removePin(lastCreatedPin);
        var ntf = new kony.mvc.Navigation("MainForm");
        ntf.navigate();
    }
});