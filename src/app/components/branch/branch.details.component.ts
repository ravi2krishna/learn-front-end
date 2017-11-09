import { Component, OnInit , Input, Output, SimpleChanges, EventEmitter} from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
// import { Account } from '../../entities/account.entity';
import { BranchFormGroup } from './../../forms/branch.form';
import { Branch } from '../../entities/branch.entity';
// import { AdminFormGroup } from './../../forms/admin.form';


@Component({
  selector: 'app-branch-details',
  templateUrl: './branch.details.component.html'
 
})
export class BranchetailsComponent implements OnInit{
  myForm: any = BranchFormGroup.init();
  // myForm :any;

  @Input() branch: Branch;
  @Output() close: EventEmitter<any> =  new EventEmitter()

  constructor(private appService: AppService, private restService: RestService) {
    //  this.myForm = AdminFormGroup.BranchFormGroup();
        BranchFormGroup.edit(this.myForm);
       this.branch = new Branch(); 
       console.log(this.branch);
  }

    ngOnInit(){

    }
    ngOnChanges(changes: SimpleChanges) {
      if(changes['branch']) {
        this.branch = changes['branch'].currentValue;
        console.log(this.branch);
      }
    }

    onClose() {
      this.close.emit();
    }

    save() {
      this.restService.branchSave(this.branch)
        .subscribe( result =>{
          if(result) {
            this.onClose();
          }
        })
    }
    open(item: any) {
      this.branch = new Branch()
      console.log(this.branch)
  }
}
