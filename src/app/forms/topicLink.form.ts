import { FormGroup, FormBuilder,FormControl, Validators}  from '@angular/forms';
import { AppFormGroup }  from '../shared/common/app.form';

export class TopicLinkFormGroup extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
    
        group.addControl("topiclink_name", this.getController(null, this.TYPE_DATA, 4, 50) ); 
        group.addControl("topiclink_url", this.getController(null, this.TYPE_DATA, 4, 100) ); 
        group.addControl("topicLink.linkType", this.getController(null, this.TYPE_NUMBER, null, null) ); 
       
	}
}