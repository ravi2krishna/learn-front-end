import { User } from './user.entity';
import { Topic } from './topic.entity';
import { Batch } from './batch.entity';

export class Task { 
    id : string ; 
    assignDate : Date ; 
    txnDate : Date ; 
    passMarks : number ; 
    marks : number ; 
    updatedBy : string ; 
    updatedDate : Date ; 
    userProfile: User = new User(); 
    topic: Topic = new Topic(); 
    batch: Batch = new Batch(); 
}
