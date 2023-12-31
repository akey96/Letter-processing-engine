import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  RedactorRoutingModule
} from './redactor-routing.module';
import {
  LetterListComponent
} from './letter-list/letter-list.component';
import {
  MatTableModule
} from '@angular/material/table';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatIconModule
} from '@angular/material/icon';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatSortModule
} from '@angular/material/sort';
import {
  MatCardModule
} from '@angular/material/card';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatPaginatorModule
} from '@angular/material/paginator';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { LetterResponseComponent } from './letter-response/letter-response.component';
import { DialogImage } from '../home/list-images/dialog-image/dialog-image';

import { FlexLayoutModule } from '@angular/flex-layout';


import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from "@angular/material";
import { ListImagesComponent } from '../home/list-images/list-images.component';
import { DialogContent } from './letter-response/dialog-content/dialog-content';
import {
  MatDatepickerModule,
  MatSelectModule
} from '@angular/material';


@NgModule({
  declarations: [LetterListComponent, LetterResponseComponent, DialogImage, DialogContent, ListImagesComponent],
  entryComponents: [
    DialogImage,
    DialogContent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  imports: [
    CommonModule,
    RedactorRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  exports: [ListImagesComponent]
})
export class RedactorModule {}
