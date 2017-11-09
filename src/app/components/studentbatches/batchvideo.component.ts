import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-batch-vedio',
  templateUrl: './batchvideo.component.html'

})
export class BatchVedioComponent {


  data: any;
  showSide: boolean = false;
  showSideLinks: boolean = false;
   @Input() video;
  @Output() close: EventEmitter<any> =  new EventEmitter()
  
  constructor(private sanitizer: DomSanitizer,private appService: AppService, private restService: RestService) {
  }

  onClose() {
    this.close.emit();
    console.log('close')
  }
//   selectItem(){
//     //this.close.emit(item);
//     let selectedItems: any[] = [];
//     this.studentList.forEach(element => {
//       if(element.checked){
//         delete element.checked;
//         selectedItems.push(element)
//       }
//     });
//     this.close.emit(selectedItems);
//   }
getEmbedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/229457692');
  }

}