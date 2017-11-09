import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { User } from './../../entities/user.entity';
import { UserFormGroup } from './../../forms/user.form';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html'

})
export class MyProfileComponent {

  myForm: any = UserFormGroup.init();
  // myForm:any;
  profileList:any;
  user:User;
  showorhide:string;
   isVisible:string;


  constructor(private appService: AppService, private restService: RestService) {
     UserFormGroup.edit(this.myForm);
    // this.myForm = ApexFormGroup.AccountFormGroup();
      this.user = new User(); 
      let id = this.appService.getSessionUser().id;
      console.log(id)
    this.myProfile(id)
    this.showorhide = "password";
      this.isVisible = "show"
  }

    myProfile(data: any) { 
    console.log(data);
    this.restService.myProfile(data)
      .subscribe((results) => {
        this.user = results;
        console.log(this.profileList);
      })
  }
   save() {
      this.restService.accountDataSave(this.user)
        .subscribe( result =>{
        })
        console.log(this.user);
    }
    showPassword(){
     this.showorhide = "password";
      this.isVisible = "show"
  }
  hidePassword(){
    this.showorhide = "text";
     this.isVisible = "hide"
  }
}