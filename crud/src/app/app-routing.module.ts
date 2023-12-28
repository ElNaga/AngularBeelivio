import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBodyComponent } from './components/main-body/main-body.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/main-body/main-body.module').then(m => m.MainBodyModule)
  },
  {
    path: 'mymarathons',
    loadChildren: () => import('./modules/my-marathons/my-marathons.module').then(m => m.MyMarathonsModule)
  },
  {
    path: 'marathons',
    loadChildren: () => import('./modules/marathons/marathons.module').then(m => m.MarathonsModule)

  },
  {
    path: 'marathons/admin',
    loadChildren: () => import('./modules/admin-marathons/admin-marathons.module').then(m => m.AdminMarathonsModule)

  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }