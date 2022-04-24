// In this operator we are going to make calculate Discount in a course or How many Percentage of Discount we are giving to that particular course

var sellingPrice = 199;
var listingPrice = 799;

var disCountPercent = ((listingPrice - sellingPrice)/listingPrice) * 100;//Formula for discount
console.log("Discount Percentage is " +Math.round(disCountPercent)+"% OFF");//Here we are using inbuilt math function to round the Percentage


// var num1 = 10;
// var num2 = 20;
// console.log(num1+num2);

// var res = num1 > num2;
// console.log(res);


