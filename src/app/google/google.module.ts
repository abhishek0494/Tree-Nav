  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GoogleRoutingModule } from './google-routing.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatListModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatPaginatorModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';
import { CloudComponent } from './cloud/cloud.component';
import { GmailComponent } from './services/gmail/gmail.component';
import { HangoutComponent } from './services/hangout/hangout.component';
import { DriveComponent } from './services/drive/drive.component';
import { JsframeworkComponent } from './services/technologies/Angular/jsframework/jsframework.component';
import { MaterialdesignComponent } from './services/technologies/Angular/materialdesign/materialdesign.component';
import { GolangComponent } from './services/technologies/golang/golang.component';
import { Pixel3Component } from './phones/pixel/pixel3/pixel3.component';
import { Pixel3xlComponent } from './phones/pixel/pixel3xl/pixel3xl.component';
import { GoogleComponent } from './google.component';
import { GcpComponent } from './cloud/gcp/gcp.component';
import { ServicesComponent } from './services/services.component';
import { TechnologiesComponent } from './services/technologies/technologies.component';
import { PhonesComponent } from './phones/phones.component'
import { AvatarModule } from 'ngx-avatar';
import { RatingModule } from 'ng-starrating';
@NgModule({
  declarations: [CloudComponent, GmailComponent, HangoutComponent, DriveComponent, JsframeworkComponent, MaterialdesignComponent, GolangComponent, Pixel3Component, Pixel3xlComponent, GoogleComponent, GcpComponent, ServicesComponent, TechnologiesComponent, PhonesComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    GoogleRoutingModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatCardModule,
    AvatarModule,
    RatingModule,
    MatIconModule
  ],
  providers: []
})
export class GoogleModule { }