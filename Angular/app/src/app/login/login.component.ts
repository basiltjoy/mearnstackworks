import { Component, OnInit } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "helps you connect and share with the people"
  user = ""
  password = ""

  uname = ""
  phn = ""

  data: any = {
    basil: { accid: 1000, uname: "Basil", password: "9497485708" },
    akhil: { accid: 1001, uname: "Akhil", password: "9495256403" },
    suryan: { accid: 1002, uname: "Suryan", password: "9946646403" },
  }
  constructor(private routes:Router){}

  ngOnInit(): void {
  }


  username(event: any) {
    this.user = event.target.value;
  }

  userpswd(event: any) {
    this.password = event.target.value;
  }      

  login() {
    var uname = this.user
    var pwd = this.password
    var db = this.data

    if (uname in db) {
      if (pwd == db[uname].password) {
        alert("login succesfull")
       this.routes.navigateByUrl('user')
      }
      else {
        alert("Password mismatch")
      }
    }
    else {
      alert("User not found")
    }
  }




}
