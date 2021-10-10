function getMax(...arg){
    return arg.reduce((num1,num2)=>num1>num2?num1:num2)
}
console.log(getMax(50,20,30,200,100,300));