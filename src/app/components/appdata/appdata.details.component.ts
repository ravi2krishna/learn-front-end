// import { Component, OnInit , Input, Output, SimpleChanges, EventEmitter} from '@angular/core';
// import { AppService } from '../../shared/service/app.service';
// import { AnimationService } from '../../shared/service/animation.service';
// import { RestService } from '../../common/rest.service';
// import { AppData } from '../../entities/appdata.entity';
// import { ApexFormGroup } from '../../forms/apex.form';


// @Component({
//   selector: 'app-appdata-details',
//   templateUrl: './appdata.details.component.html'
 
// })
// export class AppDataDetailsComponent implements OnInit{
//    myForm: any;
//    codesList: any[] = [];
//    selectedIndex  = 0;
//   @Input() appData: AppData;
//   @Output() close: EventEmitter<any> =  new EventEmitter()

//   constructor(private appService: AppService, private restService: RestService) {
//      this.myForm = ApexFormGroup.AppDataFormGroup();
//       console.log(this.appData);
//   }

//     ngOnInit(){
//     }
//     ngOnChanges(changes: SimpleChanges) {
//       if(changes['appData']) {
//         this.appData = changes['appData'].currentValue;
//         console.log(this.appData);
//       }
//     }

//     onClose() {
//       this.close.emit();
//     }

//     save() {
//       this.restService.appDataSave(this.appData)
//         .subscribe( result =>{
//             this.onClose();
//         })
//     }
   
//     open(item: any) {
//       let code = this.appData.code;
//       this.appData = new AppData()
//       this.appData.code = code;

//     }
//   }
