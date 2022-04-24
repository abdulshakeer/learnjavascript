// If You want to learn javascript You should mainly learn the concepts like arrays,object and Loops

// Creation of Array In 2 Diffrent ways
var countries = ["India","USA","Russia","Ukraine","China"];

var states = new Array("Karnataka","Kerala","Tamilnadu","Punjab");//this is like an object

// Accessing an Array
console.log(states[1]);

// Some Methods in array

console.log(states.length);

// Replacing the value in array

states[0] = "Gujarat"
console.log(states);

// Different Datatypes in a array

var diff = ["PACE WISDOM SOLUTIONS",89,76.65,true];
console.log(diff);

diff.pop();// pop method is used pop the element present at the end

console.log(diff);//output will be ["PACE WISDOM SOLUTIONS",89,76.65]
diff.unshift("New Value")// The already Present value will be shifted and this New Value will be appended at the beginning of the array
console.log(diff);// Output Will Be [ 'New Value', 'PACE WISDOM SOLUTIONS', 89, 76.65 ]
// Inorder to Remove New Value we can use below snippet code

diff.shift()
console.log(diff);// Output Will be [ 'PACE WISDOM SOLUTIONS', 89, 76.65 ]


// Indexof() is used to find index of an array


console.log(diff.indexOf(65));// It will give -1 because in python and javascript the last index also start from index -1


console.log(Array.from("hitesh"));// This is little bit Intresting