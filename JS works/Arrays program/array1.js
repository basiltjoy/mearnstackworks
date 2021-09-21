var arr = [2, 3, 4,5, 6, 7, 5, 8]  //output[1,2,3,7,8,9]
var op = []
   for (let num of arr) {
//    if (num < 5) {
//        op.push((num - 1));
//        //   num=num-1
//        //   console.log(num);
//    }
//    else if (num > 5) {
//        op.push((num + 1));
//        //    num=num+1
//        //   console.log(num);
//    }
//    else {
//        op.push(num)
//    }

// console.log(op);  //to obtain result in form of array
num<5?op.push((num - 1)):num>5?op.push((num + 1)):op.push(num);
   }
console.log(op);