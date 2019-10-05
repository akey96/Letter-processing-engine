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
  

  minDate = new Date(1910, 0, 1);
  maxDate = new Date((new Date()).getFullYear() - 18, 0, 1);

  constructor(public formBuilder: FormBuilder, public userService: UserService, public popUpService: PopUpService ) {


  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: new FormControl('',[
        Validators.required, 
        Validators.pattern('^[A-Za-z]+( [A-Za-z]+)+$')]),
      ci: new FormControl('',[
        Validators.required, 
        Validators.pattern('^[1-9]+ [A-Za-z]{2,3}$')]),
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
      this.popUpService.showSuccess('Se registro al usuario correctamente');
      this.userForm.get('name').reset();
      this.userForm.get('ci').reset();
      this.userForm.get('birthday').reset();
      this.userForm.get('email').reset();
      this.userForm.get('userRole').reset();
    }, (error) => {
      
      this.popUpService.showError(error.message);
    });

  }

}
