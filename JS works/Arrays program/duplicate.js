// var arr = [10, 11, 12, 11, 10]
// var count=0;
// for (let value of arr) {
// var op = [];
//    for (let i = 0; i < 5; i++) {
//        for (let j = i + 1; j < 5; j++) {
//            if (arr[i] == arr[j]) {
//                console.log(`Duplicate elements:${arr[i]} `);
//            }
//        }
//    }
//    count++;
//    break;
// }
// console.log("iteration",count);




//find duplicate using objects
var arr = [10, 11, 12, 11, 10]
var duplicates={}
for(let val of arr){
    if(val in duplicates){
duplicates[val]+=1
    }
    else{
        duplicates[val]=1
    }
}
console.log(duplicates);