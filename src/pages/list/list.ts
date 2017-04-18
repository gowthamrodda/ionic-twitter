import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppService} from '../app.service';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  screenName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private appService: AppService) {

    this.screenName = this.appService.screenName;

  }

}
