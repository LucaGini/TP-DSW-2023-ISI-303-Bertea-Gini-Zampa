import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { BodyComponent } from './body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

//Angular Manual
import { MatToolbarModule } from '@angular/material/toolbar'; //navbar
import { MatButtonModule } from '@angular/material/button'; //btn
import { MatIconModule } from '@angular/material/icon'; // icon
import {MatGridListModule} from '@angular/material/grid-list';// columnas y filas
import {MatFormFieldModule} from '@angular/material/form-field'; //contraseña
import {MatInputModule} from '@angular/material/input';
import { CarouselComponent } from './carousel/carousel.component';
import { BottomComponent } from './bottom/bottom.component';// login input 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    LoginComponent,
    CarouselComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }