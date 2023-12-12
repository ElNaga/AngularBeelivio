import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { MyMarathonsComponent } from './components/my-marathons/my-marathons.component';
import { MarathonsComponent } from './components/marathons/marathons.component';

// Define your routes here
const routes: Routes = [
    { path: 'home', component: MainBodyComponent },
    { path: 'mymarathons', component: MyMarathonsComponent },
    { path: 'marathons', component: MarathonsComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
