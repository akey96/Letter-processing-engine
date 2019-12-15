import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { EditorRoutingModule } from './editor-routing.module';


// Modulos de material
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { DialogImage } from '../home/list-images/dialog-image/dialog-image';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import { RedactorModule } from '../redactor/redactor.module';
import { ContentListComponent } from './content-list/content-list.component';

@NgModule({
  declarations: [ContentComponent, ContentListComponent],
  entryComponents: [
    DialogImage
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  imports: [
    CommonModule,
    EditorRoutingModule,
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
    MatDialogModule,
    RedactorModule
  ]
})
export class EditorModule { }
