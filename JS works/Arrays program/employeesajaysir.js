var employees = [
    [1000, "ram", 15000, "hr", 1990, 2000],
    [1001, "ravi", 37000, "hr", 1990, 2005],
    [1002, "akhil", 30000, "developer", 2000, 2010],
    [1003, "nikil", 35000, "developer", 2010, 2015],
    [1004, "ajesh", 35000, "mrkt", 1991, 2010],
    [1005, "tom", 40000, "ba", 1990, 2015],
    [1006, "jack", 7000, "ba", 2001, 2010],
    [1007, "jack", 50000, "ba", 2001, 2010],
]


//print highest and lowest salary
// var high_sal = 0;
// for (let emp of employees) {
//    if (high_sal < emp[2]) {
//        high_sal = emp[2];
//    }
// }
// console.log("Highest salary=",high_sal);

// var low_sal = employees[0][2];
// for (let emp of employees) {
//    if (low_sal > emp[2]) {
//        low_sal = emp[2];
//    }
// }
// console.log("Lowest salary=",low_sal);




//print name of developer taking highest salary




//print employee names using array method
 var employes=employees.map((emp)=>emp[1])
// console.log(employes);

