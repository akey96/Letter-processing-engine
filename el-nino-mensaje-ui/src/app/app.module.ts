import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NavigationMenuComponent } from './home/navigation-menu/navigation-menu.component';


import { UserHomeComponent } from './home/user-home/user-home.component';
import { WriteLetterComponent } from './home/write-letter/write-letter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LetterService } from './shared/services/letter.service';
import { PopUpService } from './shared/services/pop-up.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterUserComponent } from './register-user/register-user.component';

import {MaterialModule} from './material.module'; 
import { UserService } from './shared/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    UserHomeComponent,
    WriteLetterComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [LetterService, PopUpService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

