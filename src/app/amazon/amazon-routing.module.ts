import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AmazonComponent} from './amazon.component'
import {CloudComponent} from './cloud/cloud.component'
import {AwsComponent} from './cloud/aws/aws.component'
import {S3Component} from './cloud/s3/s3.component'
import {AmazonpayComponent} from './walet/amazonpay/amazonpay.component';
import {EcomerceComponent} from './ecomerce/ecomerce.component'
const routes: Routes = [
  {
    path: '',
    component: AmazonComponent,
  },
  {
    path: 'cloud',
    component: CloudComponent,
  },
  {
    path: 'cloud/aws',
    component: AwsComponent,
  },
  {
    path: 'cloud/s3',
    component: S3Component,
  },
  {
    path: 'pay',
    component: AmazonpayComponent,
  }
  ,
  {
    path: 'ecomerce',
    component: EcomerceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmazonRoutingModule { }