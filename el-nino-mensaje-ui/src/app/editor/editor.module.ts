import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetterResponseRedactorComponent } from './letter-response-redactor/letter-response-redactor.component';
import { EditorRoutingModule } from './editor-routing.module';



@NgModule({
  declarations: [LetterResponseRedactorComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
  ]
})
export class EditorModule { }
