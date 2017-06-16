import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import {HomePage} from "../home/home";
import {SuperTabsModule} from "ionic2-super-tabs";

@NgModule({
  declarations: [
    MainPage,
    HomePage
  ],
  entryComponents: [
    MainPage,
    HomePage
  ],
  imports: [
    IonicPageModule,
    SuperTabsModule
  ],
  exports: [
    IonicPageModule
  ],
})
export class MainPageModule {}
