import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContentService } from './../../../shared/services/content.service';
import { PopUpService } from './../../../shared/services/pop-up.service';
import {MatDialog} from '@angular/material';


export interface DialogData {
    personId: number,
    letterId: number
  }

@Component({
    selector: 'dialog-content',
    templateUrl: './dialog-content.html',
    styleUrls: ['./dialog-content.css']
  })
  export class DialogContent  {
    contentForm: FormGroup;

    constructor(
      public dialogRef: MatDialogRef<DialogContent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,
      public formBuilder: FormBuilder,
      public contentService: ContentService,
      public popUpService: PopUpService) {
        let lettersArray = [this.data.letterId];
        lettersArray.push()
        this.contentForm = this.formBuilder.group({
          description: new FormControl('', [
            Validators.required,
            Validators.pattern('^[A-Za-z]+(\ +[A-Za-z]+)*$')]),
          content: new FormControl('', [
            Validators.required,
            Validators.pattern('^[A-Za-z]+(\ +[A-Za-z]+)*$')]),
          creationDate: new FormControl(Date.now(), Validators.required),
          letters: new FormControl(lettersArray)
        });
      }
    
    onNoClick(): void {
      this.dialogRef.close();
    }

    registerContent(){
      this.contentService.createContent(this.data.personId, this.contentForm.value).subscribe((resp) => {
        this.dialogRef.close();
        this.popUpService.showSuccess('Se registro el contenido correctamente');
      }, (error) => {
        this.dialogRef.close();
        this.popUpService.showError(error);
      })
    }
  
  }