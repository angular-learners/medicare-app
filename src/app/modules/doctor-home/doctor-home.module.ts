import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorHomeRoutingModule } from './doctor-home-routing.module';
import { DoctorHomeComponent } from './doctor-home.component';
import { SharedModule } from 'src/app/shared/module/shared.module';

@NgModule({
  declarations: [
    DoctorHomeComponent
  ],
  imports: [
    CommonModule,
    DoctorHomeRoutingModule,
    SharedModule
  ]
})
export class DoctorHomeModule { }
