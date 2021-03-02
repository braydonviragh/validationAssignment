function checkLogIn(){
    var myForm = document.forms.login;
    var username = myForm.username;
    var password = myForm.password;
    var output = document.getElementById("output");
    var outputName = document.getElementById("output__name");
    var outputPassword = document.getElementById("output__password");
    "use strict";
    if (username.value === "" || username.value === null) {
        username.classList.add("red");
        return false;
    }
    if (password.value === "" || password.value === null) {
        password.classList.add("red");
        return false;
    }
    output.classList.remove("hidden");
    outputName.innerHTML = username.value;
    outputPassword.innerHTML = password.value;
    return false;
}