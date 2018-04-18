import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'normal-load',
  templateUrl: 'normal-load.html'
})

export class NormalLoadPage {

  name : string;
  age : number;

  constructor(public navCtrl : NavController, public navParams : NavParams) {
    // 变量初始化，获取从上一界面传过来的参数
    console.log("NormalLoadPage constructor");
    this.name = this.navParams.get('name');
    this.age = this.navParams.get('age');
  }

  ionViewDidLoad() {
    // 界面加载进来运行，并且只运行一次，在这里可以进行网络请求，订阅事件等操作
    console.error('NormalLoadPage ionViewDidLoad');
  }

  ionViewWillEnter() {
    // 当界面将要成为active的时候运行，用的比较少
    console.error('NormalLoadPage ionViewWillEnter');
  }

  ionViewDidEnter() {
    // 界面每次变成active的时候都会运行，常见的使用场景是每次进入此界面都重新从网络获取数据
    console.error('NormalLoadPage ionViewDidEnter');
  }

  ionViewWillLeave() {
    // 界面将要离开的时候
    console.error('NormalLoadPage ionViewWillLeave');
  }

  ionViewDidLeave() {
    // 界面已经离开的时候，不在是active
    console.error('NormalLoadPage ionViewWillLeave');
  }

  ionViewWillUnload() {
    // 当界面被销毁的时候，这儿可以执行取消订阅等操作
    console.error('NormalLoadPage ionViewWillUnload');
  }

  ionViewCanEnter() {
    // 通过返回true或者false来决定是否可以进入此界面，返回true是可以
    console.error('NormalLoadPage ionViewCanEnter');
  }

  ionViewCanLeave() {
    // 通过返回true或者false来决定是否可以离开此界面，返回true是可以，这儿可以进行判断数据是否提交等操作
    console.error('NormalLoadPage ionViewCanLeave');
  }
}
