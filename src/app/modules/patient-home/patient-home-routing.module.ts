import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicareRoutes } from 'src/app/shared/routes/medicare.routes';
import { PatientHomeComponent } from './patient-home.component';

const routes: Routes = [
  {path:MedicareRoutes.PATIENT_HOME,component:PatientHomeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientHomeRoutingModule { }
