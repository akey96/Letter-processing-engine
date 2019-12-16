import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { PopUpService } from '../../shared/services/pop-up.service';
import { Profile } from 'src/app/shared/models/profile.model';
import {MatDialog} from '@angular/material';



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
              public popUpService: PopUpService) {}

  ngOnInit() {

    this.userForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z]+( [A-Za-z]+)+$')]),
      ci: new FormControl('', [
        Validators.required,
        Validators.pattern('^[1-9]+ [A-Za-z]{2,3}$')]),
      birthday: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      keywords: new FormControl('') ,
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      personRole: new FormControl('', Validators.required),
      personStatus: new FormControl('ACTIVE')
    });
  }

  registerUser() {
    this.userService.sendUser(this.userForm.value).subscribe(() => {
      this.popUpService.showSuccess('Se registro al usuario correctamente');
      this.userForm.get('name').reset();
      this.userForm.get('username').reset();
      this.userForm.get('password').reset();
      this.userForm.get('ci').reset();
      this.userForm.get('birthday').reset();
      this.userForm.get('email').reset();
      this.userForm.get('keywords').reset();
      this.userForm.get('personRole').reset();
    }, (error: any) => {
      if (error.error.cause.cause.message.indexOf('(ci)=') >= 0) {
        error.message = 'El número de carnet de identidad mas la extension que ingresaste ya está registrado en el sistema';
      } else if (error.error.cause.cause.message.indexOf('(email)=') >= 0) {
        error.message = 'El correo que ingresaste ya está registrado en el sistema';
      }
      this.popUpService.showError(error.message);
    });

  }
  redactorIsSelected() {
    return this.userForm.get('personRole').value === 'ROLE_REDACTOR';
  }

}
