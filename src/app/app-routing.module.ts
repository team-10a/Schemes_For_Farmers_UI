import { IndexComponent } from './index/index.component';
import { BidderHomeComponent } from './bidder-home/bidder-home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index', component:IndexComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'register', component: RegisterComponent},
  {path:'bidder-home', component:BidderHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
