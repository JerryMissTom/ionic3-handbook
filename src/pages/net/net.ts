import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpProvider} from '../../providers/http/http';

@IonicPage()
@Component({selector: 'page-net', templateUrl: 'net.html'})
export class NetPage {

  constructor(private http : HttpProvider) {}

  ionViewDidLoad() {
    this.http.get('https://api.douban.com/v2/movie/in_theaters?start=0&count=5').subscribe(success => {
        console.log(success)
      }, fail => {
        console.log('网络错误');
      });
  }

  // post用法的列子
  requestData() {

    let url = '';
    let request = {
      name: '张三'
    };
   
    this.http.post(url, request).subscribe(success => {
        console.log(success);
      }, fail => {
        console.log('网络错误');
      });
  }

}