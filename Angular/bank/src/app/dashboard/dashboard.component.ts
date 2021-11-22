import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  credit() {
    alert("Are you sure to proceed with transaction")
  }

  debit() {
    alert("Are you sure to proceed with transaction")
  }
}
