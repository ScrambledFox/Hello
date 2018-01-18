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

function LogIn () {
  
}

function GetAllAccounts () {
  try{
    //var client = GetHTTPClient("GetAllAccounts");
    var client = new kony.net.HttpRequest();
    client.open(constants.HTTP_METHOD_GET, "https://hello-ea2f.restdb.io/rest/accounts");
    client.setRequestHeader("Content-Type", "application/json");
    client.setRequestHeader('x-apikey', 'ac89fa24ab9a605aa6de9e5b0c8b7fc679d24');
    client.send();
    var response = client.response;
    alert(response);
  }
  catch (error) {
    alert(error.message);
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
      	break;
      case "GetAllAccounts":
        httpclient.open(constants.HTTP_METHOD_GET, "https://hello-ea2f.restdb.io/rest/accounts");
      	break;
      default:
        alert("Case: " + dbTableName + "not known");
        
    }
    
    // HTTPClient setup, same for every table?
    httpclient.setRequestHeader("Content-Type", "application/json");
    httpclient.setRequestHeader('x-apikey', 'ac89fa24ab9a605aa6de9e5b0c8b7fc679d24');
    
    // Return the client
    return httpclient;
  }
  catch (error) {
    alert(error.message);
  }
}