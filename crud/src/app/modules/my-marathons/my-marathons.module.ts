import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMarathonsRoutingModule } from './my-marathons-routing.module';
import { MarathonsComponent } from '../../components/marathons/marathons.component';
import { MyMarathonsComponent } from 'src/app/components/my-marathons/my-marathons.component';
// import { MatCardModule } from '@angular/material/card'

@NgModule({
    declarations: [MyMarathonsComponent],
    imports: [
        CommonModule,
        MyMarathonsRoutingModule,
    ]
})
export class MyMarathonsModule { }