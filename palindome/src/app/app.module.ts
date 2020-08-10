import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StartComponent} from './start/start.component';
import {RouterModule, Routes} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import { FluxpalindromeComponent } from './fluxpalindrome/fluxpalindrome.component';
import {DataService} from "./services/data.service";
import {HttpClientModule} from "@angular/common/http";


const appRoutes: Routes = [
  { path: 'start/:parameter', component: StartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    FluxpalindromeComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RouterTestingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
