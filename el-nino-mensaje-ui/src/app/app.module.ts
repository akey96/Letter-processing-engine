import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';


const routes: Routes = [

  { path: 'personal', component: PersonalComponent},

  
];

@NgModule({
  declarations: [
    AppComponent
        PersonalComponent,

  ],
  imports: [
    BrowserModule,
        RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
