import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LazyLoadPage } from './lazy-load';

@NgModule({
  declarations: [
    LazyLoadPage,
  ],
  imports: [
    IonicPageModule.forChild(LazyLoadPage),
  ],
})
export class LazyLoadPageModule {}
