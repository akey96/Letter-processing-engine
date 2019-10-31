import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogImage } from './dialog-image/dialog-image';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {
  
  @Input() listImages=[];
  urlImage:string;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    console.log(this.listImages)
  }

  showDialog(url) {
    this.urlImage = url;
    this.openDialog();
  }

  hidenDialog(url) {
    this.urlImage = url;
    this.dialog.closeAll();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogImage, {
      width: '600px',
      data: {urlImage: this.urlImage}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
