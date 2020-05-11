import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PulsateCheckboxComponent } from './common/pulsate-checkbox/pulsate-checkbox.component';

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        PulsateCheckboxComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
