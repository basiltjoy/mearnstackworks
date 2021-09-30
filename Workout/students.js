var students = [
    [100, "ram", "BCA", 50000,"a+",1000],
    [101, "ravi", "B.com-CA", 40000,"a",800],
    [102, "nikil", "Bsc", 5500,"a+",1100],
    [103, "jain", "B.com-CA", 40000,"a",900],
    [104, "ajesh", "BCA", 50000,"a+",1000],
    [105, "arun", "BCA", 50000,"b+",600],
    [106, "jordi", "Bsc", 5500,"a+",1200],
    [107, "justin", "B.com-CA", 40000,"a+",1100],
    [108, "nancy", "B.com-CA", 40000,"b+",600],
    [109, "srijith", "B.com-CA", 40000,"b+",600],
    [110, "greena", "Bsc", 5500,"b+",600],
    [111, "vishnu", "Bsc", 5500,"a",900],
    [112, "athira", "BCA", 50000,"a+",1100]
]

//total no of students
//console.log(students.length);

//no of students who achieved a+ and details of student
// var stud=students.filter(student=>student[4]=="a+") //.map((student)=>student[1])
// console.log(stud.length);
// console.log(stud);

//find if any stud received grade d
// var stud=students.filter(student=>student[4]=="b+")
// console.log(stud);

//sort student wrt score
// var mark=students.sort((s1,s2)=>s2[5]-s1[5]);
// console.log(mark);


//find a student
// var name=students.find(stud=>(stud[1]="jordy"))
// console.log(name);

//bca students
var stud=students.filter(student=>student[2]=="BCA")
console.log(stud);

