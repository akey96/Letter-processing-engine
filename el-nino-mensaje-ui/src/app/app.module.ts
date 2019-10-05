import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NavigationMenuComponent } from './home/navigation-menu/navigation-menu.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatCheckboxModule, MatRadioModule } from '@angular/material';

import { UserHomeComponent } from './home/user-home/user-home.component';
import { WriteLetterComponent } from './home/write-letter/write-letter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LetterService } from './shared/services/letter.service';
import { PopUpService } from './shared/services/pop-up.service';
import { HttpClientModule } from '@angular/common/http';
import { RedactorModule } from './redactor/redactor.module';
import { UserService } from './shared/services/user.service';
import { AdministratorModule } from './administrator/administrator.module';


import {MAT_DATE_LOCALE, MatProgressBarModule} from '@angular/material';

import { FileUploadComponent } from './home/file-upload/file-upload.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    UserHomeComponent,
    WriteLetterComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RedactorModule,
    AdministratorModule
  ],
  providers: [
    LetterService,
    PopUpService,
    UserService,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

