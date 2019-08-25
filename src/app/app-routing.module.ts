import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'google',
    loadChildren: './google/google.module#GoogleModule',
  },
  {
    path: 'amazon',
    loadChildren: './amazon/amazon.module#AmazonModule',
  },
  {
    path: 'apple',
    loadChildren: './apple/apple.module#AppleModule',
  },{
    path:'microsoft',
    loadChildren:'./microsoft/microsoft.module#MicrosoftModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
