import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminHomeRoutingModule } from './super-admin-home-routing.module';
import { SuperAdminHomeComponent } from './super-admin-home.component';


@NgModule({
  declarations: [
    SuperAdminHomeComponent
  ],
  imports: [
    CommonModule,
    SuperAdminHomeRoutingModule
  ]
})
export class SuperAdminHomeModule { }
