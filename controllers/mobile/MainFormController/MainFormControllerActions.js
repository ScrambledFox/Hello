define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Map_d73c11c0d5e14e988a405a24caacff2f: function AS_Map_d73c11c0d5e14e988a405a24caacff2f(eventobject, location) {
        var self = this;
        testPin = {
            id: "id1",
            // id is mandatory for every pin
            lat: location["lat"],
            lon: location["lon"],
            name: "New Pin",
            image: "defaultImage.png",
            focusImage: "focusImage.png",
            //focus image will be shown while map pin selected
            desc: "Empty Description",
            showCallout: true,
            meta: {
                color: "none",
                label: ""
            }
        };
        this.view.LatLonTestLabel.text = location;
        this.view.MainMap.addPin(testPin);
        var ntf = new kony.mvc.Navigation("PinEditForm");
        ntf.navigate();
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
    AS_FlexContainer_id674c6607d542549fe83d95df16b158: function AS_FlexContainer_id674c6607d542549fe83d95df16b158(eventobject, x, y) {
        var self = this;
    },
    AS_FlexContainer_c82888ae5f504f73a3b9b508e72e564f: function AS_FlexContainer_c82888ae5f504f73a3b9b508e72e564f(eventobject, x, y) {
        var self = this;
    },
    AS_FlexContainer_jbbbee48cb0b4d38a511d058844c34f3: function AS_FlexContainer_jbbbee48cb0b4d38a511d058844c34f3(eventobject) {
        var self = this;
    },
    AS_Map_af98dfc8a2ab42e38dcb5cf92ed2281e: function AS_Map_af98dfc8a2ab42e38dcb5cf92ed2281e(eventobject) {
        var self = this;
        var positionoptions = {
            timeout: 15000
        }; // 15 secs 
        var geoLocation = kony.location.getCurrentPosition(successcallback, errorcallback, positionoptions);
        this.view.CopyLatLonTestLabel0c778968c21fe49.text = kony.location.getCurrentPosition(successcallback, errorcallback, positionoptions).coords.longitude;
    }
});