class employee {
    constructor(eid, e_name, salary, desgn) {
        this.eid = eid;
        this.e_name = e_name;
        this.salary = salary;
        this.desgn = desgn;
    }
}
var emp1=new employee(1001, "ravi", 25000, "hr")
var emp2=new employee(1002, "akhil", 30000, "developer")
var emp3=new employee(1003, "nikil", 35000, "developer")

var emps=[];  
emps.push(emp1,emp2,emp3)

//prnt developers
// for(let emp of emps){
//    emps.filter((emp)=>emp.desgn=="developer").forEach((emp)=>console.log(emp));
//    break;
// }


//sor sal wise
// emps.sort((emp1,emp2)=>emp1.salary-emp2.salary).forEach((emp)=>console.log(emp));






