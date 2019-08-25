import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatListModule, MatIconModule, MatExpansionModule, MatButtonModule} from '@angular/material';
import { SidebarModule } from 'ng-sidebar';
import { RootnavComponent } from './rootnav/rootnav.component';
import { ChildnavComponent } from './childnav/childnav.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    RootnavComponent,
    ChildnavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    SidebarModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
