import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {SuperTabs} from "ionic2-super-tabs";
import {IntentService} from "../../providers/IntentService";

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  image_list= ["福利","Android","iOS","前端"," 瞎推荐","App"];
  page1: any = HomePage;
  page2: any = HomePage;
  page3: any = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams,private service: IntentService) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad MainPage');
  }
  ionViewDidEnter() {
    this.service.announceMission(this.image_list[0]);
  }

  onTabSelect(ev: any) {
    this.service.announceMission(this.image_list[ev.index]);
  }

}
