import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AppFormGroup } from './../../shared/common/app.form';
import { Storage } from '../../shared/utils/storage';
import { RestService } from '../../common/rest.service';
import { Auth } from '../../entities/auth.entity';
import { AuthFormGroup } from './../../forms/auth.form';
// import { SignFormGroup } from './../../forms/sign.form';

import { Prop } from '../../common/props';
import { AppService } from '../../shared/service/app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: any = AuthFormGroup.init();
  
  error: any;
  
  auth: Auth;
  showorhide:string;
  isVisible:string;
  private loginRedirect: string = "/auth/login"

  constructor(private router: Router, private appService: AppService, private restService: RestService) {

    AuthFormGroup.edit(this.myForm);
    // this.myForm = SignFormGroup.SignupFormGroup();
    this.auth = new Auth();
    this.showorhide = "password";
      this.isVisible = "show";
  }

  ngOnInit() {
  }




  onSubmit() {
    //if(formData.valid) {
    //console.log(formData.value);
    // this.af.auth.createUserWithEmailAndPassword(formData.value.email,  formData.value.password).then(
    //   (success) => {
    //     console.log("success");
    //   console.log(success);
    //   this.router.navigate(['/auth/login'])
    // }).catch(
    //   (err) => {
    //   console.log(err);
    //   this.error = err;
    // })
    console.log(this.auth)
    this.restService.signUp(this.auth)
      .subscribe(results => {
        if (results) {
          // sessionStorage.clear();
          // this.appService.setSessionItem('user', results);
          // this.appService.sessionUserEmit(results);
          // this.router.navigate(['/apex']);
          this.router.navigate([this.loginRedirect]);
        }
      });
  }
  showPassword(){
     this.showorhide = "password";
      this.isVisible = "show"
  }
  hidePassword(){
    this.showorhide = "text";
     this.isVisible = "hide"
  }
  home(){
  this.appService.navigate('/',[]);
}
signin(){
  this.appService.navigate('auth/login',[])
}
}
