/*   //closure
function out(){
    var a=10;
    function inner(){
      console.log(a);  
    }
   return inner()
}
out()  */


/*
var counter=0;
function incrementCounter(){
    counter++;
    console.log(counter);
}
incrementCounter()   */


//clousure with forloop frm print 1 to 5 
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    },i* 2000);
    
  }
}
x();
