import { FormGroup, FormBuilder,FormControl, Validators}  from '@angular/forms';
import { AppFormGroup }  from '../shared/common/app.form';

export class BatchTopicFormGroup extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
    
        group.addControl("batchTopic_batch", this.getController(null, this.TYPE_DATA, null, 50) ); 
        group.addControl("batchTopic_status", this.getController(null, this.TYPE_DATA, null, 50) ); 
        group.addControl("batchTopic_topic", this.getController(null, this.TYPE_DATA, null, 50) ); 
	}
}