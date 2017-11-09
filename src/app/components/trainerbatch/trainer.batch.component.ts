import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { Batch } from '../../entities/batch.entity';
import { User } from '../../entities/user.entity';

@Component({
  selector: 'app-trainer-batch',
  templateUrl: './trainer.batch.component.html'
 
})
export class TrainerBatchesComponent{

   myForm: any;
  batchList:any[]= [];
  batch:Batch;
  searchObj:any;
  user : any = new User();

  constructor(private appService: AppService, private restService: RestService) {
      this.user.id= this.appService.getSessionUser().id;
     this.searchObj = {
      user : this.user.id
    }
    this.batchSearch();
  }
   batchSearch() {
    console.log();
    this.restService.userBatch(this.searchObj)
      .subscribe((results) => {
        this.batchList = results;
        console.log(results);
      })
  }
    batchDetails(item: any){
    this.appService.navigate('/trainer/batchDetails', [{batchId: item.batch.id, batchUserId: item.id}]);
  }
}