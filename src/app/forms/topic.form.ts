import { FormGroup, FormBuilder,FormControl, Validators}  from '@angular/forms';
import { AppFormGroup }  from '../shared/common/app.form';

export class TopicFormGroup extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
    
        group.addControl("topic_name", this.getController(null, this.TYPE_DATA, 4, 30) ); 
        group.addControl("topic_des", this.getController(null, this.TYPE_DATA, 5, 100) ); 
        group.addControl("topic_priority", this.getController(null, this.TYPE_NUMBER, null, null) ); 
        group.addControl("topic_course", this.getController(null, this.TYPE_DATA, 4, 30) ); 
        group.addControl("topic_parentTopic", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("topic_updatedBy", this.getController(null, this.TYPE_DATA, null, 30) ); 
        group.addControl("topic_updatedDate", this.getController(null, this.TYPE_ALL, null, null) ); 
	}
}