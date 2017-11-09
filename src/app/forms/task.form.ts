import { FormGroup, FormBuilder,FormControl, Validators}  from '@angular/forms';
import { AppFormGroup }  from '../shared/common/app.form';

export class TaskFormGroup extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
    
        group.addControl("task_assignDate", this.getController(null, this.TYPE_ALL, null, null) ); 
        group.addControl("task_txnDate", this.getController(null, this.TYPE_ALL, null, null) ); 
        group.addControl("task_passMarks", this.getController(null, this.TYPE_NUMBER, null, null) ); 
        group.addControl("task_marks", this.getController(null, this.TYPE_NUMBER, null, null) ); 
	}
}