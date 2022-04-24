// Light intro to THIS in javascript

// If You run same code in webbrowser u will get Global Context
console.log(this); // Output Will be {}

var game = "cricket";
function sayName(){
    var name = "shakir";
    console.log(this);
}

sayName();// Here it will through an error but if You run same code in webbrowser u will get Global Context