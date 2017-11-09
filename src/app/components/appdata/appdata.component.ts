// import { AppComponent } from '../../app.component';

// import { Component, OnInit } from '@angular/core';
// import { DataSource} from '@angular/cdk';
// import { AppService } from '../../shared/service/app.service';
// import { AnimationService } from '../../shared/service/animation.service';
// import { RestService } from '../../common/rest.service';


// // import { AppData } from '../../entities/appdata.entity';

// @Component({
//   selector: 'app-appdata',
//   templateUrl: './appdata.component.html'
 
// })
// export class AppDataComponent {

//    myForm: any;
//   isMenu:Boolean;
//   codesList: any[] = [];
//   dataSource: DataSource<any> = null
//   displayedColumns: any[] = ["name", "key", "action"];
//   selectedIndex  = 0;
//   showSide: boolean = false;
//   appData: any = {};
//   appDataList: any;

//   constructor(private appService: AppService, private restService: RestService) {
//     this.isMenu=true;
//     this.codesLoad();
//   }

//   codesLoad(){
//     this.restService.dataload('codes')
//       .subscribe( results => {
//         if(results ){
//           this.codesList = results;
//           if(this.codesList.length > 0){
//             this.dataLoad(this.codesList[0], 0)
//           }
//         }
//       })
//   }
//   dataLoad(searchObj: any, index){
//     this.selectedIndex = index;
//     searchObj = {};
//     searchObj.code = this.codesList[this.selectedIndex].key;
//     // this.dataSource = new AppDataDataSource(this.restService, searchObj);
//     this.restService.appDataSearch(searchObj)
//       .subscribe( results => {
//         this.appDataList = results;
//         console.log(this.appDataList)
        

//       })
//   }
//   open(item: any) {
//     console.log(item);
//     this.showSide = true;
//     if(!item ){
//       item = new AppData();
//       console.log(this.codesList[this.selectedIndex]);
//       item.code = this.codesList[this.selectedIndex].key;
//     }
//     this.appData = Object.assign({},item);
//   }
//   delete(item){
//     this.restService.delete('appdata',item._id)
//       .subscribe( result =>{
//           this.dataLoad(this.codesList[this.selectedIndex], this.selectedIndex);
//         })
//   }
//   onClose(action: any){
//     if(action){
//       this.dataLoad({}, this.selectedIndex);
//     }
//     this.showSide= false;
//   }
// }
