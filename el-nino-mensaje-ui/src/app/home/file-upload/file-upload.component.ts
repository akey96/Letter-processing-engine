import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { FileUploadModel } from '../../shared/models/fileUploadedModel';
import {PopUpService} from 'src/app/shared/services/pop-up.service';
import { FirebaseStorageService } from '../../shared/services/firebase-storage.service';


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

  constructor(
    private _http: HttpClient,
    public popUpService: PopUpService,
    private firebaseStorage: FirebaseStorageService) {}

  ngOnInit() {
  }

  onClick() {
    let fileUpload: any = document.getElementById('fileUpload') as HTMLInputElement;    
    let validate = true;

    fileUpload.onchange = () => {
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

            this.files.push({
              data: file,
              state: 'in',
              inProgress: false,
              progress: 0,
              canRetry: true,
              canCancel: true
            });
          } else {
            validate = false;
            this.popUpService.showError('Solo se permiten imágenes de formato jpg, jpeg y png');
          }
        }

      }
      if(validate) {
        this.uploadFiles();
      }
    };

    fileUpload.click();
  }

  cancelFile(file: FileUploadModel) {

    this.removeFileFromArray(file);
  }

  retryFile(file: FileUploadModel) {
    this.uploadFile(file);

    file.canRetry = false;
  }

  private uploadFile(file: FileUploadModel) {
    // agregar el servicio de firebase

    const fd = new FormData();
    fd.append(this.param, file.data);
    
    let archivo = fd.get(this.param);

    let referencia =  this.firebaseStorage.referenciaCloudStorage(archivo['name']);
    let tarea = this.firebaseStorage.tareaCloudStorage(archivo['name'], archivo);
    
    tarea.percentageChanges().subscribe((porcentaje) => {
      file.progress = Math.round(porcentaje);
      if (file.progress == 100) {
        file.inProgress = false;
      }
    }, error => {
      file.inProgress = false;
      file.canRetry = true;
    });

    referencia.getDownloadURL().subscribe((URL) => {
      this.removeFileFromArray(file);
          // cambiar cuerpo por el retorno de la url
      this.complete.emit({
        name: file.data.name,
        url:URL
      });
    });
  }

  private uploadFiles() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.value = '';

    this.files.forEach(file => {
      this.uploadFile(file);
    });

  }

  private removeFileFromArray(file: FileUploadModel) {
    const index = this.files.indexOf(file);

    if (index > -1) {
      this.files.splice(index, 1);
    }
  }
}
