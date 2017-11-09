import { Topic } from './topic.entity';
export class Mcq { 
    id : String ; 
    des: String;
    question : String;
    isMultiAns: boolean;
    optionA: String;
    checkA: boolean;
    optionB: String;
    checkB: boolean;
    optionC: String;
    checkC: Boolean;
    optionD: String;
    checkD: Boolean;
    active: Boolean;
    topic: Topic = new Topic(); 
}