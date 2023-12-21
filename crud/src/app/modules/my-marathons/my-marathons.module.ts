import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMarathonsRoutingModule } from './my-marathons-routing.module';
import { MyMarathonsComponent } from 'src/app/components/my-marathons/my-marathons.component';

@NgModule({
    declarations: [MyMarathonsComponent],
    imports: [
        CommonModule,
        MyMarathonsRoutingModule,
    ]
})
export class MyMarathonsModule { }