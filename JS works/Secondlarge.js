var num1 = 1000, num2 = 100, num3 = 2000
if ((num1 > num2) & (num1 < num3)) {
    console.log(`num1 ${num1} is second largest`);
}
if ((num2 > num3) & (num2 < num1)) {
    console.log(`num2 ${num2} is second largest`);
}
if ((num3 < num1) & (num3 > num2)) {
    console.log(`num3 ${num3} is second largest`);
}