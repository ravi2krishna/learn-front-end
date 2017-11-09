import {
  Component,
  OnChanges,
  SimpleChanges,
  Input
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { RestService } from '../../common/rest.service';

@Component({
  selector: 'app-imgload',
  template: ` <div style="display: flex; align-items: center; justify-content: center;"> <img  alt="placeholder"  [src]="placeholder" height="100px" /> </div>`,
  styles: [''],
})
export class AppImgLoadComponent implements OnChanges{

    @Input() img: any = null;
   innerValue: string = null;
   
   _placeHolderSafe: SafeUrl;

  constructor(private sanitizer: DomSanitizer, private restService: RestService) {
     this.imgChange();
  }
  
  get placeholder() {
    return this._placeHolderSafe;
  }

  ngOnChanges(changes: SimpleChanges) {
      if(changes['img'] && changes['img'].currentValue != null) {
        this.imgChange();
      }
    }


   imgChange() {
    if(!this.img){
      this.innerValue  = `data:image/svg+xml;base64,PCEtLSBCeSBTYW0gSGVyYmVydCAoQHNoZXJiKSwgZm9yIGV2ZXJ5b25lLiBNb3JlIEAgaHR0cDovL2dvby5nbC83QUp6YkwgLS0+Cjxzdmcgd2lkdGg9IjM4IiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmY2ZDAwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICAgICAgPGNpcmNsZSBzdHJva2Utb3BhY2l0eT0iLjUiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMTgiPgogICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0KICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCiAgICAgICAgICAgICAgICAgICAgdHlwZT0icm90YXRlIgogICAgICAgICAgICAgICAgICAgIGZyb209IjAgMTggMTgiCiAgICAgICAgICAgICAgICAgICAgdG89IjM2MCAxOCAxOCIKICAgICAgICAgICAgICAgICAgICBkdXI9IjFzIgogICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==`;
      this._placeHolderSafe = this.sanitizer.bypassSecurityTrustUrl(this.innerValue);
    } else {
      console.log(this.img);
      this.restService.imgload(this.img).subscribe( imgData =>{
          this._placeHolderSafe = this.sanitizer.bypassSecurityTrustUrl(imgData.src);
      });
      // this._placeHolderSafe = this.sanitizer.bypassSecurityTrustUrl(this.img.src);
    }
  }
}