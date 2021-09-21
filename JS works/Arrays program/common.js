var arr1 = [10, 20, 21, 22]
var arr2 = [11, 12, 20, 21]
//print common elements from this array

for (let values of arr1) {
    for (let values of arr2) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (arr1[i] == arr2[j]) {
                    console.log(`common elements ${arr1[i]} ${arr2[j]}`)
                }
            }

        }
        break;
    }
    break;
}
