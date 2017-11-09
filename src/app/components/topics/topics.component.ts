import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { Topic } from '../../entities/topic.entity';
// import { TopicLink } from './../../entities/topiclink.entity';
import { TopicLink } from './../../entities/topiclink.entity';
import { Course } from '../../entities/course.entity';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html'

})
export class TopicsComponent {

  myForm: any;
  data: any;
  topicList: any[] = [];
  showSide: boolean = false;
  showSideLinks: boolean = false;
  topicLinks: any[] = [];
  selectedIndex = 0;
  topic: Topic = new Topic() ;
  course: Course = new Course();
  editedTopic: Topic;
  requestObject: any = { }
  topicListReqObj: any = {}
  topicLinkData : any;
  isSubTopics : boolean = false;
  courseList : any[] = [];
  courseDetails : any;
  subTopicList : any[]=[];
  subTopicSearchObj : any;


  constructor(private appService: AppService, private restService: RestService) {

    console.log(this.topicLinks)
    this.course.id = this.appService.getParam('courseId');
    this.course.name = this.appService.getParam('courseName');
    this.topicListReqObj.course = this.course.id;
    this.requestObject.topic = this.topic.id;
    this.topicSearch(this.topicListReqObj);
    this.getCourseDetail('course', this.course.id);



  }
  getCourseDetail(url,id){
    this.restService.entity(url,id)
      .subscribe( results => {
        this.course =results;
      })
  }

  topicSearch(data: any) {
    console.log(data);
    this.restService.topicSearch(data)
      .subscribe((results) => {
        this.topicList = results;
        console.log(this.topicList);
      })
  }

  selectedItem: any = {};
  toggleItem: any = {}
  subTopics(item){
    // this.subTopicSearchObj ={};
    // this.subTopicSearchObj.parentTopic = item.id;
    // this.restService.topicSearch(this.subTopicSearchObj)
    //   .subscribe((results) => {
    //     this.subTopicList = results;
    //     console.log(this.subTopicList);
    //   })
    if(this.toggleItem.id && this.toggleItem.id == item.id) {
      this.toggleItem = {}
    } else {
      this.toggleItem = item;
    }


    
  }

  open(item: any) {
    this.selectedItem =  item;


  }

  add(){
    this.topic = new Topic();
    this.showSide = true;
  }
  menuEdit() {
    let item = this.selectedItem;
    console.log(item);
    this.showSide = true;
    if (!item) {
      item = new Topic();
      console.log(this.topicList[this.selectedIndex]);
      //  item.code = this.topicList[this.selectedIndex].key;
    }
    this.topic = Object.assign({}, item);
  }
  deleteTopic(){
    let item = this.selectedItem;
    console.log(item);
    this.restService.delete('topic',item.id)
        .subscribe( results => {
          if(results) {
           this.topicSearch(this.topicListReqObj);
          }
        })
  }
  openLinks(item: any) {
    this.showSide = false;
    this.showSideLinks = true;
    this.requestObject.topic = item.id;
    console.log(this.requestObject);
    this.restService.topicLinkSearch(this.requestObject)
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
  openQuestions(item: any){
    this.appService.navigate('/questionnaire', [{topicId: item.id}]);
  }
  onClose(action: any) {
    if (action) {
      this.topicSearch(this.topicListReqObj);
    }
    this.showSide = false;
  }

  onCloseLinks(action: any) {
    // if(action){
    //   this.dataLoad({}, this.selectedIndex);
    // }
    this.showSideLinks = false;
  }
}
