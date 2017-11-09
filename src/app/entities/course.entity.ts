import { Img } from './img.entity';

export class Course { 
    id : string ; 
    name : string ; 
    des : string ; 
    active : boolean ; 
    updatedBy : string ; 
    updatedDate : Date ; 
    img: Img = new Img(); 
}
