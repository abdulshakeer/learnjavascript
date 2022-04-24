// Slicing an array

var testarr = [2,4,5,7,8,9,1,0,7,6,5];
console.log(testarr.slice(1,6));
console.log(testarr.slice(1));
// Output will be
// [ 4, 5, 7, 8, 9 ]
// [
//   4, 5, 7, 8, 9,
//   1, 0, 7, 6, 5
// ]
// Splicing an array

var users = ["shakir","charan","minaz","marzook","rashad","samad"];
users.splice(1,3,"Hi");
console.log(users);
// Output Will be 
// [ 'shakir', 'Hi', 'rashad', 'samad' ]
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
// Output Will be 
//[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]