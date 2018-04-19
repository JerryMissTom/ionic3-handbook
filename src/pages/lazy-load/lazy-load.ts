import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-lazy-load',
  templateUrl: 'lazy-load.html',
})
export class LazyLoadPage {

  name:string;
  age:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events:Events) {
    this.name=this.navParams.get('name');
    this.age=this.navParams.get('age');
  }

  back(){
    this.navCtrl.pop();
  }

  sendEvent(){
    this.events.publish('changeTitle','ionic');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LazyLoadPage');
  }

}
