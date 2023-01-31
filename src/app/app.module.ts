import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalModule } from './principal/principal.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserinterceptorsService } from './services/userinterceptors.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {matFormFieldAnimations, MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserinterceptorsService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
