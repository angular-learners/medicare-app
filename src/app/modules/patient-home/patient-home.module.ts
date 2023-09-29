import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientHomeRoutingModule } from './patient-home-routing.module';
import { PatientHomeComponent } from './patient-home.component';


@NgModule({
  declarations: [
    PatientHomeComponent
  ],
  imports: [
    CommonModule,
    PatientHomeRoutingModule
  ]
})
export class PatientHomeModule { }
