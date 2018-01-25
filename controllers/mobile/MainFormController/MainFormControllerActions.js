define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Map_f741d57de330451ab2400b30ce4eedd3: function AS_Map_f741d57de330451ab2400b30ce4eedd3(eventobject, location) {
        var self = this;
        SetGPSLockState(false);
        SetLattLong(location["lat"], location["lon"]);
        var ntf = new kony.mvc.Navigation("PinEditForm");
        ntf.navigate();
    },
    AS_Map_j017e9ac1ee944168f1c0b4ee46008ab: function AS_Map_j017e9ac1ee944168f1c0b4ee46008ab(eventobject) {
        var self = this;
        if (currentLocationData != null) {
            this.view.MainMap.zoomLevel = 15;
            this.view.MainMap.navigateToLocation(currentLocationData, false, false);
            UpdateCurrentLocationPin();
        }
        RenewPinsFromDB();
    },
    AS_Map_cf858b7d8baf43dd8e25a6ed0a5dbcb1: function AS_Map_cf858b7d8baf43dd8e25a6ed0a5dbcb1(eventobject, boundaryLocations) {
        var self = this;
        SetGPSLockState(false);
    },
    AS_Image_d6282caeea304798890fe65795dad7ec: function AS_Image_d6282caeea304798890fe65795dad7ec(eventobject, x, y) {
        var self = this;

        function MOVE_ACTION____c609f7caa0ec41ab930ad188d011c7e0_Callback() {}
        function MOVE_ACTION____e8ccd59488aa4e329f4d1629c7fc4825_Callback() {}
        self.view.MainMapFlex.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "50%",
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
            "animationEnd": MOVE_ACTION____e8ccd59488aa4e329f4d1629c7fc4825_Callback
        });
        self.view.MenuFlex.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "-50%",
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
            "animationEnd": MOVE_ACTION____c609f7caa0ec41ab930ad188d011c7e0_Callback
        });
        GetWeatherData();
    },
    AS_Image_ce3efd899d214a1788e56c6e75955bd1: function AS_Image_ce3efd899d214a1788e56c6e75955bd1(eventobject, x, y) {
        var self = this;
        if (GetGPSLockState()) {
            SetGPSLockState(false); // Stop tracking the current location
        } else {
            SetGPSLockState(true); // Restart tracking the current location
        }
    },
    AS_Image_g6300fed64954207a54daec5cad41a67: function AS_Image_g6300fed64954207a54daec5cad41a67(eventobject, x, y) {
        var self = this;

        function MOVE_ACTION____j19c0b2887fc45a188503d6e68642289_Callback() {}
        function ____b6cb7998563f44cb980ffc6fff74c42c_Callback() {}
        self.view.MainMapFlex.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "0%",
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
            "animationEnd": ____b6cb7998563f44cb980ffc6fff74c42c_Callback
        });
        self.view.MenuFlex.animate(
        kony.ui.createAnimation({
            "100": {
                "left": "-100%",
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
            "animationEnd": MOVE_ACTION____j19c0b2887fc45a188503d6e68642289_Callback
        });
    },
    AS_FlexContainer_jbbbee48cb0b4d38a511d058844c34f3: function AS_FlexContainer_jbbbee48cb0b4d38a511d058844c34f3(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("LogForm");
        ntf.navigate();
    },
    AS_Image_ab05196516c348fc8699e149a72560f8: function AS_Image_ab05196516c348fc8699e149a72560f8(eventobject, x, y) {
        var self = this;
        GetWeatherData();
    }
});