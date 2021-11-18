import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "Let's start your Banking"  //String Interpolation

  accno = "Your Account Number"     //Property Binding

  acno = ""

  pwd = ""

  data: any = {
    1000: { acno: 1000, uname: "sachi", password: "1000", balance: 5000 },
    1001: { acno: 1001, uname: "aswin", password: "1001", balance: 3000 },
    1002: { acno: 1002, uname: "akhil", password: "1002", balance: 8000 }
  }

  constructor() { }

  ngOnInit(): void {
  }

 /*  accnoChange(event: any) {        //Event Binding with argument    
 
     this.acno = event.target.value; //Event Binding with argument
     console.log(this.acno);
 
   }
 
   pswdChange(event: any) {
 
     this.pwd = event.target.value;  //Event Binding with argument
     console.log(this.pwd);
 
   }  */



/*  login() {          //Event Binding
    alert("login Clicked")
  }    */  



  login() {
     var acno = this.acno;
     var pwd = this.pwd;
     let db = this.data
     if (acno in db) {
       if (pwd == db[acno].password) {
         alert("login Successful")
       }
       else {
         alert("Invalid password")
       }
     }
     else {
       alert("Invalid Account number")
     }
   }     
 
 
 
 /*   login(a:any,p:any) {       
      console.log(a);
           
      var acno = a.value;
      var pwd = p.value;
      let db = this.data
      if (acno in db) {
        if (pwd == db[acno].password) {
          alert("login Successful")
        }
        else {
          alert("Invalid password")
        }
      }
      else {
        alert("Invalid Account number")
      }
    }  */



}
