import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';

import { AppFormGroup } from '../../shared/common/app.form';
import { Storage} from '../../shared/utils/storage';
import { RestService } from '../../common/rest.service';
import { Prop } from '../../common/props';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent {

   myForm: any;


  constructor(private sanitizer: DomSanitizer,private appService: AppService, private restService: RestService) {

  }
  getEmbedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/227255963');
  }
}
  // ngOnInit() {
   
  // }