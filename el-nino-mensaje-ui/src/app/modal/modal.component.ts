import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PopUpService } from '../shared/services/pop-up.service';
import { ProfileService } from '../shared/services/profile.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  profileForm: FormGroup;

  constructor( public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public message:string,
    public formBuilder: FormBuilder,
    public profileService: ProfileService, 
    public popUpService: PopUpService,
    ) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
    
      name: new FormControl(''),
      words: new FormControl(''),
      
    });
  }
  onClickClose():void{
    this.dialogRef.close();
  }
  /*
  addProfile(){
    console.log(this.profileForm.value);
    this.profileService.sendProfile(this.profileForm.value).subscribe(() => {
      this.popUpService.showSuccess('Se registro correctamente');
      this.profileForm.get('name').reset();
      this.profileForm.get('words').reset();
   
    });
  }
  */
}

