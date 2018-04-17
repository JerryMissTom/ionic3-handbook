import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'normal-load',
  templateUrl: 'normal-load.html'
})
export class NormalLoadPage {

  name:string;
  age:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name=this.navParams.get('name');
    this.age=this.navParams.get('age');
    
  }



}
