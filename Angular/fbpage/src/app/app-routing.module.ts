import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FbJasonComponent } from './fb-jason/fb-jason.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  {
    path:'register',component: RegisterComponent
  },
  {
    path:'',component: FbJasonComponent
  },
  {
  path:'userhome',component: UserhomeComponent
  },
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
