import { BatchTopicLink } from './../../entities/batchTopicLink.entity';
import { Component, OnInit , Input, Output, SimpleChanges, EventEmitter} from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { Topic } from '../../entities/topic.entity';
import { TopicLinkFormGroup } from '../../forms/topicLink.form';


@Component({
  selector: 'app-topiclinks-details',
  templateUrl: './batchtopics.links.component.html'
})
export class BatchTopicLinksComponent implements OnInit{
 
  // myForm:any;
  selectedIndex  = 0;
  linkTypeList:any[] = [];
  linkDataList :any;
  isShow :boolean = false;
  topicData :any
  @Input() linkData: BatchTopicLink[];
  @Input() topic: Topic;
  @Output() closeLinks: EventEmitter<any> =  new EventEmitter();
  myForm: any = TopicLinkFormGroup.init();
  batchtopicLink: BatchTopicLink = new BatchTopicLink();
  batchtopicLinkList: BatchTopicLink[] = [];
  batchtopicLinkSearchObj: any = {}
  constructor(private appService: AppService, private restService: RestService) {
    // this.myForm = AdminFormGroup.TopicsLinksFormGroup();
    TopicLinkFormGroup.edit(this.myForm);
    
    this.linkTypeLoad();
    this.searchTopicLinkList()
  }
    ngOnInit(){

    }
    ngOnChanges(changes: SimpleChanges) {
      if(changes['batchtopicLink']) {
          this.batchtopicLink.batchTopic = this.topic;
          console.log(this.batchtopicLink.batchTopic);
           this.searchTopicLinkList();
      }
    }
    searchTopicLinkList() {
      this.restService.post('batchtopiclink',this.batchtopicLinkSearchObj)
        .subscribe( results => {
            if(results) {
              this.batchtopicLinkList = results;      
            }
        })
    }
    linkTypeLoad() {
    this.restService.dataload('linktypes')
      .subscribe(result => {
        if (result) {
          this.linkTypeList = result;

        }
      })
  }
    onCloseLinks() {
      this.isShow = false;
      this.closeLinks.emit();
    }
    editLinks(item: any){
      console.log(item);
      if(!item){
        item = new BatchTopicLink();
      }else{
        item.batchTopic = this.linkData[0].batchTopic;
      }
      item.batchTopic.id = this.topic.id;
      this.batchtopicLink = Object.assign({},item);
      this.isShow = true;
    }
    save() {
      console.log(this.batchtopicLink);
      this.restService.put('batchtopiclink', this.batchtopicLink)
        .subscribe( result =>{
              this.closeLinks.emit();
              this.isShow = false;
              console.log(result);
        })
    }
    delete(item){
    this.restService.delete('batchtopiclink',item.id)
      .subscribe( result =>{
         if(result){
           this.closeLinks.emit();
         }
        })
  }
  }
