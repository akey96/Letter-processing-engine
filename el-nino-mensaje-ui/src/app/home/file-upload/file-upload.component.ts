import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { FileUploadModel } from '../../shared/models/fileUploadedModel';
import {PopUpService} from 'src/app/shared/services/pop-up.service';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 100 })),
      transition('* => void', [
        animate(300, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class FileUploadComponent implements OnInit {
  @Input() text = 'Click para agregar tus imagenes';
  @Input() param = 'file';
  @Input() target = 'https://file.io';
  @Input() accept = 'image/png, image/jpeg, image/jpg';
  @Input() isEnabled;
  
  @Output() complete = new EventEmitter<any>();
  fileInformation: any;
  private files: Array<FileUploadModel> = [];
  base64textString = [];
  constructor(
    private _http: HttpClient,
    public popUpService: PopUpService) {}

  ngOnInit() {
  }
  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
    this.uploadFiles();
  }
  onClick() {
    let fileUpload: any = document.getElementById('fileUpload') as HTMLInputElement;    
    let validate = true;

    fileUpload.onchange = (evt: any) => {

      for (let index = 0; index < fileUpload.files.length; index++) {
        
        let file = fileUpload.files[index];
        var fileName = file.name;
        var fileSize = file.size;

        if(fileSize > 3000000){
          validate = false;
          this.popUpService.showError('Solo se permiten imágenes de hasta 3 Mbytes de tamaño');

        }else{
          // recuperamos la extensión del archivo
          var ext = fileName.split('.').pop();
          if (ext == 'jpg' || ext == 'jpeg' || ext == 'png' ) {
            const reader = new FileReader();

            reader.onload = this.handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);


          } else {
            validate = false;
            this.popUpService.showError('Solo se permiten imágenes de formato jpg, jpeg y png');
          }
        }

      }
    
    };

    fileUpload.click();
  }

  private uploadFiles() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.value = '';

    this.base64textString.forEach(file => {
      this.removeFileFromArray(file);
      this.complete.emit({
        url:file
      });
    });

  }

  private removeFileFromArray(file: FileUploadModel) {
    const index = this.base64textString.indexOf(file);

    if (index > -1) {
      this.base64textString.splice(index, 1);
    }
  }
}
