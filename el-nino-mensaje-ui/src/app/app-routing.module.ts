import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WriteLetterComponent } from './home/write-letter/write-letter.component';
import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'write-letter',  pathMatch: 'full' },
  { path: 'write-letter', component: WriteLetterComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
