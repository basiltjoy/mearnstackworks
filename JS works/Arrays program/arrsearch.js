var arr = [10, 11, 12, 13, 14, 11]   //linear search
var x = 11; // flag = 0;
for (let values of arr) {
    for (i = 0; i < arr[i]; i++) {
        if (arr[i] == x) {
            console.log("item found");
        }
        else {
            console.log("not found");

        }
    }
    break;

}

//another method
// for (let values of arr) {
//    if (values == x) {
//        flag = flag + 1;  //also means flag+=1
//        // console.log("element found");
//        break;
//    }
// }
// if(flag==0){
//    console.log("element not found");
// }
// else {
//    console.log("element found");
// }