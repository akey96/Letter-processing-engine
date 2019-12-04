import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { PopUpService } from '../../shared/services/pop-up.service';
import { ProfileService } from '../../shared/services/profile.service';
import { Profile } from 'src/app/shared/models/profile.model';
import {MatDialog} from '@angular/material';
import { ModalComponent } from './../../modal/modal.component';



@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  userForm: FormGroup;
  profiles: Profile[];

  minDate = new Date(1910, 0, 1);
  maxDate = new Date((new Date()).getFullYear() - 18, 0, 1);

  constructor(public formBuilder: FormBuilder,
     public userService: UserService, 
     public popUpService: PopUpService,
     public dialog: MatDialog,
     public profileService: ProfileService,
     //public profileService: profileService
      ) {


  }

  ngOnInit() {
    
    this.profileService.getProfiles().subscribe(response => {
      this.profiles= response._embedded.profiles;
    });
    
    this.userForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z]+( [A-Za-z]+)+$')]),
      ci: new FormControl('', [
        Validators.required,
        Validators.pattern('^[1-9]+ [A-Za-z]{2,3}$')]),
      birthday: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
      username: new FormControl('undefined'),
      password: new FormControl('undefined'),
      personRole: new FormControl('', Validators.required),
      personStatus: new FormControl('PENDING')
    });
  }

  registerUser() {
    console.log(this.userForm.value);
    this.userService.sendUser(this.userForm.value).subscribe(() => {
      this.popUpService.showSuccess('Se registro al usuario correctamente');
      this.userForm.get('name').reset();
      this.userForm.get('ci').reset();
      this.userForm.get('birthday').reset();
      this.userForm.get('email').reset();
      this.userForm.get('personRole').reset();
    }, (error: any) => {
      console.log(error.error.cause.cause.message);
      if (error.error.cause.cause.message.indexOf('(ci)=') >= 0) {
        error.message = 'El número de carnet de identidad mas la extension que ingresaste ya está registrado en el sistema';
      } else if (error.error.cause.cause.message.indexOf('(email)=') >= 0) {
        error.message = 'El correo que ingresaste ya está registrado en el sistema';
      }
      this.popUpService.showError(error.message);
    });

  }
  openDialog():void{
    const dialogRef = this.dialog.open( ModalComponent,{
     // width:'350 px',
      data :'',
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    })
  }

}
