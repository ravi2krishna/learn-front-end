import { Component, OnInit, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { Topic } from '../../entities/topic.entity';
import { Course } from '../../entities/course.entity';
import { TopicFormGroup } from '../../forms/topic.form';
// import { AdminFormGroup } from './../../forms/admin.form';


@Component({
  selector: 'app-topics-details',
  templateUrl: './topics.details.component.html'

})
export class TopicDetailsComponent implements OnInit {
  myForm: any = TopicFormGroup.init();
  // myForm:any;
  selectedIndex = 0;
  topicList : any[]=[];
  @Input() topic: Topic;
  @Input() course: Course;
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() topicData: EventEmitter<any> = new EventEmitter();

  constructor(private appService: AppService, private restService: RestService) {
   TopicFormGroup.edit(this.myForm);
  //this.course.id = this.appService.getParam('courseId');
  // this.myForm = AdminFormGroup.TopicsDataFormGroup();
    this.topic = new Topic();
   
  }
  

  ngOnInit() {
    this.topicListLoad() ;
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   // if (changes['appData']) {
  //     //this.temp = [ ...this.dataRows ]; this.displayData([ ...this.dataRows ])
  //     // this.appData = changes['appData'].currentValue;
  //     // console.log(this.appData);
  //   }
  // }
  topicListLoad() {
    this.restService.dataload('topics', {course: this.course.id})
      .subscribe(result => {
        if (result) {
          console.log(result);
          this.topicList = result;
        }
      })
  }
  onClose() {
    this.close.emit();
  }
  save() {
    this.topic.course = this.course;
    this.restService.topicDataSave(this.topic)
      .subscribe(result => {
        this.onClose();
        this. topicListLoad();
        this.topicData.emit(this.topic);
      })
  }
  open(item: any) {
    this.topic = new Topic();
    console.log(this.topic);
  }
}
