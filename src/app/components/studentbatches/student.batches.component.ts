import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { User } from './../../entities/user.entity';

@Component({
  selector: 'app-student-batch',
  templateUrl: './student.batches.component.html'
 
})
export class StudentBatchesComponent{

   myForm: any;
    batchList:any[] =[];
    searchObj:any ={};
  user : any = new User();
   
  constructor(private appService: AppService, private restService: RestService) {
     this.user.id= this.appService.getSessionUser().id;
     this.searchObj = {
      user : this.user.id
    }
    this.batchSearch();
  }
  batchSearch() {
    this.restService.post('batch/user', this.searchObj)
      .subscribe((results) => {
        this.batchList = results;
        console.log(results);
    })
  }
  batchDetails(item: any){
    this.appService.navigate('/student/batchDetails', [{batchId: item.batch.id, batchUserId: item.id}]);
  }
}