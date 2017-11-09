import { Component, OnInit ,ViewChild} from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { User } from '../../entities/user.entity';
import { Topic } from './../../entities/topic.entity';
import { TaskMcq } from './../../entities/taskmcq.entity';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MdIconRegistry, MdSidenav } from '@angular/material';

@Component({
  selector: 'app-student-test',
  templateUrl: './student.test.component.html'
 
})
export class StudentTestComponent implements OnInit{
  @ViewChild('sidenav') sidenav: MdSidenav;

  myForm: any;
  searchObj:any;
 user : User ;
 topic: Topic ;
 questionsList:any[]=[];
 taskMcq:TaskMcq;
 showMenuIcon: Boolean = false;
 selectedQuestion :TaskMcq;
 previousQuestion : TaskMcq;
 taskMcqList :any[] = [];
 selectedIndex:any = 0;
 finalIndex :any;

  constructor(private appService: AppService, private restService: RestService,private media: ObservableMedia) {
    this.user = new User();
    this.topic = new Topic();
    this.taskMcq = new TaskMcq();
      this.user.id  = this.appService.getSessionUser().id;
      //  this.topic.id = this.appService.getParam('topicId');
    // this.searchObj = {
    //   topic : this.topic.id,
    //   user : this.user.id
    // }
    this.studentTask();
  }
   ngOnInit() {

  }
  eachQuestionSelect(item: any, index){
      console.log(item);
      this.selectedIndex = index;
      this.taskMcq =item;
      this.selectedQuestion = item

  }

  studentTask() {
    this.restService.studentTask(this.searchObj)
      .subscribe((results) => {
        this.questionsList = results;
        if (this.questionsList.length > 0) {
            this.eachQuestionSelect(this.questionsList[0], 0);
          }
      })
  }
  saveNext(){
    //let index = this.questionsList.findIndex(i => i.id === this.selectedQuestion.id);
    //console.log(index);
    this.selectedIndex = this.selectedIndex+1
    this.finalIndex = this.questionsList.length;
    this.selectedQuestion = this.questionsList[this.selectedIndex];
    this.previousQuestion = this.questionsList[this.selectedIndex-1];
    this.taskMcq =  this.selectedQuestion;
    
    if(this.previousQuestion.yourAns== 'a' && this.previousQuestion.mcq.checkA){
      this.previousQuestion.isRightAns = true;
    }else if(this.previousQuestion.yourAns== 'b' && this.previousQuestion.mcq.checkB) {
      this.previousQuestion.isRightAns = true;
    }else if(this.previousQuestion.yourAns== 'c' && this.previousQuestion.mcq.checkC) {
      this.previousQuestion.isRightAns = true;
    }
    else if(this.previousQuestion.yourAns== 'd' && this.previousQuestion.mcq.checkD) {
      this.previousQuestion.isRightAns = true;
    }else{
       this.previousQuestion.isRightAns = false;
    }
  }
  onChange(event, value){
    if(event.checked){
      this.selectedQuestion.yourAns = value;
    }
    
  }
  submitTest(){
    console.log(this.questionsList);
    this.restService.put('task/submit', this.questionsList)
    .subscribe((results)=>{
      console.log(results);
    });
  }
  toggleSideNav() {
    if (this.sidenav.mode == 'over') {
      this.sidenav.opened = false;
    }
  }
}