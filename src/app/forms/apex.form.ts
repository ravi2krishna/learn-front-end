import { FormGroup, FormBuilder,FormControl, Validators}  from '@angular/forms';
import { AppFormGroup } from '../shared/common/app.form';
export class ApexFormGroup extends AppFormGroup{

    // static AppDataFormGroup() {
    //     return  new FormBuilder().group({
    //         apex_appData_code		    : ['', Validators.compose([Validators.required, Validators.pattern(this.DATA_PATTERN), Validators.maxLength(99)]) ],
    //         apex_appData_key		    : ['', Validators.compose([Validators.required, Validators.pattern(this.DATA_PATTERN), Validators.maxLength(99)]) ],
    //          apex_appData_name		    : ['', Validators.compose([Validators.required, Validators.pattern(this.DATA_PATTERN), Validators.maxLength(99)]) ],
    //     });

    // }
    static AccountFormGroup() {
        return  new FormBuilder().group({
            user_name		    : ['', Validators.compose([Validators.required, Validators.pattern(this.DATA_PATTERN), Validators.maxLength(99)]) ],
            user_email		    : ['', Validators.compose([Validators.required, Validators.pattern(this.TYPE_EMAIL), Validators.maxLength(99)]) ],
            user_mobile		    : ['', Validators.compose([Validators.required, Validators.pattern(this.NUMBER_PATTERN), Validators.maxLength(10)]) ],
            user_password	    : ['', Validators.compose([Validators.required, Validators.pattern(this.TYPE_PASSWORD), Validators.maxLength(20),Validators.minLength(4)]) ],
            // account_profile_address_city		    : ['', Validators.compose([Validators.required, Validators.pattern(this.DATA_PATTERN), Validators.maxLength(99)]) ],
            // account_profile_zipcode		: ['', Validators.compose([Validators.required, Validators.pattern(this.NUMBER_PATTERN), Validators.maxLength(99)]) ],
        });

    }
}