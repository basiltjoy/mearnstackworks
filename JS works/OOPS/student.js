class Student {
    constructor(rol, course, stud_name) {
        this.rol = rol,
            this.course = course,
            this.stud_name = stud_name
    }
    printStudent() {
        console.log(this.rol, this.course, this.stud_name);
    }
}

// var stud1 = new Student();
// stud1.setStudent(1022, "BCA", "Amal")
// console.log(stud1.rol,stud1.stud_name);  to access class elements eacch
// console.log(stud1);                      to access whole class 

// var stud2 = new Student();
// stud2.setStudent(1023, "B.com", "akhil")




//CONSTRUCTOR Method
var stud1 = new Student(1022, "BCA", "Amal");
console.log(stud1);