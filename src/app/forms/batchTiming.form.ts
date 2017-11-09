import { FormGroup, FormBuilder,FormControl, Validators}  from '@angular/forms';
import { AppFormGroup }  from '../shared/common/app.form';

export class BatchTimingFormGroup extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
    
        group.addControl("batchTiming_batchTopic", this.getController(null, this.TYPE_DATA, null, 50) ); 
        group.addControl("batchTiming_fromTime", this.getController(null, this.TYPE_ALL, null, null) ); 
        group.addControl("batchTiming_toTime", this.getController(null, this.TYPE_ALL, null, null) ); 
        group.addControl("batchTiming_mins", this.getController(null, this.TYPE_NUMBER, null, null) ); 
        group.addControl("batchTiming_user", this.getController(null, this.TYPE_DATA, null, 50) ); 
        group.addControl("batchTiming_updatedBy", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("batchTiming_updatedDate", this.getController(null, this.TYPE_ALL, null, null) ); 
	}
}