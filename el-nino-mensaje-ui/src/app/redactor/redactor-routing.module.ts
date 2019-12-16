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
import {
  LetterListComponent
} from './letter-list/letter-list.component';
import {
  LetterResponseComponent
} from './letter-response/letter-response.component';
import { RedactorGuard } from '../shared/guards/redactor.guard';

export const redactorRoutes: Routes = [{
  path: 'redactor',
  component: UserHomeComponent,
  canActivate: [
    RedactorGuard
  ],
  children: [{
      path: '',
      redirectTo: 'letter-list',
      pathMatch: 'full'
    },
    {
      path: 'letter-list',
      component: LetterListComponent
    },
    {
      path: 'letter-response/:id',
      component: LetterResponseComponent
    },
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(redactorRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class RedactorRoutingModule {}
