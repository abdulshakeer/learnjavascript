// Scope chaining in javascript


var name = "shakir";
console.log("Line Number 5 is :"+name);

function sayName(){
    var name ="abdul";
    console.log("Line Number 9 is :"+name);
}
sayName();

function sayName2(){
    console.log("Line Number 15 is :"+name);
}
sayName2();

//Output Will be Given Below
// Line Number 5 is :shakir
// Line Number 9 is :abdul
// Line Number 15 is :shakir