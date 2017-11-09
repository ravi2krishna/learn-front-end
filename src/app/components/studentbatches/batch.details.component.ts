import { Component, OnInit,Input, Output, SimpleChanges, EventEmitter  } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
// import { Batch } from '../../entities/batch.entity';
import { BatchTopic } from '../../entities/batchTopic.entity';
import { Branch } from '../../entities/branch.entity';
import { BatchFormGroup } from './../../forms/batch.form';
// import { AdminFormGroup } from '../../forms/admin.form';
import { Topic } from './../../entities/topic.entity';
import { User } from './../../entities/user.entity';

@Component({
  selector: 'app-student-batchdetails',
  templateUrl: './batch.details.component.html'

})
export class StudentBatchDetailsComponent {
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
  batchesList:any;
 topic: Topic ;
 user:User;



  constructor(private appService: AppService, private restService: RestService) {
      this.branch.id = this.appService.getBranch().id;
      this.searchObj = {}
     this.searchObj.batch = this.appService.getParam('batchId');
     let userId  = this.appService.getSessionUser().id;
     let batchUserId = this.appService.getParam('batchUserId');
     let topicId = this.appService.getParam('topicId')
     console.log(this.searchObj);
     this.batcheDetail(batchUserId);
     this.batchTopicSearch(this.searchObj);
     this.topicStatusLoad();
  }
  batcheDetail(data:any) {
    if(data !== undefined){
      this.restService.entity("batchuser", data)
        .subscribe(results => {
         console.log(results);
         this.batchesList = results;
         console.log(this.batchesList)
          this.batchTopicSearch(this.searchObj);
          this.batchUser(this.searchObj)
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
  topicStatusLoad(){
    this.restService.dataload('topicstatus')
      .subscribe( results => {
        if(results){
          this.topicStatusList = results;
          console.log(this.topicStatusList);
        }
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
  batchUser(batchUserSearchObj: any){
    console.log(batchUserSearchObj);
    this.restService.batchUser(batchUserSearchObj)
      .subscribe( results => {
        if(results){
          console.log(results)
          this.studentList = results.students;
        }
      })
  }
  vedios(){
    this.appService.navigate('student/batchvedio',null);
  }
  questions(item: any){
  let userId  = this.appService.getSessionUser().id;
    this.appService.navigate('/studenttest', [{topicId: item.topic.id, userId:  userId}]);
  }
}