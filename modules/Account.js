function CreateAccount (accountName, accountPassword) {
  try{
    var postdata = {
      "Username": accountName,
      "Password": accountPassword
    };
    GetHTTPClient("PostAccount").send(postdata);
  }
  catch(error) {
    alert(error.message);
  }
}

var myUsername = "";
var myPassword = "";

function LogIn (user, pass) {
  myUsername = user;
  myPassword = pass;
  GetAllAccounts();
}

function GetAllAccounts () {
  var client = GetHTTPClient("GetAllAccounts");
  client.onReadyStateChange = httpCallbackHandler;
  
  try{
    client.send();
  }
  catch (error) {
    alert(error.message);
  }
}

function httpCallbackHandler () {
  if(this.readyState == constants.HTTP_READY_STATE_DONE){     
    CheckForRegisteredAccount(this.response);
  }
}

function CheckForRegisteredAccount(response){
  var username = "";
  var password = "";
  
  for(var k in response){
    r = response[k];
    for(var k2 in r){
      if (k2 == "Username"){
        username = r[k2];
      }
      if (k2 == "Password"){
        password = r[k2];
      }
    }
    
    if (username == myUsername) {
      if (password == myPassword) {
        alert("Username and password correct");
      } else {
        alert("Password not correct with the given username");
      }
    } else {
    }
  }
}

// Returns the setup http client
function GetHTTPClient (dbTableName) {
  var httpclient = new kony.net.HttpRequest();
  try{  
    // Get the correct table
    switch(dbTableName){
      case "PostAccount":
    	httpclient.open(constants.HTTP_METHOD_POST, "https://hello-ea2f.restdb.io/rest/accounts");
        httpclient.setRequestHeader("Content-Type", "application/json");
      	break;
      case "GetAllAccounts":
        httpclient.open(constants.HTTP_METHOD_GET, "https://hello-ea2f.restdb.io/rest/accounts");
      	break;
      default:
        alert("Case: " + dbTableName + "not known");
        
    }
    
    // HTTPClient setup, same for every table?
    httpclient.setRequestHeader('x-apikey', 'ac89fa24ab9a605aa6de9e5b0c8b7fc679d24');
    
    // Return the client
    return httpclient;
  }
  catch (error) {
    alert(error.message);
  }
}