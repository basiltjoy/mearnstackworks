//nested array
var employees = [
    [1000, "ram", 15000, "hr", 1990, 2000],
    [1001, "ravi", 25000, "hr", 1910, 2005],
    [1002, "akhil", 30000, "developer", 2000, 2010],
    [1003, "nikil", 35000, "developer", 2010, 2015],
    [1004, "ajesh", 35000, "mrkt", 1991, 2010],
    [1005, "tom", 40000, "ba", 1990, 2015],
    [1006, "jack", 32000, "ba", 2001, 2010],
]

//print num of employees
// for(let emp of employees){
//    console.log(employees.length);
//    break;
//  }



//print num of employees-developers
// for(let emp of employees){
// if(emp[3]=="developer"){
//     console.log(emp[1]);
//  }
// }



//print experience of each employee
//outliers-non feasible values
 for(let emp of employees){
 var experience=emp[5]-emp[4];
 console.log(emp[1],experience);
 }



//print highest and lowest salary
// console.log("Above 30,000");
// for (let emp of employees) {
//    if (emp[2] > 30000) {
//        console.log(`${emp[1]} ${emp[2]}`);
//    }
// }

// console.log("below 30,000");
// for (let emp of employees) {
//    if (emp[2] < 30000) {
//     console.log(`${emp[1]} ${emp[2]}`);
//   }
// }

// another method

//    for (let emp of employees) {
//    var x = 30000;
//    if (emp[2] < x) {
//        console.log("lowest salary=",emp[1],emp[2]);
//   }
//    if(emp[2]>x){
//        console.log("Highest salary=",emp[1],emp[2]);
//    }
//  }




//print name of developer taking highest salary
// for (let emp of employees) {
//    if (emp[3] == "developer") {
//        console.log((emp[1]+emp[2]));
//    }
//                     }




//print name of employee with highest experience





//print total sum of salary of developers  //not completed
// for (let emp of employees) {
//    if (emp[3] == "developer") {
//        var x=emp[3,1]+emp[2];
//        console.log(x);   
//    } 
//  }
