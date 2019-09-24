import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WriteLetterComponent } from './home/write-letter/write-letter.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'write-letter',  pathMatch: 'full' },
  { path: 'write-letter', component: WriteLetterComponent},
  { path: 'register-user', component: RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
