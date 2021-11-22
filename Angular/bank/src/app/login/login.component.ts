import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

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



  constructor(private routers: Router, private ds: DataService) { }    //Dependancy Injection


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
    let result = this.ds.login(acno, pwd)
    if (result) {
      alert("login Successful")
      this.routers.navigateByUrl('dashboard')
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
