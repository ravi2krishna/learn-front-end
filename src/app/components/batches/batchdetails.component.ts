import { Component, OnInit,Input, Output, SimpleChanges, EventEmitter  } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
// import { Batch } from '../../entities/batch.entity';
import { BatchTopic } from '../../entities/batchTopic.entity';
import { Branch } from '../../entities/branch.entity';
import { BatchFormGroup } from './../../forms/batch.form';
// import { AdminFormGroup } from '../../forms/admin.form';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html'

})
export class BatchDetailsComponent {
  // batch: Batch = new Batch();
  branch: any = new Branch();
  batchTopic: any = new BatchTopic();
  batchTypeList: any[] = [];
  batchList: any[] = [];
  courseList : any[] = [];
  
  trainerList : any[] = [];
  timingList : any[] = [];
  studentList : any[] = [];
  topicStatusList : any[] = [];
  
  batchTopicList: any[] = [];
  searchObj : any;
  selectedTab: any = 0;
  batchesList:any[]=[];
  showSide: boolean = false;
  vedio:any;



  constructor(private appService: AppService, private restService: RestService) {
      this.branch.id = this.appService.getBranch().id;
      this.searchObj = {}
     this.searchObj.batch = this.appService.getParam('batchId');
     console.log(this.searchObj);
     this.batchesSearch(this.searchObj);
     this.batchTopicSearch(this.searchObj);
  }
  batchesSearch(data:any) {
    if(data.batch !== undefined){
      this.restService.batchesEntity(data.batch)
        .subscribe(results => {
         console.log(results);
         this.batchesList = results;
         console.log(this.batchesList)
          this.batchTopicSearch(data);
          this.batchUser(data)
        })
    }  
  }

  
  batchTopicSearch(data:any) {
      this.restService.batchTopic(data)
        .subscribe(results => {
         console.log(results);
         this.batchTopicList = results;
        }) 
  } 
  updateStatus(item:any){
    this.batchTopic = item
    console.log(item);
    this.restService.put('batchTopic', this.batchTopic)
      .subscribe(result => {
        console.log(result);
      })
  } 
  selectTab(item: any){
    console.log(item);
    this.selectedTab = item.index;
  }


  batchUser(batchUserSearchObj: any){
    console.log(batchUserSearchObj);
    this.restService.batchUser(batchUserSearchObj)
      .subscribe( results => {
        if(results){
          console.log(results)
          this.trainerList = results.trainers;
          this.studentList = results.students;
        }
      })
  }
  open(item: any) {
    console.log(item);
    this.showSide = true;
    this.vedio = Object.assign({},item);
  }
   selectedItem: any = {};
  toggleItem: any = {}
  subTopics(item){
    if(this.toggleItem.id && this.toggleItem.id == item.id) {
      this.toggleItem = {}
    } else {
      this.toggleItem = item;
    }


    
  }

  openSubtopics(item: any) {
    this.selectedItem =  item;


  }
  vedios(){
    this.appService.navigate('/batches/batchvedio',null);
  }
   
}