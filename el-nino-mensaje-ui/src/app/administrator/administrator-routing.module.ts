import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  UserHomeComponent
} from '../home/user-home/user-home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AdministratorGuard } from '../shared/guards/administrator.guard';

export const administratorRoutes: Routes = [{
  path: 'administrator',
  component: UserHomeComponent,
  canActivate: [
    AdministratorGuard
  ],
  children: [{
      path: '',
      redirectTo: 'register-user',
      pathMatch: 'full'
    },
    {
      path: 'register-user',
      component: RegisterUserComponent
    },
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(administratorRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AdministratorRoutingModule {}
