import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './shared/components/landing/landing.component';
import { LoginComponent } from './shared/components/login/login.component';
import { CreateAccountComponent } from './shared/components/create-account/create-account.component';
import { MedicareRoutes } from './shared/routes/medicare.routes';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: MedicareRoutes.EMPTY_URL, component: LandingComponent },
  { path: MedicareRoutes.LANDING, component: LandingComponent },
  { path: MedicareRoutes.LOGIN, component: LoginComponent },
  { path: MedicareRoutes.CREATE_ACCOUNT, component: CreateAccountComponent },
  {path: '',loadChildren:()=>import("./modules/admin-home/admin-home.module").then(m=>m.AdminHomeModule)},
{path: '',loadChildren:()=>import("./modules/doctor-home/doctor-home.module").then(m=>m.DoctorHomeModule),canActivate:[AuthGuard]},
  {path: '',loadChildren:()=>import("./modules/patient-home/patient-home.module").then(m=>m.PatientHomeModule)},
  {path: '',loadChildren:()=>import("./modules/super-admin-home/super-admin-home.module").then(m=>m.SuperAdminHomeModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
