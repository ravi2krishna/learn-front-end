import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html'
 
})
export class HomePageComponent{

   myForm: any;


  constructor(private appService: AppService, private restService: RestService) {
   
  }
  signIn(){
    this.appService.navigate('signin',null);
  }
}
