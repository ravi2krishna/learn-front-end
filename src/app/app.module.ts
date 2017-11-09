import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';
import { appRoutes, appRoutingProviders } from './app.routes';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    MaterialModule, MdNativeDateModule,
    appRoutes,
    SharedModule.forRoot()
  ],
  providers: [appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
