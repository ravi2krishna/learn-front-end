import { MdSnackBar} from '@angular/material';
import {Injectable, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';


@Injectable()
export class ApexService {

     sessionUserEvent: EventEmitter<any>  = new EventEmitter( );
     menuEvent:  EventEmitter<any>  = new EventEmitter( );
     loaderEvent: EventEmitter<any>  = new EventEmitter( );

    constructor(private _iconRegistry: MdIconRegistry, private _domSanitizer: DomSanitizer, private _snackBarService: MdSnackBar){

    }
     showMessage(message: string){
        this._snackBarService.open(message, 'x',{ duration: 3000 });
      //  snackBarRef.onAction().subscribe( data => {console.log(data) ; });
    }
     showLoader(show: Boolean) {
         //setTimeout(() => {
             this.loaderEvent.next(show);
         //}, 100)
       
    }

   sessionUserEmit (sessionUser: any) {
        //console.log(sessionStorage.getItem("user"));
        this.sessionUserEvent.emit(sessionUser);
    }
    menuEmit(menu: any){
         this.menuEvent.next(menu);
    }

    url(url: string){
       return this._domSanitizer.bypassSecurityTrustResourceUrl(url);
    }

}