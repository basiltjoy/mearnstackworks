import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname = ""
  acno = ""
  pswd = ""


  formValidation = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    pswd: ['', [Validators.required]]
  })


  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {

    if (this.formValidation.get('')?.errors) { }

    var uname = this.formValidation.value.uname;
    var acno = this.formValidation.value.acno;
    var pswd = this.formValidation.value.pswd;
    if (this.formValidation.valid) {
      var result = this.ds.register(acno, uname, pswd)

      if (result) {
        alert("Registration successful")
        this.router.navigateByUrl('')
      }
      else {
        alert("Account already exist, proceed with login")
        this.router.navigateByUrl('')
      }
    }
    else{
       alert("set your account password")
     } 
  }
  


}
