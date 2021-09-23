var arr1 = [10, 20, 21, 22, 25]
var arr2 = [11, 12, 25, 20, 21]
//print common elements from this array
var count = 0;
for (let values of arr1) {
    for (let values1 of arr2) {
        //for (let i = 0; i < arr1.length; i++) {
        //  for (let j = 0; j < arr2.length; j++) {
        //    if (arr1[i] == arr2[j]) {
        //console.log(`common elements= ${arr1[i]}`);
        if (values == values1) {
            console.log(`common elements ${values} `)
        }
        count++;

    }

}
//   break; 
//  }
//  break;
//}
console.log("iteration=", count);
