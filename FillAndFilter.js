// Fill in array

var testarr = [2,5,6,7,3,4,9,1,0];
console.log(testarr.fill("h",2,5));
// Output Will be
// [
//     2, 5, 'h', 'h', 'h',
//     4, 9, 1,   0        
//   ]
// Filter In array

const testarr1 = [2,5,6,7,3,4,9,1,0];
console.log(testarr1.filter((num)=>(num != 3)));

//Output will be
// [
//     2, 5, 6, 7,
//     4, 9, 1, 0
//   ]