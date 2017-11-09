import { FormGroup, FormBuilder,FormControl, Validators}  from '@angular/forms';
import { AppFormGroup }  from '../shared/common/app.form';

export class AttendanceFormGroup extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
    
        group.addControl("attendance_fromTime", this.getController(null, this.TYPE_ALL, null, null) ); 
        group.addControl("attendance_toTime", this.getController(null, this.TYPE_ALL, null, null) ); 
        group.addControl("attendance_mins", this.getController(null, this.TYPE_NUMBER, null, null) ); 
        group.addControl("attendance_user", this.getController(null, this.TYPE_DATA, null, 50) ); 
        group.addControl("attendance_updatedBy", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("attendance_updatedDate", this.getController(null, this.TYPE_ALL, null, null) ); 
	}
}