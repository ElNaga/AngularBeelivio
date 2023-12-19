import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { MyMarathonsComponent } from './components/my-marathons/my-marathons.component';
import { MarathonsComponent } from './components/marathons/marathons.component';

const routes: Routes = [
  { path: 'home', component: MainBodyComponent },
  {
    path: 'mymarathons',
    loadChildren: () => import('./modules/my-marathons/my-marathons.module').then(m => m.MyMarathonsModule)
  },
  {
    path: 'marathons',
    loadChildren: () => import('./modules/marathons/marathons.module').then(m => m.MarathonsModule)

  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }