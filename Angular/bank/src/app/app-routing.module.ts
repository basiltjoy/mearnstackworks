import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PaymenthistoryComponent } from './paymenthistory/paymenthistory.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"",component:LoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'payment',component:PaymenthistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
