import { Role } from './role.entity';
import { Link } from './link.entity';

export class Menu { 
    id : string ; 
    active : boolean ; 
    updatedBy : string ; 
    updatedDate : Date ; 
    role: Role = new Role(); 
    link: Link = new Link(); 
}
