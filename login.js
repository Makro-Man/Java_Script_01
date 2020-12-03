'use strict'
let login, password;
login = "Admin";
password = "TheMaster";

if (login == "Admin"){
    if (password == "TheMaster"){
        console.log("Welcome!")
    }else if (password == "Other"){
        console.log("Wrong password")
    }else {
        console.log("Canceled.")
    }
}else if (login == "Other"){
    console.log("I dont know you")
}else {
    console.log("Canceled.")
}