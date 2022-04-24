// As we all know variable is a name given the memory location There are some rules to create a variable in javascript as follows

var fullName = "Abdul Shakir";//This is actually camelcase This is i use to follow in Java Language

//how to name variable

//fullName
//full-name
//full_name
//FullName

//var if = 8; You cannot create keyword as variable name also it will through Error

var courseName = "ReactJs Course";//And also ; is not compulsory in javascrit

var isLoggedIn = false;
var loggedCount = 34;
var paymentMode;
paymentMode = "Debit Card"


//Printing Variable Data

console.log("Course Name is :",courseName);
console.log("Course Name is :"+courseName);//This is actually concatenation in Javascript

// Below peace of code is Interpolation In Javascript
console.log(`
    full name is : ${fullName}
    whether He logged in or not : ${isLoggedIn}
    Logged Count is : ${loggedCount}
`);