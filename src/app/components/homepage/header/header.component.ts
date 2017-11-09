import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../shared/service/app.service';
import { AnimationService } from '../../../shared/service/animation.service';
import { RestService } from '../../../common/rest.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
 
})
export class HeaderComponent{

   myForm: any;


  constructor(private appService: AppService, private restService: RestService) {
   
  }
  login(){
    this.appService.navigate('/auth/login',[]);
  }
}
