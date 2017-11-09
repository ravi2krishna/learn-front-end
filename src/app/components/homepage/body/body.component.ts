import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../shared/service/app.service';
import { AnimationService } from '../../../shared/service/animation.service';
import { RestService } from '../../../common/rest.service';
import { bodyContent } from '../../../models/bodyContent';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'

})
export class BodyComponent {
  bodyContent : any;
  myForm: any;
  isShowMoreCards : boolean;


  constructor(private appService: AppService, private restService: RestService) {
    this.bodyContent = bodyContent;
    this.isShowMoreCards = false;
    console.log(bodyContent)
  }
  showMoreCards(){
    this.isShowMoreCards = true;
  }
   login(){
    this.appService.navigate('/auth/login',[]);
  }
}
