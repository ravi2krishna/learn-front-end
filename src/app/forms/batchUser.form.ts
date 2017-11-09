import { FormGroup, FormBuilder,FormControl, Validators}  from '@angular/forms';
import { AppFormGroup }  from '../shared/common/app.form';

export class BatchUserFormGroup extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
    
        group.addControl("batchUser_user", this.getController(null, this.TYPE_DATA, null, 50) ); 
        group.addControl("batchUser_batch", this.getController(null, this.TYPE_DATA, null, 50) ); 
	}
}