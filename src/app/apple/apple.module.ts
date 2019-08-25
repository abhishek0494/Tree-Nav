  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppleRoutingModule } from './apple-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatListModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatPaginatorModule,
  MatCardModule,
  MatExpansionModule,
  MatIconModule
} from '@angular/material';
import { ProComponent } from './macbooks/pro/pro.component';
import { AirComponent } from './macbooks/air/air.component';
import { ApplepayComponent } from './wallet/applepay/applepay.component';
import { IphonesComponent } from './phones/iphones/iphones.component';
import { IpadComponent } from './phones/ipad/ipad.component';
import { AppleComponent } from './apple.component';
import { MacbooksComponent } from './macbooks/macbooks.component';
import { PhonesComponent } from './phones/phones.component'
import { AvatarModule } from 'ngx-avatar';
import { RatingModule } from 'ng-starrating';
@NgModule({
  declarations: [ProComponent, AirComponent, ApplepayComponent, IphonesComponent, IpadComponent, AppleComponent, MacbooksComponent, PhonesComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    AppleRoutingModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MDBBootstrapModule,
    AvatarModule,
    RatingModule
  ],
  providers: []
})
export class AppleModule { }