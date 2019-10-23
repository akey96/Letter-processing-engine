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

export const redactorRoutes: Routes = [{
  path: 'redactor',
  component: UserHomeComponent,
  children: [{
      path: '',
      redirectTo: 'letters-list',
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
