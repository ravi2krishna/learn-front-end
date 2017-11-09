import { FormGroup, FormBuilder,FormControl, Validators}  from '@angular/forms';
import { AppFormGroup }  from '../shared/common/app.form';

export class MenuFormGroup extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
    
        group.addControl("menu_role", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("menu_link", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("menu_updatedBy", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("menu_updatedDate", this.getController(null, this.TYPE_ALL, null, null) ); 
	}
}