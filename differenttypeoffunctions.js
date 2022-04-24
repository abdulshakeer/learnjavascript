// Callback and arrow function introduction in array

// Arrow Function In javascript

var isEven = (element) =>{
    return element % 2 == 0;
}
console.log(isEven(9));

// Normal Fuction 
function isEven1(element){
    return element % 2 == 0;
}
console.log(isEven1(10));

// variable Functions in javascript

var iseven = function isEven2(element){
    return element % 2 == 0;
}
console.log(iseven(10));

// Callback Fuctions in Javascript Its a Intresting function in javascript
// To remember callback function arr.every(()=>())
var res = [2,4,6,8].every((e)=>(e % 2 == 0));
console.log(res);