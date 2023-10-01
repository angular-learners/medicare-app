import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicareRoutes } from 'src/app/shared/routes/medicare.routes';
import { SuperAdminHomeComponent } from './super-admin-home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:MedicareRoutes.SUPER_ADMIN_HOME,component:SuperAdminHomeComponent,
  children:[
    {
      path:'users-list',component:UsersComponent
    }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminHomeRoutingModule { }
