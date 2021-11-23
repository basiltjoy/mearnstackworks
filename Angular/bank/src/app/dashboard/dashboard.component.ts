import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router, private ds: DataService) { }

  ngOnInit(): void {
  }

  credit() {
    var accno = this.accno
    var pwd = this.pwd
    var amt = this.amt
    var result = this.ds.credit(accno, pwd, amt)
    if (result) {
      alert(amt+"rs  Credited successfully, Avail balance :"+ result)

    }
  }

  debit() {
    var accno1 = this.accno1
    var pwd1 = this.pwd1
    var amt1 = this.amt1
    var result = this.ds.debit(accno1, pwd1, amt1)
    if(result){
      alert(amt1+"rs  Debited successfully, Avail balance :"+ result)
    }
  }

  logout() {
    alert("Are you sure you want to exit")
    this.router.navigateByUrl('')
  }
}
