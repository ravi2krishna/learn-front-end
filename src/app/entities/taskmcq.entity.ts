import { Mcq } from './mcq.entity';
import { Task } from './task.entity';

export class TaskMcq { 
    id : string ; 
    isRightAns : boolean ; 
    yourAns : any ; 
    updatedBy : string ; 
    updatedDate : Date ; 
    mcq: Mcq = new Mcq(); 
    task: Task = new Task(); 
}
