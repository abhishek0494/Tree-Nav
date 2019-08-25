  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmazonRoutingModule } from './amazon-routing.module';


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
import { AwsComponent } from './cloud/aws/aws.component';
import { S3Component } from './cloud/s3/s3.component';
import { AmazonpayComponent } from './walet/amazonpay/amazonpay.component';
import { EcomerceComponent } from './ecomerce/ecomerce.component';
import { AmazonComponent } from './amazon.component';
import { CloudComponent } from './cloud/cloud.component';
import { WaletComponent } from './walet/walet.component'
@NgModule({
  declarations: [AwsComponent, S3Component, AmazonpayComponent, EcomerceComponent, AmazonComponent, CloudComponent, WaletComponent],
  imports: [
    CommonModule,
    AmazonRoutingModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatCardModule
  ],
  providers: []
})
export class AmazonModule { }