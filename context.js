// Here I have learned the difference between functions and variable functions
// Understand the context in javascript
// The Output for below code is Hii Pace Wisdom Solutions
// How we got the output before writing the function this is the concept of Global Context In Javascript
sayHello();
function sayHello(){
    console.log("Hii Pace Wisdom Solutions");
}

// Example Of Global Context Is Below Code

var name ="shakir";
if("shakir" === window.name){
    console.log("This is the true Statement");
}

//The above Code Will Give a error like window is not defined if we write same code in the browser it will not give any error This is the concept of Global Contex In Javascript


// Code hoisting in javascript
// In case of Function declaration scanned and made available

tipper("5")// It will Give Proper Output
function tipper(a){
    var bill = parseInt(a);//It will convert string input parameter to Interger 
    console.log(bill+5);
}

Bigtipper("200")// It Will through an error Because It will say Bigtipper is not defined
// Actually Bigtipper is a fuction But this is Because Of Hoisting In Javascript
var name = function Bigtipper(a){
    var bill = parseInt(a);//It will convert string input parameter to Interger 
    console.log(bill+5);
}


// In case of variables Variable declaration scanned and made undefined
console.log(name);// It will Through an Error Like Undefined
var name = "abdul";

function name(){
    var name = "shakir";
    console.log(name);
}

name(); // Output will be shakir

console.log(name);// Output will be abdul as this variable declared in outside the function

