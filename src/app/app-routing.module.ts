import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './shared/components/landing/landing.component';
import { LoginComponent } from './shared/components/login/login.component';
import { CreateAccountComponent } from './shared/components/create-account/create-account.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';

const routes: Routes = [
  {
    path:'',component:LandingComponent
  },
  {
    path:'landing',component:LandingComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'create-account',component:CreateAccountComponent
  },
  {
    path:'toolbar',component:ToolbarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
