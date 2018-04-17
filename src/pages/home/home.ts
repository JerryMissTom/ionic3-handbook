import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NormalLoadPage } from '../normal-load/normal-load';

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {

  title : string = '';
  isShown : boolean = true;
  names : string[] = ['张三', '李四', '王二麻子'];

  constructor(public navCtrl : NavController) {}

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
}
