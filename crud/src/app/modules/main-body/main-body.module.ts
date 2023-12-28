import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBodyRoutingModule } from './main-body-routing.module';
import { SharedMaterialModule } from '../shared-module/shared-material-module.module';
import { MainBodyComponent } from 'src/app/components/main-body/main-body.component';
import { PastCardComponent } from 'src/app/components/past-card/past-card.component';
import { FeaturedCardComponent } from 'src/app/components/featured-card/featured-card.component';
import { MarathonRowCardComponent } from 'src/app/components/marathon-row-card/marathon-row-card.component';

@NgModule({
  declarations: [
    MainBodyComponent,
    PastCardComponent,
    FeaturedCardComponent,
    MarathonRowCardComponent,
  ],
  imports: [
    CommonModule,
    MainBodyRoutingModule,
    SharedMaterialModule
  ]
})
export class MainBodyModule { }