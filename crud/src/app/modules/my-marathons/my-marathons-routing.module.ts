import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMarathonsComponent } from '../../components/my-marathons/my-marathons.component';

const routes: Routes = [
  { path: '', component: MyMarathonsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyMarathonsRoutingModule { }
