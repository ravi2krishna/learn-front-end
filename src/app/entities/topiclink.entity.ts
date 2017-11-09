import { Topic } from './topic.entity';
import {LinkType} from './linkType.entity';
export class TopicLink{
    id:any;
    name:string;
    url:any;
    linkType: LinkType = new LinkType();
    topic: Topic = new Topic(); 
}
