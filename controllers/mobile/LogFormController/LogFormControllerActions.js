define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_a8cd520a9b6645f6bf4efa33613b81c7: function AS_Button_a8cd520a9b6645f6bf4efa33613b81c7(eventobject) {
        var self = this;

        function MOVE_ACTION____f97aa1bd9c344219904feae7f848abf8_Callback() {}
        if ((self.view.tbUsername.text == null) || (self.view.tbUsername.text == "") || (self.view.tbPassword.text == null) || (self.view.tbPassword.text == "")) {
            self.view.prmptError.animate(
            kony.ui.createAnimation({
                "100": {
                    "centerX": "50%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "rectified": true
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": MOVE_ACTION____f97aa1bd9c344219904feae7f848abf8_Callback
            });
        } else {
            // Create the account
            CreateAccount(this.view.tbUsername.text, this.view.tbPassword.text);
        }
    },
    AS_Image_j70a7f9b764b463e8741c1696834bd22: function AS_Image_j70a7f9b764b463e8741c1696834bd22(eventobject, x, y) {
        var self = this;
        LogIn(this.view.tbUsername.text, this.view.tbPassword.text);
        if ((loggedIn == true)) {
            var ntf = new kony.mvc.Navigation("MainForm");
            ntf.navigate();
        }
    },
    AS_Button_a27d95ac34ff4ccc8ef29248ba0bd439: function AS_Button_a27d95ac34ff4ccc8ef29248ba0bd439(eventobject) {
        var self = this;

        function MOVE_ACTION____b74ce47a43ff4a03af770013b644a19f_Callback() {}
        self.view.prmptError.animate(
        kony.ui.createAnimation({
            "100": {
                "centerX": "150%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            "animationEnd": MOVE_ACTION____b74ce47a43ff4a03af770013b644a19f_Callback
        });
    }
});