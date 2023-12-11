import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card'

import { MarathonsService, UserService } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    HttpClientInMemoryWebApiModule.forRoot(MarathonsService),
    HttpClientInMemoryWebApiModule.forRoot(UserService),
    BrowserAnimationsModule,
  ],
  providers: [
    MarathonsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
