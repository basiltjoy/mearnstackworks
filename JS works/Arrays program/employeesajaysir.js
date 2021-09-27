var employees = [
    [1000, "ram", 15000, "hr", 1990, 2000],
    [1001, "ravi", 37000, "hr", 1990, 2005],
    [1002, "akhil", 30000, "developer", 2000, 2010],
    [1003, "nikil", 35000, "developer", 2010, 2015],
    [1004, "ajesh", 35000, "mrkt", 1991, 2010],
    [1005, "tom", 40000, "ba", 1990, 2015],
    [1006, "jack", 7000, "ba", 2001, 2010],
    [1007, "nevin", 50000, "ba", 2001, 2010],
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
// var employee=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[2],emp[1])
// console.log(employee);



//print employee names using array method
// var employes=employees.map((emp)=>emp[1])
// console.log(employes);


//print array method combination-filter & map
// var developer=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[1]emp[2])
// console.log(developer);


//employees of ba
// var analyst=employees.filter(emp=>emp[3]=="ba")
// console.log(analyst);



//ba employees
// var ba=employees.filter(emp=>emp[3]=="ba").map(emp=>emp[1])
// console.log(ba);


//give bonus for developers
// var bonus=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[2]+5000)
// console.log(bonus);


//print deeveloper names and experience
// var developer = employees.filter(emp => (emp[3] == "developer") & ((emp[5] - emp[4]) > 6)).map(emp=>emp[1])
// console.log(developer);


//sort emp wrt experience in ascen &  desc
// var emp=employees.sort((emp1,emp2)=>(emp2[5]-emp1[5]))
// console.log(emp);



//sort emp wrt sal
// var emp=employees.sort((emp1,emp2)=>emp2[2]-emp1[2])
// console.log(emp);



//sort developers wrt sal
var emp=employees.filter(emp=>emp[3]=="developer").sort((emp1,emp2)=>emp2[2]-emp1[2])
console.log(emp);





