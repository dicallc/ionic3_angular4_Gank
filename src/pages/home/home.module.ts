import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {HomePage} from "../home/home";
import {SuperTabsModule} from "ionic2-super-tabs";

@NgModule({
  declarations: [
    HomePage
  ],
  entryComponents: [
    HomePage
  ],
  imports: [
    IonicPageModule,
  ],
  exports: [
    IonicPageModule
  ],
})
export class MainPageModule {}
