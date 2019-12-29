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
import { UserListComponent } from './user-list/user-list.component';

export const administratorRoutes: Routes = [{
  path: 'administrator',
  component: UserHomeComponent,
  canActivate: [
    AdministratorGuard
  ],
  children: [{
      path: '',
      redirectTo: 'user-list',
      pathMatch: 'full'
    },
    {
      path: 'user-list',
      component: UserListComponent
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
