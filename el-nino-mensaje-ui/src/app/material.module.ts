import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
    imports: [
        MatSidenavModule,
        MatCardModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatSelectModule
    ],
    exports: [
        MatSidenavModule,
        MatCardModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatSelectModule
    ]
})
export class MaterialModule {

}