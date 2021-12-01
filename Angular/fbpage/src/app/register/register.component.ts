import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Vname = ""
  mobile = ''
  password = ''
  constructor() { }

  ngOnInit(): void {
  }

  name(event: any) {
    this.Vname = event.target.value
  }

  mobNum(event: any) {
    this.mobile = event.target.value
  }

  pass(event: any) {
    this.password = event.target.value
  }

  register(){
    var name=this.Vname
    var mob=this.mobile
    var pwd=this.password
    alert("account registered")
  }
}

