import { BatchTopic } from './batchTopic.entity';
import { User } from './user.entity';

export class BatchTiming { 
    id : string ; 
    fromTime : Date ; 
    toTime : Date ; 
    mins : number ; 
    updatedBy : string ; 
    updatedDate : Date ; 
    batchTopic: BatchTopic = new BatchTopic(); 
    user: User = new User(); 
}
