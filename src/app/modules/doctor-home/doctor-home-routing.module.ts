import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicareRoutes } from 'src/app/shared/routes/medicare.routes';
import { DoctorHomeComponent } from './doctor-home.component';

const routes: Routes = [
  {path:MedicareRoutes.DOCTOR_HOME,component:DoctorHomeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorHomeRoutingModule { }
