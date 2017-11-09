import { FormGroup, FormBuilder,FormControl, Validators}  from '@angular/forms';
import { AppFormGroup }  from '../shared/common/app.form';

export class BranchFormGroup extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
    
        group.addControl("branch_name", this.getController(null, this.TYPE_DATA, 4, 50) ); 
        group.addControl("branch_title", this.getController(null, this.TYPE_DATA, 4, 30) ); 
        group.addControl("branch_email", this.getController(null, this.TYPE_DATA, null, 100) ); 
        group.addControl("branch_mobile", this.getController(null, this.TYPE_DATA, 10, 15) ); 
        group.addControl("branch_phone", this.getController(null, this.TYPE_DATA, 10, 15) ); 
        group.addControl("branch_xCord", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("branch_yCord", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("branch_address_lane", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("branch_address_street", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("branch_address_city", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("branch_address_state", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("branch_address_country", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("branch_address_zipcode", this.getController(null, this.TYPE_NUMBER, null, 8) ); 
        group.addControl("branch_updatedBy", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("branch_updatedDate", this.getController(null, this.TYPE_ALL, null, null) ); 
	}
}