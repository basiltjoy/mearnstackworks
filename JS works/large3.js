var num1=100, num2=500, num3=100  
 if((num1>num2)&(num1>num3)) {
    console.log(`num1 ${num1} is  largest`);
}   
else if((num2>num1)&(num2>num3)) {
    console.log(`num2 ${num2} is  largest`);
}   
else if((num3>num1)&(num3>num2)) {
    console.log(`num3 ${num3} is  largest`);
}
else{
    console.log("all num's are equal");
}