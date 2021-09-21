var low = 1;
var upp = 27;
function primeNumber(low, upp) {
    for (let i = low; i <= upp; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {  //not prime
                flag++;    //ie,flag=1
                break;
            }
        }
        if (flag == 0) { // 
            console.log(i);
        }
    }
}
console.log( primeNumber(low, upp));
