function CreateAccount (accountName, accountPassword) {
  var httpclient = new kony.net.HttpRequest();
  try{
    httpclient.open(constants.HTTP_METHOD_POST, "https://hello-ea2f.restdb.io/rest/accounts");
    httpclient.setRequestHeader("Content-Type", "application/json");
    httpclient.setRequestHeader('x-apikey', 'ac89fa24ab9a605aa6de9e5b0c8b7fc679d24');
    var postdata = {
      "Username": accountName,
      "Password": accountPassword
    };
    httpclient.send(postdata);
  }
  catch(error) {
    alert(error.message);
  }
}