import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarathonsComponent } from '../components/marathons/marathons.component';

const routes: Routes = [
  { path: '', component: MarathonsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarathonsRoutingModule { }
