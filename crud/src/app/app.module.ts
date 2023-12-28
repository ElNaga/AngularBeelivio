import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';

import { MarathonsService, UserService } from './data.services';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { MaratonDescriptionComponent } from './components/maraton-description/maraton-description.component';
import { SharedMaterialModule } from './modules/shared-module/shared-material-module.module';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { dbConfig } from './indexDB/db-config';
import { IndexDbService } from './indexDB/index-db-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MaratonDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSlideToggleModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedMaterialModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  providers: [
    MarathonsService,
    UserService,
    IndexDbService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

