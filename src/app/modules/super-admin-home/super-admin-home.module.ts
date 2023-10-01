import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminHomeRoutingModule } from './super-admin-home-routing.module';
import { SuperAdminHomeComponent } from './super-admin-home.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from 'src/app/shared/module/shared.module';


@NgModule({
  declarations: [
    SuperAdminHomeComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    SuperAdminHomeRoutingModule,
    SharedModule
  ]
})
export class SuperAdminHomeModule { }
