import { User } from './user.entity';
import { Batch } from './batch.entity';

export class BatchUser { 
    id : string ; 
    user: User = new User(); 
    batch: Batch = new Batch(); 
}
