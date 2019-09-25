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
      primaryEmail: new FormControl('', Validators.required),
    });
  }

  sendMessage() {

    this.userService.sendUser(this.userForm.value).subscribe(() => {
      this.popUpService.showSuccess('Felicidades tu carta fue mandada exitosamente!');
    }, () => {
      this.popUpService.showError('Ups!! Algo malo paso, intenta mandarnos tu carta nuevamente');
    });

  }

}
