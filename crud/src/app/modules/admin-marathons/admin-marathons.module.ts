import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMarathonsRoutingModule } from './admin-marathons-routing.module';
import { SharedMaterialModule } from '../shared-module/shared-material-module.module';
import { AdminMarathonsComponent } from 'src/app/components/admin-marathons/admin-marathons.component';

@NgModule({
  declarations: [AdminMarathonsComponent],
  imports: [
    CommonModule,
    AdminMarathonsRoutingModule,
    SharedMaterialModule
  ]
})
export class AdminMarathonsModule { }
