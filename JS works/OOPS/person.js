class Persons {
    setPerson(name, gender, age) {       //initialize instance variables (assign values to instance variables)
        this.name = name,
            this.gender = gender,
            this.age = age
    }
    printPerson() {
        console.log(this.name, this.gender, this.age);
    }
}

//for creating objects
var obj1 =new Persons();
console.log("setPersons method");
 obj1.setPerson("Akhil","male",25)
 obj1.printPerson()




//or when using constructor, place constructor instead of setPerson
class Person {
    constructor(name, gender, age) {       //initialize instance variables (assign values to instance variables)
        this.name = name,
            this.gender = gender,
            this.age = age
    }
    printPerson() {
        console.log(this.name, this.gender, this.age);
    }
}


//CONSTRUCTOR Method
console.log("constuctor method");
var obj1 =new Person("Akhil","male",25);
console.log(obj1);