var num = 5;
let fact = 1;

 function factorial(num) {
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact
 }
 console.log(factorial(num));

