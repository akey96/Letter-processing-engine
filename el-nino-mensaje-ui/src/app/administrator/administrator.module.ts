import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  RegisterUserComponent
} from './register-user/register-user.component';
import {
  AdministratorRoutingModule
} from './administrator-routing.module';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatButtonModule,
  MatSelectModule
} from '@angular/material';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';



@NgModule({
  declarations: [RegisterUserComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,
  ]
})
export class AdministratorModule {}
