import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CloudComponent} from './cloud/cloud.component';
import {GcpComponent} from './cloud/gcp/gcp.component'
import {GoogleComponent} from './google.component';
import {ServicesComponent} from './services/services.component'
import {TechnologiesComponent} from './services/technologies/technologies.component';
import {JsframeworkComponent} from './services/technologies/Angular/jsframework/jsframework.component'
import {GolangComponent} from './services/technologies/golang/golang.component';
import {GmailComponent} from './services/gmail/gmail.component';
import {HangoutComponent} from './services/hangout/hangout.component';
import {DriveComponent} from './services/drive/drive.component';
import {PhonesComponent} from './phones/phones.component'
const routes: Routes = [
  {path: '',component:GoogleComponent},
  {path: 'cloud', component: CloudComponent},
  {path: 'cloud/gcp', component: GcpComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'services/technologies', component: TechnologiesComponent},
  {path: 'services/technologies/angular', component: JsframeworkComponent},
  {path: 'services/technologies/golang', component: GolangComponent},
  {path: 'services/gmail', component: GmailComponent},
  {path: 'services/hangout', component: HangoutComponent},
  {path: 'phones', component: PhonesComponent},
  {path: 'services/drive', component: DriveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleRoutingModule { }