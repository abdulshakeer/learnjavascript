// Coercion and falsy values in JavaScript

//Falsy Values are : null,0,undefined,NaN,'' other than these values consider as a truthy Value


var user = null;
var user = "";
if(user){
    console.log("Condion is True");
}


// Coercion in Javascript
var a = "2";
if(2 == a){
    console.log("Condition is True For Example 1");
}

//if we want a strict condion to to the datatype also there it comes about ===
var a = "2";
if(2 === a){
    console.log("Condition is True For Example 2");
}
//In the Below Example Datatype also same thats why it will print
var a = 2;
if(2 === a){
    console.log("Condition is True For Example 3");
}