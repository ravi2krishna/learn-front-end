import { TopicLink } from './../../entities/topiclink.entity';
import { Component, OnInit , Input, Output, SimpleChanges, EventEmitter} from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { Topic } from '../../entities/topic.entity';
import { TopicLinkFormGroup } from '../../forms/topicLink.form';


@Component({
  selector: 'app-links-details',
  templateUrl: './topics.links.component.html'
})
export class TopicLinksComponent implements OnInit{
 
  // myForm:any;
  selectedIndex  = 0;
  linkTypeList:any[] = [];
  linkDataList :any;
  isShow :boolean = false;
  topicData :any
  @Input() linkData: TopicLink[];
  @Input() topic: Topic;
  @Output() closeLinks: EventEmitter<any> =  new EventEmitter();
  myForm: any = TopicLinkFormGroup.init();
  topicLink: TopicLink = new TopicLink();
  topicLinkList: TopicLink[] = [];
  topicLinkSearchObj: any = {}
  constructor(private appService: AppService, private restService: RestService) {
    // this.myForm = AdminFormGroup.TopicsLinksFormGroup();
    TopicLinkFormGroup.edit(this.myForm);
    
    this.linkTypeLoad();
    this.searchTopicLinkList()
  }
    ngOnInit(){

    }
    ngOnChanges(changes: SimpleChanges) {
      if(changes['topicLink']) {
          this.topicLink.topic = this.topic;
          console.log(this.topicLink.topic);
           this.searchTopicLinkList();
      }
    }
    searchTopicLinkList() {
      this.restService.topicLinkSearch(this.topicLinkSearchObj)
        .subscribe( results => {
            if(results) {
              this.topicLinkList = results;      
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
        item = new TopicLink();
      }else{
        item.topic = this.linkData[0].topic;
      }
      item.topic.id = this.topic.id;
      this.topicLink = Object.assign({},item);
      this.isShow = true;
    }
    save() {
      console.log(this.topicLink);
      this.restService.linkDataSave(this.topicLink)
        .subscribe( result =>{
              this.closeLinks.emit();
              this.isShow = false;
              console.log(result);
              //this.onCloseLinks();
              //console.log(this.topic) 
              //this.topicData.emit(this.topic)
        })
    }
  }
