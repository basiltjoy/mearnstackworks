var num = 123;  //get reversal no.321
var result ="";
while (num != 0) {
  let digit = num % 10;              
  result += digit; //to append digit=result("321")
  num = Math.floor(num / 10);
  
}
console.log(result);


//another method

// var num = 123;
//  var result =0;
//  while (num != 0) {
//  let digit = num % 10;
//  result=result*10+digit; //when the result variable is a integer instead of string
//  num = Math.floor(num / 10);
//  }
//  console.log(result);