class Parent{
    phone(){
        console.log("Redmi");
    }
}


class child extends Parent{   //inheritance between classes=method_overriding
phone(){                      //here child overrides parent class "extends" keyword
    console.log("I Phone");   //javascript allows inheritance of only one class
}
}


var obj2=new child
obj2.phone()
