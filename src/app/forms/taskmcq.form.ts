import { FormGroup, FormBuilder,FormControl, Validators}  from '@angular/forms';
import { AppFormGroup }  from '../shared/common/app.form';

export class TaskMcqFormGroup extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
    
        group.addControl("taskMcq_yourAns", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("taskMcq_mcq", this.getController(null, this.TYPE_DATA, null, 30) ); 
	}
}