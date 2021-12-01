import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-paymenthistory',
  templateUrl: './paymenthistory.component.html',
  styleUrls: ['./paymenthistory.component.css']
})
export class PaymenthistoryComponent implements OnInit {

  acno=""

  transaction: any


  constructor(private ds:DataService) { 
    this.acno=this.ds.currentAcno
    
    this.transaction=this.ds.getTransaction(this.acno)
    console.log(this.transaction)
    
  }

  ngOnInit(): void {
  }




}
