for (let row = 1; row <= 1; row++) {
    let str = "";
    for (let col = 1; col <= 1; col++) { //innerloop works first then second loop 
        str += row
    }
    console.log(str);
    for (let row = 1; row <= 1; row++) {
        let str = "";
        for (let col = 1; col <= 2; col++) { //innerloop works first then second loop 
            str += row++
        }
        console.log(str);
    }
    for (let row = 1; row <= 1; row++) {
        let str = "";
        for (let col = 1; col <= 3; col++) { //innerloop works first then second loop 
            str += row++
        }
        console.log(str);
    }
    for (let row = 1; row <= 1; row++) {
        let str = "";
        for (let col = 1; col <= 4; col++) { //innerloop works first then second loop 
            str += row++
        }
        console.log(str);
    }

}
