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
  ContentComponent
} from './content/content.component';
import { ContentListComponent } from './content-list/content-list.component';

export const editorRoutes: Routes = [{
  path: 'editor',
  component: UserHomeComponent,
  children: [{
      path: '',
      redirectTo: 'content-list',
      pathMatch: 'full'
    },
    {
      path: 'content-list',
      component: ContentListComponent
    },
    {
      path: 'content/:id',
      component: ContentComponent,
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
