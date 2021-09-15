// js workflow is from top to bottom, therefore the given ststement
// will be validated order wise
var x = 6;
//if (x % 2 == 0) {
// console.log("x is an Even Number"); 
// }
// else {
//  console.log("x is an Odd Number");
// }

//ternary operator=condition?true:false (used instead of if...else)
var res=x%2==0?"Even":"Odd"
console.log(res);