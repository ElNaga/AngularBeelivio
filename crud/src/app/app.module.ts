import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { MarathonsService, UserService } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { AppRoutingModule } from './app-routing.module';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { MyMarathonsComponent } from './components/my-marathons/my-marathons.component';
import { MarathonsComponent } from './components/marathons/marathons.component';
import { MarathonRowCardComponent } from './components/marathon-row-card/marathon-row-card.component';
import { PastCardComponent } from './components/past-card/past-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent,
    FeaturedCardComponent,
    MyMarathonsComponent,
    MarathonsComponent,
    MarathonRowCardComponent,
    PastCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    // HttpClientInMemoryWebApiModule.forRoot(MarathonsService),
    // HttpClientInMemoryWebApiModule.forRoot(UserService),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    MarathonsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
