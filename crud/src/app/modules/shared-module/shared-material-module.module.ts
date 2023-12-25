import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatNativeDateModule } from "@angular/material/core";
import { FilterPipe } from "src/app/pipes/filter.pipe";
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [
        FilterPipe
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        FormsModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatSnackBarModule
    ],
    exports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        FormsModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FilterPipe,
        ReactiveFormsModule,
        MatSnackBarModule
    ]
})
export class SharedMaterialModule { }