import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarathonsRoutingModule } from './marathons-routing.module';
import { MarathonsComponent } from '../../components/marathons/marathons.component';
import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [MarathonsComponent],
  imports: [
    CommonModule,
    MarathonsRoutingModule,
    SharedModule
  ]
})
export class MarathonsModule { }