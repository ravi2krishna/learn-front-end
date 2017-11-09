import { Role } from './role.entity';
import { Address } from './address.entity';
import { Branch } from './branch.entity';

export class User { 
    id : string ; 
    name : string ; 
    email : string ; 
    mobile : string ; 
    password : string ; 
    active : boolean ; 
    updatedBy : string ; 
    updatedDate : Date ; 
    role: Role = new Role(); 
    address: Address = new Address(); 
    branch: Branch = new Branch(); 
}
