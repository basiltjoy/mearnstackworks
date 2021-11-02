//In case of Success
var pro=new Promise((resolve,reject)=>{
    let time=2;
    if(time>1){
        console.log("session was good");
    }
})
pro.then(res=>console.log(res))  

// In case of rejection/error 
// pro.catch(res=>console.log(res));