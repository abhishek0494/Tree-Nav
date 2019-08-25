  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MicrosoftRoutingModule } from './microsoft-routing.module';


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
import { WindowsComponent } from './windows/windows.component';
import { AzureComponent } from './azure/azure.component';
import { WordComponent } from './office/word/word.component';
import { ExcelComponent } from './office/excel/excel.component';
import { PowerpointComponent } from './office/powerpoint/powerpoint.component';
import { MicrosoftComponent } from './microsoft.component';
import { OfficeComponent } from './office/office.component'
@NgModule({
  declarations: [WindowsComponent, AzureComponent, WordComponent, ExcelComponent, PowerpointComponent, MicrosoftComponent, OfficeComponent],
  imports: [
    CommonModule,
    MicrosoftRoutingModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule
  ],
  providers: []
})
export class MicrosoftModule { }