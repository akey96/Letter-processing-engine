import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { PopUpService } from 'src/app/shared/services/pop-up.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(public formBuilder: FormBuilder, public authService: AuthenticationService, public userService: UserService,
              public router: Router, public popUpService: PopUpService) {
    this.loginFormGroup = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginFormGroup.value).subscribe((response: any) => {
      localStorage.setItem('access_token', response.access_token);
      this.authService.checkToken(response.access_token).subscribe((token: any) => {
        this.userService.getUserByUsername(token.user_name).subscribe((user: any) => {
          localStorage.setItem('principal', JSON.stringify(user));
          this.router.navigate([`/${user.personRole.split('_')[1]}/letter-list`]);
        });
      });
    }, () => {
      this.popUpService.showError('Las credenciales no estan en el sistema');
    });
  }
}
