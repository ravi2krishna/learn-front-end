import { FormGroup, FormBuilder,FormControl, Validators}  from '@angular/forms';
import { AppFormGroup }  from '../shared/common/app.form';

export class CourseFormGroup extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
    
        group.addControl("course_name", this.getController(null, this.TYPE_DATA, 4, 30) ); 
        group.addControl("course_des", this.getController(null, this.TYPE_DATA, 5, 100) ); 
        group.addControl("course_updatedBy", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("course_updatedDate", this.getController(null, this.TYPE_ALL, null, null) ); 
	}
}