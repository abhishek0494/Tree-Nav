import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppleComponent} from './apple.component';
import {MacbooksComponent} from './macbooks/macbooks.component'
import {AirComponent} from './macbooks/air/air.component'
import {ProComponent} from './macbooks/pro/pro.component'
import {PhonesComponent} from './phones/phones.component'
import {IphonesComponent} from './phones/iphones/iphones.component';
import {IpadComponent} from './phones/ipad/ipad.component'
import {ApplepayComponent} from './wallet/applepay/applepay.component'
const routes: Routes = [
  {
    path: '',
    component: AppleComponent,
  },
  {
    path: 'macbooks',
    component: MacbooksComponent,
  },
  {
    path: 'macbooks/air',
    component: AirComponent,
  },
  {
    path: 'macbooks/pro',
    component: ProComponent,
  },
  {
    path: 'phones',
    component: PhonesComponent,
  },
  {
    path: 'phones/iphones',
    component: IphonesComponent,
  },
  {
    path: 'phones/ipad',
    component: IpadComponent,
  },
  {
    path: 'applepay',
    component: ApplepayComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppleRoutingModule { }