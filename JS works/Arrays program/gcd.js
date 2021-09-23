// gcd-greatest common divisor
//gcd of(14,21)


var arr = [14,21];
var count=0;
for (i =0; i <= arr.length; i++) {
    for (j = 1; j <=7; j++) {
        if (arr[i] % j == 0) {
            console.log(`GCD of ${arr[i]}=${j}`);
            count++; //used to calculate iteration
        }
    } 
}

console.log("iteration=",count);