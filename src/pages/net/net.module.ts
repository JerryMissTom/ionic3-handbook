import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NetPage } from './net';

@NgModule({
  declarations: [
    NetPage,
  ],
  imports: [
    IonicPageModule.forChild(NetPage),
  ],
})
export class NetPageModule {}
