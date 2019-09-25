import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { PopUpService } from '../../shared/services/pop-up.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  userForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public userService: UserService, public popUpService: PopUpService ) {


  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
      username: new FormControl('undefined'),
      password: new FormControl('undefined'),
      userRole: new FormControl('', Validators.required),
      userStatus: new FormControl('PENDING')
    });
  }

  registerUser() {
    this.userService.sendUser(this.userForm.value).subscribe(() => {
      this.popUpService.showSuccess('El usuario fue guardado!');
      this.userForm.get('name').reset();
      this.userForm.get('birthday').reset();
      this.userForm.get('email').reset();
      this.userForm.get('userRole').reset();
    }, () => {
      this.popUpService.showError('No se pudo guardar al usuario intenta nuevamente');
    });

  }

}
