import { User } from './user.entity';

export class Attendance { 
    id : string ; 
    fromTime : Date ; 
    toTime : Date ; 
    mins : number ; 
    updatedBy : string ; 
    updatedDate : Date ; 
    user: User = new User(); 
}
