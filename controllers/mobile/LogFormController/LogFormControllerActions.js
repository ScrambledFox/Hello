define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_a8cd520a9b6645f6bf4efa33613b81c7: function AS_Button_a8cd520a9b6645f6bf4efa33613b81c7(eventobject) {
        var self = this;
        CreateAccount(this.view.tbUsername.text, this.view.tbPassword.text);
    },
    AS_Image_j70a7f9b764b463e8741c1696834bd22: function AS_Image_j70a7f9b764b463e8741c1696834bd22(eventobject, x, y) {
        var self = this;
        return GetAllAccounts.call(this);
    }
});