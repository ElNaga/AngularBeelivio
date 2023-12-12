import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card'

import { MarathonsService, UserService } from './data.services';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    HttpClientInMemoryWebApiModule.forRoot(MarathonsService),
    HttpClientInMemoryWebApiModule.forRoot(UserService),
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
