var arr1 = [9, 4, 10, 8, 5, 20, 15, 30]
var x=2;
// var arr2 = [2,3,5];
// arr1.sort((num1, num2) => (num1 - num2))
for (let num of arr1) {
    for (let i = 0; i < arr1.length; i++) {
       // for (let j = 0; j <=2; j++) {  

            if (arr1[i] % x== 0) {  //arr2[j]
                console.log(`${arr1[i]} is divisible by ${x}`); //${arr2[j]}
            }
            else {
                console.log(`${arr1[i]} is not divisible by ${x}`);  //${arr2[j]}
            }
    
    }
    break;
}

