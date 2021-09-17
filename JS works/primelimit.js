var low = 3;
var upp = 27;
for (let i = low; i <= upp; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {  //not prime
            flag ++;    //ie,flag=1
            break;
        }
    }
    if (flag == 0) { // 
        console.log(i);
    }
}
