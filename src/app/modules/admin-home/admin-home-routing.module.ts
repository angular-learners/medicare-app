import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicareRoutes } from 'src/app/shared/routes/medicare.routes';
import { AdminHomeComponent } from './admin-home.component';

const routes: Routes = [
  {path:MedicareRoutes.ADMIN_HOME,component:AdminHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminHomeRoutingModule { }
