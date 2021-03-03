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
    
    if(username === "" || username === null) { 
        return "No username entered"
    } 
    if(password === " " || password === null) { 
        return "No password entered"
    }
    
    if((md5Encrypt(password) !== "5f4dcc3b5aa765d61d8327deb882cf99" && username !== "Braydon")| (md5Encrypt(password) === "5f4dcc3b5aa765d61d8327deb882cf99" && username !== "Braydon")) { 
        return "Invalid Username or Password.";
    }
    else { 
        return "Welcome Back!";
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
    var message = checkLogIn(username.value, password.value);
    output.innerHTML = message;

    return false;
}
   

    myForm.onsubmit = submitForm;
}