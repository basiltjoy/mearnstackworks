//                Interaction in JS Runtime Environment
//       *JS Engine*                                  *Web API*
// Call Stack                                  //store the element got from callstack and hold it and 
// Memory Heap                                 //then store it into call_back_queue
//eventloop then execute it's function
//if the function is not JS type it's
//forwarded to WebAPI                          Web Api(functions)- DOM,Promise,SetTime(Out,In),fetch


//eventloop=> Monitor whether call back is empty or not, and if stack is empty callbackqueue 
//element is pushed into callstack                              


console.log("line1");
console.log("line2");
setTimeout(() => {
      console.log("first set Time Out");
}, 0)
setTimeout(() => {
      console.log("Second set Time Out");
}, 3000)
console.log("line3");