import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WriteLetterComponent } from './home/write-letter/write-letter.component';

const routes: Routes = [
  { path: '', redirectTo: 'write-letter',  pathMatch: 'full' },
  { path: 'write-letter', component: WriteLetterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
