 function add(num1){
    return num1
 }

                             //overloading
 function add(num1,num2){    //in js recent function works properly (applicable in constuctor case also)
     console.log("poly");    // overloading works when names are same
     return num1+num2
 }

 console.log(add(100));
 console.log(add(50,50));



