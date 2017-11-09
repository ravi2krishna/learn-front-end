import { Batch } from './batch.entity';
import { Status } from './status.entity';
import { Topic } from './topic.entity';

export class BatchTopic { 
    id : string ; 
    batch: Batch = new Batch(); 
    status: Status = new Status(); 
    topic: Topic = new Topic(); 
}
