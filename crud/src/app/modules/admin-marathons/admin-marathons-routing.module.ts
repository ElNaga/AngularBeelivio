import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMarathonsComponent } from 'src/app/components/admin-panel/admin-marathons/admin-marathons.component';

const routes: Routes = [
  { path: '', component: AdminMarathonsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMarathonsRoutingModule { }
