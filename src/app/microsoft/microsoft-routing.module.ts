import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MicrosoftComponent} from './microsoft.component';
import {WindowsComponent} from './windows/windows.component'
import {AzureComponent} from './azure/azure.component'
import {OfficeComponent} from './office/office.component'
import {WordComponent} from './office/word/word.component'
import {ExcelComponent} from './office/excel/excel.component'
import {PowerpointComponent} from './office/powerpoint/powerpoint.component'
const routes: Routes = [
  {
    path: '',
    component: MicrosoftComponent,
  },
  {
    path: 'windows',
    component: WindowsComponent,
  },
  {
    path: 'azure',
    component: AzureComponent,
  },
  {
    path: 'office',
    component: OfficeComponent,
  },
  {
    path: 'office/word',
    component: WordComponent,
  },
  {
    path: 'office/excel',
    component: ExcelComponent,
  },
  {
    path: 'office/powerpoint',
    component: PowerpointComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicrosoftRoutingModule { }