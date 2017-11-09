import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { Batch } from '../../entities/batch.entity';
import { Branch } from '../../entities/branch.entity';
import { trigger, style, state} from '@angular/animations';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  animations:[
    trigger('clickedState',[
      state('default', style({
  
      })),
      state('clicked', style({
        backgroundColor:'#ccc',
        width:'150px',
        height:'150px',
      }))
    ])
  ] 

})
export class BatchesComponent {

  myForm: any;
  data: any;
  batch:Batch;
  iFilter: string = "";
  branch: any = new Branch();
  searchObj  : any;
  batchList: any[] = [];

  constructor(private appService: AppService, private restService: RestService) {
    this.branch.id = this.appService.getBranch().id;
    this.searchObj = {
      branch : this.branch.id
    }
    this.batchesSearch();
  }
batchesSearch() {
    this.restService.batchesSearch(this.searchObj)
      .subscribe(results => {
       console.log(results);
       this.batchList =results;
      })
  }
addBatches(item:any){ 
  console.log(item);
  if(!item){
      this.appService.navigate('batches/addbatches',[]);
  }else{
      this.appService.navigate('batches/addbatches',[{batchId: item.id}]);
  }
}

   delete(item){
    this.restService.delete('batch',item.id)
      .subscribe( result =>{
          this.batchesSearch();
        })
  }
  batchDetails(item){
    this.appService.navigate('batches/batchdetails',[{batchId: item.id}]);
  }
  filter() {

  }
}