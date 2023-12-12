import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainBodyComponent } from './main-body/main-body.component';

// Define your routes here
const routes: Routes = [
    { path: 'home', component: MainBodyComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
    // { path: 'mymarathons', component: MyMarathonsComponent },
    // { path: 'marathons', component: MarathonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
