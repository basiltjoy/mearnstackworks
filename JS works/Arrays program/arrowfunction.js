 var employees = [
    [1000, "ram", 15000, "hr", 1990, 2000],
    [1001, "ravi", 25000, "hr", 1910, 2005],
    [1002, "akhil", 30000, "developer", 2000, 2010],
    [1003, "nikil", 35000, "developer", 2010, 2015],
    [1004, "ajesh", 35000, "mrkt", 1991, 2010],
    [1005, "tom", 40000, "ba", 1990, 2015],
    [1006, "jack", 32000, "ba", 2001, 2010],
 ]
 for(let emp of employees){
 var employee_sal=employees.map(emp=>emp[2])
 console.log(employee_sal);
 break;
 }



//var add=(num1,num2)=>num1+num2
//console.log(add(10,20));

// var square=(num1)=>num1**2
// console.log(square(2,2));

// var division=(num1,num2)=>num1/num2
// console.log(division(10,5));

// var mod=(num1,num2)=>num1%num2
// console.log(mod(11,2));

// var odd=(num)=>num%2!=0?true:false
// console.log(odd(4));

// var sub=(num1,num2)=>num1>num2?num1-num2:num2-num1
// console.log(sub(100,500));

// var largestAmongTwo=(num1,num2)=>num1>num2?num1:num2
// console.log(largestAmongTwo(200,100));


// var arr = [2, 3, 4, 5, 6]
//print squares of array elements
// var squares=(num)=>num**2
// var res=arr.map((num)=>num**2) 
// console.log(res);


//print cube of array elements
// var cube=(num)=>num**3
// var result=arr.map(cube)
// console.log(result);