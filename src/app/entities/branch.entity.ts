import { Address } from './address.entity';

export class Branch { 
    id : string ; 
    name : string ; 
    title : string ; 
    email : string ; 
    mobile : string ; 
    phone : string ; 
    xCord : string ; 
    yCord : string ; 
    active : boolean ; 
    updatedBy : string ; 
    updatedDate : Date ; 
    address: Address = new Address(); 
}
