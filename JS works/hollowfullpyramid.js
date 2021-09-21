 for (let row = 0; row < 4; row++) {
    let str="";
    for (let space = 0; space < (4-row); space++) {
        str=str+" " //else can be written as str+=" "
    }
    for (let col = 0; col < (row+1); col++) {
        str=str+"* " //else can be written as str+="*"
    }
    console.log(str);
 }


