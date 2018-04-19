import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { NormalLoadPage } from '../normal-load/normal-load';

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {

  title : string = '';
  isShown : boolean = true;
  names : string[] = ['张三', '李四', '王二麻子'];

  constructor(public navCtrl : NavController, public events:Events) {
    console.log("HomePage constructor");
  }

  onChangeTitle() {
    console.log('HomePage');
    this.title = "Home";
  }

  toLazyLoadPage() {
    this.navCtrl.push('LazyLoadPage', {
        name: 'ionic',
        age: 18
      });
  }

  toNormalLoadPage(){
    this.navCtrl.push(NormalLoadPage, {
      name: 'handbook',
      age: 20
    });
  }

  ionViewDidLoad() {
    console.log('HomePage ionViewDidLoad');
    this.events.subscribe('changeTitle',(title)=>{
      this.title=title;
    });
  }

  ionViewWillEnter() {
    console.log('HomePage ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('HomePage ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('HomePage ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('HomePage ionViewDidLeave');
  }

  ionViewWillUnload() {
    console.log('HomePage ionViewWillUnload');
    this.events.unsubscribe('changeTitle',()=>{
       console.log('取消订阅changeTitle事件');
    });
  }

  ionViewCanEnter() {
    console.log('HomePage ionViewCanEnter');
  }

  ionViewCanLeave() {
    console.log('HomePage ionViewCanLeave');
  }
}
