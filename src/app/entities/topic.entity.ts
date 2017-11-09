import { Course } from './course.entity';

export class Topic { 
    id : string ; 
    name : string ; 
    des : string ; 
    priority : number ; 
    parentTopic : string ; 
    active : boolean ; 
    updatedBy : string ; 
    updatedDate : Date ; 
    course: Course = new Course(); 
}
