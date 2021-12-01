import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accno = ""
  pwd = ""
  amt = ""

  accno1 = ""
  pwd1 = ""
  amt1 = ""

  creditForm = this.fb.group({
    accno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required]],
    amt: ['', [Validators.required]]
  })

  debitForm = this.fb.group({
    accno1: ['', [Validators.required,Validators.pattern('[0-9]*')]],
    pwd1: ['', [Validators.required]],
    amt1: ['', [Validators.required]]
  })

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  user=this.ds.currentUser

  credit() {
    if (this.creditForm.get('')?.errors) { }
    var accno = this.creditForm.value.accno
    var pwd = this.creditForm.value.pwd
    var amt = this.creditForm.value.amt
    if (this.creditForm.valid) {
      var result = this.ds.credit(accno, pwd, amt)
      if (result) {
        alert("Rs/-" + amt + " Credited successfully, Avail balance :" + result)
        window.location.reload()
      }
    }
    else {
      alert("Invalid data Submitted")
      window.location.reload()
    }
  }

  debit() {
    var accno1 = this.debitForm.value.accno1
    var pwd1 = this.debitForm.value.pwd1
    var amt1 = this.debitForm.value.amt1
    if (this.debitForm.valid) {
      var result = this.ds.debit(accno1, pwd1, amt1)
      if (result) {
        alert("Rs/-" + amt1 + "  Debited successfully, Avail balance :" + result)
        window.location.reload()
      }
    }
    else {
      alert("Invalid data Submission occured")
      window.location.reload()
    }
  }

  logout() {
    alert("Are you sure you want to exit")
    this.router.navigateByUrl('')
  }

 

}
