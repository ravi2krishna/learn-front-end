import { FormGroup, FormBuilder,FormControl, Validators}  from '@angular/forms';
import { AppFormGroup }  from '../shared/common/app.form';

export class BatchFormGroup extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
    
        group.addControl("batch_name", this.getController(null, this.TYPE_DATA, 4, 50) ); 
        group.addControl("batch_batchType", this.getController(null, this.TYPE_DATA, null, 50) ); 
        group.addControl("batch_course", this.getController(null, this.TYPE_DATA, null, 50) ); 
        group.addControl("batch_fromDate", this.getController(null, this.TYPE_ALL, null, null) ); 
        group.addControl("batch_toDate", this.getController(null, this.TYPE_ALL, null, null) ); 
        group.addControl("batch_fromTime", this.getController(null, this.TYPE_DATA, null, 50) ); 
        group.addControl("batch_toTime", this.getController(null, this.TYPE_DATA, null, 50) ); 
        group.addControl("batch_des", this.getController(null, this.TYPE_DATA, 5, 50) ); 
        group.addControl("batch_branch", this.getController(null, this.TYPE_DATA, null, 50) ); 
        group.addControl("batch_updatedBy", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("batch_updatedDate", this.getController(null, this.TYPE_ALL, null, null) ); 
	}
}