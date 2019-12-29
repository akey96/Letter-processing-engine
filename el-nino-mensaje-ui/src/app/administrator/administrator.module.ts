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
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [RegisterUserComponent, UserListComponent],
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
    MatTableModule
  ]
})
export class AdministratorModule {}
