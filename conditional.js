// Conditional Statements in Javascript

var temparature = 15;
if(temparature < 20){
    console.log("Its Cold Outside");
}

else if(temparature < 30){
    console.log("Its Moderate Outside");
}
else{
    console.log("Its Really Hot Outside");
}


//Login trough which email,facebook and google
var email = true;
var facebook = false;
var google = true;
if(email || facebook || google){
    console.log("Login Success! ");
}


// Ternary Operator in Javascript

var num = 10;
ans = num%2==0?console.log("Its Even Number"):console.log("Its a Odd Number");

// switch Statement in Javascript

var user = "admin";
switch(user){
    case "admin":
        console.log("You Get Full Access");
        break;
    case "subadmin":
        console.log("You Get Access create or delete Course");
        break;
    case "testprep":
        console.log("You Get Access create or delete Test");
        break;
    case "user":
        console.log("Ger Access to consume Content");
        break;
    default:
        console.log("Trial User");
    
}
