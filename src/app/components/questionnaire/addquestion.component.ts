import { Component, OnInit,Input, Output, SimpleChanges, EventEmitter  } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { Batch } from '../../entities/batch.entity';

import { QuestionFormGroup } from './../../forms/mcq.form';
import { Mcq } from '../../entities/mcq.entity';
import { Topic } from '../../entities/topic.entity';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html'

})
export class AddQuestionComponent {

  myForm: any = QuestionFormGroup.init();
  topic: Topic = new Topic() ;
  batch: Batch = new Batch();
  mcq : Mcq = new Mcq();
  selectedValue:any = []
  isMultiQus:boolean;

  constructor(private appService: AppService, private restService: RestService) {
      this.mcq = new Mcq();
      this.topic.id = this.appService.getParam('topicId');
      this.mcq.topic.id = this.appService.getParam('topicId');
      QuestionFormGroup.edit(this.myForm);
      let searchObj:any = {}
      searchObj.id = this.appService.getParam('questionId');
      this.getQuestionDetails(searchObj.id);
  }

  getQuestionDetails(data:any){
    if(data !== undefined){
      this.restService.entity('mcq',data)
      .subscribe(result =>{
        this.mcq = result;
        console.log(this.mcq.isMultiAns)
         this.isMultiQus = this.mcq.isMultiAns;
      })
    }
  }  

  save(){

    this.restService.put('mcq', this.mcq)
    .subscribe(result => {
      if(result){
         this.appService.navigate('questionnaire',[{topicId :this.topic.id}]);
         this.isMultiQus = this.mcq.isMultiAns;
         console.log(this.isMultiQus)
       }
    })
  }
}