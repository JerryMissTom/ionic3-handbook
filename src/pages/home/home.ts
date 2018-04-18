import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NormalLoadPage } from '../normal-load/normal-load';

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {

  title : string = '';
  isShown : boolean = true;
  names : string[] = ['张三', '李四', '王二麻子'];

  constructor(public navCtrl : NavController) {
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
    // 界面加载进来运行，并且只运行一次，在这里可以进行网络请求，订阅事件等操作
    console.log('HomePage ionViewDidLoad');
  }

  ionViewWillEnter() {
    // 当界面将要成为active的时候运行，用的比较少
    console.log('HomePage ionViewWillEnter');
  }

  ionViewDidEnter() {
    // 界面每次变成active的时候都会运行，常见的使用场景是每次进入此界面都重新从网络获取数据
    console.log('HomePage ionViewDidEnter');
  }

  ionViewWillLeave() {
    // 界面将要离开的时候
    console.log('HomePage ionViewWillLeave');
  }

  ionViewDidLeave() {
    // 界面已经离开的时候，不在是active
    console.log('HomePage ionViewDidLeave');
  }

  ionViewWillUnload() {
    // 当界面被销毁的时候，这儿可以执行取消订阅等操作
    console.log('HomePage ionViewWillUnload');
  }

  ionViewCanEnter() {
    // 通过返回true或者false来决定是否可以进入此界面，返回true是可以
    console.log('HomePage ionViewCanEnter');
  }

  ionViewCanLeave() {
    // 通过返回true或者false来决定是否可以离开此界面，返回true是可以，这儿可以进行判断数据是否提交等操作
    console.log('HomePage ionViewCanLeave');
  }
}
