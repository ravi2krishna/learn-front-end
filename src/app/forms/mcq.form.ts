import { FormGroup, FormBuilder,FormControl, Validators}  from '@angular/forms';
import { AppFormGroup }  from '../shared/common/app.form';

export class QuestionFormGroup extends AppFormGroup {
    static init() {
        return this.getFormGroup();
    }
    static edit(group: FormGroup) {
    
        group.addControl("question_name", this.getController(null, this.TYPE_ALL, 4, 200) ); 
        group.addControl("question_optionA", this.getController(null, this.TYPE_ALL, null, 99) ); 
        group.addControl("question_optionB", this.getController(null, this.TYPE_ALL, null, 99) ); 
        group.addControl("question_optionC", this.getController(null, this.TYPE_ALL, null, 99) ); 
        group.addControl("question_optionD", this.getController(null, this.TYPE_ALL, null, 99) ); 
	}
}