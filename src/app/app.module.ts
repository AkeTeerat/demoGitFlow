import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Feature3Component } from './feature3/feature3.component';
import { LoginComponent } from './login/login.component';
import { AuthenComponent } from './authen/authen.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Feature3Component
    LoginComponent
    AuthenComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
