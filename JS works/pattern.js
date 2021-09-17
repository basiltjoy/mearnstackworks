//nested loop concept
// 111
// 222
// 333



for (let row = 1; row <= 3; row++) {
    let str = "";
    for (let col = 1; col <= 3; col++) { //innerloop works first then second loop 
        str+=row
     }
     console.log(str);
}