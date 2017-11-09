import { BatchType } from './batchType.entity';
import { Course } from './course.entity';
import { Branch } from './branch.entity';

export class Batch { 
    id : string ; 
    name : string ; 
    fromDate : Date ; 
    toDate : Date ; 
    fromTime : string ; 
    toTime : string ; 
    des : string ; 
    updatedBy : string ; 
    updatedDate : Date ; 
    batchType: BatchType = new BatchType(); 
    course: Course = new Course(); 
    branch: Branch = new Branch(); 
}
