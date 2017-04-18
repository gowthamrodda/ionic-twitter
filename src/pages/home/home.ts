import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppService} from '../app.service';
import {ListPage} from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  twitterForm: FormGroup;
  constructor(public navCtrl: NavController, private fb:FormBuilder, private appService:AppService) {

    this.twitterForm = this.fb.group({
      screenName: ['',[Validators.compose([Validators.required])]]
    });

  }
  getTweets(form,valid) {
    if(valid) {
      console.log(form.screenName);

      this.appService.screenName = form.screenName;
      this.navCtrl.push(ListPage);

    } else {
      console.error('Invalid bro!');
    }

  }

}
