import { Topic } from './topic.entity';
import {LinkType} from './linkType.entity';
export class BatchTopicLink{
    id:any;
    name:string;
    url:any;
    linkType: LinkType = new LinkType();
    batchTopic: Topic = new Topic(); 
}
