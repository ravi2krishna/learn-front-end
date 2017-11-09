import { elementAt } from 'rxjs/operator/elementAt';
import { Component, OnInit , Input, Output, SimpleChanges, EventEmitter} from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { User } from './../../entities/user.entity';
 import { UserFormGroup } from './../../forms/user.form';
// import { ApexFormGroup } from './../../forms/apex.form';

@Component({
  selector: 'app-account-details',
  templateUrl: './account.details.component.html'
 
})
export class AccountDetailsComponent {
     myForm: any = UserFormGroup.init();
    // myForm: any;
   codesList: any[] = [];
   selectedIndex  = 0;
   roleList: any[] = [];
   branches: any = [];
   isAdminRole: any = [];
   sessionUser:any = [];
   isAdmin:string;
  @Input() user: User;
  @Output() close: EventEmitter<any> =  new EventEmitter()

  constructor( private appService: AppService, private restService: RestService) {
      UserFormGroup.edit(this.myForm);
      // this.myForm = ApexFormGroup.AccountFormGroup();
       this.user = new User(); 
       this.loadRoleList();
       this.branchListLoad();
       console.log(this.user);
       this.sessionUser = this.appService.getSessionUser();
       console.log(this.sessionUser);
       this.isAdmin = this.sessionUser.role;
  }

    ngOnInit(){

    }
    ngOnChanges(changes: SimpleChanges) {
      if(changes['user']) {
        //this.myForm = ApexFormGroup.AccountFormGroup();
        this.user = changes['user'].currentValue;
        console.log(this.user);
        
        //  this.myForm =  UserFormGroup.edit(this.myForm);
      }
    }

    onClose() {
      this.close.emit();
    }

    loadRoleList(){
      this.restService.dataload('roles')
      .subscribe( results => {
        this.roleList = results;
         if(this.isAdmin == 'ROLE_ADMIN'){
         console.log(this.roleList.splice(3,1)) 
        //  this.isAdminRole = this.roleList
        //  console.log(this.isAdminRole)
         
        }
        else{
          this.roleList = results;
        }
      })
    }
    branchListLoad(){
    this.restService.dataload('branches')
      .subscribe( results =>{
        this.branches = results;
      })
  }
    save() {
      console.log(this.user);
      this.restService.accountDataSave(this.user)
        .subscribe( result =>{
          if(result) {
            console.log(result);
            this.onClose();
          }
            
        })
    }
    open(item: any) {
      this.user = new User()
      console.log(this.user)
  }
}
