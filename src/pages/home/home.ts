import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title : string = '';
  isShown : boolean = true;
  names : string[] = ['张三', '李四', '王二麻子'];

  constructor(public navCtrl : NavController) {}

  onChangeTitle(){
    console.log('HomePage');
    this.title="Home";
  }

}
