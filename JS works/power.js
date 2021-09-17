var num=2;
var low=8;
var upp=27;
for(let i=1;i<=upp;i++) {
    let res=i**num;  //res=i**num (square of num)
    if((res>=low)&(res<=upp)){
        console.log(i);
    } 
}
                          