var arr1 = [9, 4, 10,20]
//var x = 5;
var arr2 = [2, 3, 5];
for (let num of arr1) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j <= 2; j++) {

            if (arr1[i] % arr2[j] == 0) {  //x
                console.log(`${arr1[i]} is divisible by ${arr2[j]}`); //x
            }
            else {
                console.log(`${arr1[i]} is not divisible by ${arr2[j]}`);  //x
            }

        }
    }
    break;
}
