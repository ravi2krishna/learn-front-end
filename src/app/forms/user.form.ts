import { FormGroup, FormBuilder,FormControl, Validators}  from '@angular/forms';
import { AppFormGroup }  from '../shared/common/app.form';

export class UserFormGroup extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
    
        group.addControl("user_name", this.getController(null, this.TYPE_DATA, 4, 50) ); 
        group.addControl("user_email", this.getController(null, this.TYPE_EMAIL, null, 100) ); 
        group.addControl("user_mobile", this.getController(null, this.NUMBER_PATTERN, 10, 15) ); 
        group.addControl("user_password", this.getController(null, this.TYPE_PASSWORD, null, 30) ); 
        group.addControl("user_role", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("user_address_lane", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("user_address_street", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("user_address_city", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("user_address_state", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("user_address_country", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("user_address_zipcode", this.getController(null, this.TYPE_NUMBER, 6, 8) ); 
        group.addControl("user_branch", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("user_updatedBy", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("user_updatedDate", this.getController(null, this.TYPE_ALL, null, null) ); 
	}
}