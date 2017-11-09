import { Component, OnInit,Input, Output, SimpleChanges, EventEmitter  } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { Batch } from '../../entities/batch.entity';
import { BatchTopic } from '../../entities/batchTopic.entity';
import { Branch } from '../../entities/branch.entity';
import { BatchFormGroup } from './../../forms/batch.form';
import { Topic } from '../../entities/topic.entity';
import { TopicLink } from './../../entities/topiclink.entity';
// import { AdminFormGroup } from '../../forms/admin.form';

@Component({
  selector: 'app-addbatches',
  templateUrl: './addbatches.component.html'

})
export class AddBatchesComponent {

  myForm: any = BatchFormGroup.init();
  topic: Topic = new Topic() ;
  batch: Batch = new Batch();
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
  trainerFilterShow: boolean = false;
  studentFilterShow: boolean = false;
  topicLinkShow : boolean =false;
  requestObject: any = { }
  topicLinkData : any;

  constructor(private appService: AppService, private restService: RestService) {
      BatchFormGroup.edit(this.myForm);
      // this.myForm = AdminFormGroup.BatchFormGroup();
      this.branch.id = this.appService.getBranch().id;
      this.searchObj = {}
     this.searchObj.batch = this.appService.getParam('batchId');
     console.log(this.searchObj);
     this.batchesSearch(this.searchObj);
     this.typesLoad();
     this.courseLoad();
     this.timingsLoad();
     this.batchTopicSearch(this.searchObj);
     this.topicStatusLoad();
  }
  batchesSearch(data:any) {
    if(data.batch !== undefined){
      this.restService.batchesEntity(data.batch)
        .subscribe(results => {
         console.log(results);
         this.batch = results;
          this.batchTopicSearch(data);
          this.batchUser(data)
        })
    }  
  }
  courseLoad(){
    this.restService.dataload('courses')
      .subscribe( results => {
        if(results){
          this.courseList = results;
          console.log(this.courseList);
        }
      })
  }
  timingsLoad(){
    this.restService.dataload('timings')
      .subscribe( results => {
        if(results){
          this.timingList = results;
          console.log(this.timingList);
        }
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
  typesLoad() {
    this.restService.dataload('batchtypes')
      .subscribe(result => {
        if (result) {
          console.log(result);
          this.batchTypeList = result;
        }
      })
  }


  //   studentListLoad(){
  //   this.restService.dataload('studentlist')
  //     .subscribe( results => {
  //       if(results){
  //         this.studentList = results;
  //         console.log(this.studentList);
  //       }
  //     })
  // }
  
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
  save() {
    console.log(this.batch);
    this.batch.branch = this.branch;
    this.restService.batchDataSave(this.batch)
      .subscribe(result => {
        console.log(result);
        this.batch.id = result.id;
        this.searchObj.batch = result.id;
        console.log(this.searchObj);
        this.batchTopicSearch(this.searchObj);
      })
  }
  selectTab(item: any){
    console.log(item);
    this.selectedTab = item.index;
  }

  open(){
    console.log("open")
    if(this.selectedTab == 1){
      this.studentFilterShow = true;
    } else {
        this.trainerFilterShow = true;
    }
  }
  openLinks(item){
    console.log(item);
    this.topicLinkShow = true;
    this.requestObject.batchTopic = item.id;
    console.log(this.requestObject);
    this.restService.post('batchtopiclink',this.requestObject)
      .subscribe(data => {
        if (data) {
          this.topicLinkData = data;
          console.log(this.topicLinkData);
          this.topic.id = item.id;
          console.log(this.topic);
        }
      });
    this.topic = Object.assign({}, item);
  }
  closeTrainer($event){
     this.trainerFilterShow = false;
    if(!$event) return;
    let membersObj: any = {};
      membersObj.users = [ ],
      membersObj.batch = {
        id: this.batch.id
      }
  
    $event.forEach(element => {
        let isFound: boolean = false;
        let userIdObj:any = {}
        userIdObj.id = element.id
        this.trainerList.forEach( item => {
          if(item.id == element.id) {
            isFound = true;
          }
        });
        if(!isFound){
           membersObj.users.push(userIdObj);
        }
       
    });
    if( membersObj.users.length > 0) {
      this.restService.batchUserSave(membersObj)
        .subscribe( results => {
            this.batchUser(this.searchObj)
        })  
    } 

   
  }
  closeStudent($event){
    this.studentFilterShow = false;
     if(!$event) return;
    let membersObj: any = {};
      membersObj.users = [ ],
      membersObj.batch = {
        id: this.batch.id
      }
  
    $event.forEach(element => {
        let isFound: boolean = false;
        let userIdObj:any = {}
        userIdObj.id = element.id
        this.studentList.forEach( item => {
          if(item.id == element.id) {
            isFound = true;
          }
        });
        if(!isFound){
           membersObj.users.push(userIdObj);
        }
       
    });
    if( membersObj.users.length > 0) {
      console.log(membersObj);
      this.restService.batchUserSave(membersObj)
        .subscribe( results => {
            this.batchUser(this.searchObj)
        })
    }
      
  }

  // closeStudent() {
  //   this.studentFilterShow = false;
  // }

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
  deleteMember(item: any){
      this.restService.delete('batchuser',item)
        .subscribe( results => {
          if(results) {
            this.batchUser(this.searchObj);
          }
        })
  }
      onCloseLinks(action: any) {
    // if(action){
    //   this.dataLoad({}, this.selectedIndex);
    // }
    this.topicLinkShow = false;
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
}
