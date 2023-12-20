import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarathonsRoutingModule } from './marathons-routing.module';
import { MarathonsComponent } from '../../components/marathons/marathons.component';
import { SharedMaterialModule } from '../shared-module/shared-material-module.module';

@NgModule({
  declarations: [MarathonsComponent],
  imports: [
    CommonModule,
    MarathonsRoutingModule,
    SharedMaterialModule
  ]
})
export class MarathonsModule { }