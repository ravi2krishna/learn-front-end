import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { Topic } from '../../entities/topic.entity';
import { Mcq } from '../../entities/mcq.entity';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html'

})
export class QuestionnaireComponent {

  myForm: any;
  data: any;
  topic: Topic = new Topic() ;
  mcq : Mcq = new Mcq();
  editedTopic: Topic;
  requestObject: any = { }
  topicListReqObj: any = {}
  showSideLinks : boolean;
  showSide : boolean;
  questionList : any[] = [];


  constructor(private appService: AppService, private restService: RestService) {
    
    this.topic.id = this.appService.getParam('topicId');
    this.questionSearch(this.topic.id);
    this.topicSearch(this.topic.id)
  }
  topicSearch(data){
    this.restService.entity('topic', data)
      .subscribe(result => {
        this.topic = result;
      })
  }
  questionSearch(data:any){
    let searchObj:any = {};
    searchObj.topic = data;
    console.log(data);
    this.restService.post('mcq',searchObj)
      .subscribe((results) => {
        this.questionList = results;
        console.log(this.questionList);
      })
  }
  addQuestion(item:any){
      console.log(item);
      if(!item){
          this.mcq = new Mcq();
          this.appService.navigate('questionnaire/addquestion',[{topicId :this.topic.id}]);
      }else{
          this.appService.navigate('questionnaire/addquestion',[{questionId: item.id, topicId:this.topic.id}]);
      }
  }
  onClose(action: any) {
    // if (action) {
    //   this.topicSearch(this.topicListReqObj);
    // }
    this.showSide = false;
  }

  onCloseLinks(action: any) {
    // if(action){
    //   this.dataLoad({}, this.selectedIndex);
    // }
    this.showSideLinks = false;
  }
  delete(item){
    this.restService.delete('mcq',item.id)
      .subscribe( result =>{
          this.questionSearch(this.topic.id);
      })
  }
}
