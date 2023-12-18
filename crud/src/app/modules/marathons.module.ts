import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarathonsRoutingModule } from './marathons-routing.module';
import { MarathonsComponent } from '../components/marathons/marathons.component';
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [MarathonsComponent],
  imports: [
    CommonModule,
    MarathonsRoutingModule,
    MatCardModule
  ]
})
export class MarathonsModule { }