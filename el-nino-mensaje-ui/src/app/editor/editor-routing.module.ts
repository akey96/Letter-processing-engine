import {
    NgModule
  } from '@angular/core';
  import {
    RouterModule,
    Routes
  } from '@angular/router';
import { UserHomeComponent } from '../home/user-home/user-home.component';
import { LetterResponseRedactorComponent } from './letter-response-redactor/letter-response-redactor.component';
  
  export const editorRoutes: Routes = [{
    path: 'editor',
    component: UserHomeComponent,
    children: [{
        path: '',
        redirectTo: 'letters-list',
        pathMatch: 'full'
      },
      {
        path: 'letter-response-redactor/:id',
        component: LetterResponseRedactorComponent,
      }
    ]
  }];
  
  @NgModule({
    imports: [
      RouterModule.forChild(editorRoutes),
    ],
    exports: [
      RouterModule
    ]
  })
  export class EditorRoutingModule {}
  