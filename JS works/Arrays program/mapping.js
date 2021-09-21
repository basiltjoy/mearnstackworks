var arr=[2,4,6,3]  //13,11,9,12
var total=0;

 for(let num of arr){
 total=total+num;
 }
 console.log(total);


var oparray=[];
for(let num of arr){
let res=total-num;
 oparray.push(res)
 }
 console.log(oparray);
