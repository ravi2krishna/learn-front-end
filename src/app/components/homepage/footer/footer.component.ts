import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../shared/service/app.service';
import { AnimationService } from '../../../shared/service/animation.service';
import { RestService } from '../../../common/rest.service';
import { FooterContent } from '../../../models/footerContent';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  myForm: any;
  footerContent:any;
  constructor(private appService: AppService, private restService: RestService) {
    this.footerContent = FooterContent;
  }

}
