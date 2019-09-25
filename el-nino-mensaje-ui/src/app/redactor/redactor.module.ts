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


@NgModule({
  declarations: [LetterListComponent],
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
    ReactiveFormsModule
  ]
})
export class RedactorModule {}
