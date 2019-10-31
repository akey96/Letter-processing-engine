import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface DialogData {
    urlImage
  }

@Component({
    selector: 'dialog-image',
    templateUrl: './dialog-image.html',
  })
  export class DialogImage {
  
    constructor(
      public dialogRef: MatDialogRef<DialogImage>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }