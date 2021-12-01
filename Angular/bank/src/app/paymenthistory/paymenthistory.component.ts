import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymenthistory',
  templateUrl: './paymenthistory.component.html',
  styleUrls: ['./paymenthistory.component.css']
})
export class PaymenthistoryComponent implements OnInit {

  acno=""

  transaction: any


  constructor(private ds:DataService,private router: Router) { 
    this.acno=this.ds.currentAcno
    
    this.transaction=this.ds.getTransaction(this.acno)
    
    
  }

  ngOnInit(): void {
  }

goback(){
  alert("Are you sure you want to exit")
    this.router.navigateByUrl('dashboard')
}


}
