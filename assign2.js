//Username = Braydon
//Password = password

//functions 

    /**
     * MD5 Encryption function to encrypt provided string.
     * Returns string of encrypted hash.
     * @param {string} stringIn
     */
    function md5Encrypt(stringIn) {
        "use strict";
        var md5string = new CryptoJS.MD5(stringIn);
        return md5string.toString();
}   //END md5Encrypt

 /**
     * checkLogIn function for validating user login.
     * Returns error messages or passed message depending on user input.
     * @param {string} username @param {string} password 
     */
function checkLogIn(username, password){ 
    "use strict";
    var hPassword = md5Encrypt(password); //Hashing the password 
    //Both username and password dont match
    if(username !== "Braydon" && hPassword !== "5f4dcc3b5aa765d61d8327deb882cf99" ){
        var invalidError = "Invalid Username or Password";
        return invalidError;
    } else if (hPassword !== "5f4dcc3b5aa765d61d8327deb882cf99" ) { //if password doesnt match
        var invalidError = "Invalid Username or Password";
        return invalidError;
    }else if(hPassword === " " || hPassword === null){//empty / null password
        var passwordEmpty = "No password entered";
        return passwordEmpty;
    } else if(username !== "Braydon"){ //invalid username
        var invalidError = "Invalid Username or Password";
        return invalidError;
    }  else if(username === " " || username === null) {  // empty username
        var usernameEmpty = "No username entered";
        return usernameEmpty;
    }
    else
     { 
        return true;
    }   
}
 //END checkLogIn


//Main Flow
window.onload = function loadScript() { 
    //Variables
    var output = document.getElementById("output");
    var outputName = document.getElementById("output__name");
    var outputPassword = document.getElementById("output__password"); 
    var myForm = document.forms.login;
    var username = myForm.username;
    var password = myForm.password;
   
    function submitForm() {
    //check if hashed password matches
    checkLogIn(username.value, password.value);
    

    //Commence validation
    //Need if statments to show results depending on function return.
    /*example: if(checkLogIn === true){ 
        output = "Welcome back!"
    }*/
}
   

    myForm.onsubmit = submitForm;
}