import { Component, OnInit, HostBinding } from '@angular/core';

import { Router } from '@angular/router';
import { Prop } from '../../common/props';
import { Auth } from '../../entities/auth.entity';
import { AuthFormGroup } from './../../forms/auth.form';
// import { SignFormGroup } from './../../forms/sign.form';
import { AppService } from '../../shared/service/app.service';
import { RestService } from '../../common/rest.service';

// import { AuthService } from "angular4-social-login";
// import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
// import { SocialUser } from "angular4-social-login";
// import { AuthService } from "angular2-social-login";

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  myForm: any = AuthFormGroup.init();
  auth: Auth;
  showorhide:string;
  isVisible:string;
  private adminRedirect: string = "/home/dashboard";
  error: any;
  private provider: string;
  constructor(private router: Router, private appService:AppService, private restService:RestService,public afAuth: AngularFireAuth,) {
    AuthFormGroup.edit(this.myForm);
      // this.myForm = SignFormGroup.SigninFormGroup();
      this.auth = new Auth();
      this.showorhide = "password";
      this.isVisible = "show";
      this.appService.sessionUserEmit(null);
  }
   
  ngOnInit(){
    // Storage.clearSession();
    this.appService.sessionUserEmit(null);
    
    console.log( );
    // this.afAuth.auth.onAuthStateChanged( (user) => {
    //   console.log(user)
    //   if (user) {
    //     console.log(user);
    //   } else {
    //     // No user is signed in.
    //   }
    // });
    //this.afAuth.auth.signOut();
    // this.afAuth.authState.subscribe( user => {
    //   console.log(user.email);
    // })
     this.afAuth.authState.subscribe((user) => {
      console.log("--------------------");
      console.log(user);
      if(user) {
        this.appService.showLoader(true);
        let entity: any =  {};
        entity.email = user.email;
        this.provider = this.provider ? this.provider : 'google';
        this.signIn(entity);
      }
      console.log("--------------------");
       //this.router.navigate([this.adminRedirect]);
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
  // signup(){
  //   this.appService.navigate('/signup', [ ]);
  // }
  signup(){
    this.appService.navigate('auth/signup', [ ]);
  }
home(){
  this.appService.navigate('/',[]);
}

  loginFb() {
    this.provider = "facebook";
    this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }

  loginGoogle() {
    this.provider = "google";
    console.log("google login");
    var provider = new firebase.auth.GoogleAuthProvider();
   // provider.addScope('https://www.googleapis.com/auth/plus.login');
    //this.afAuth.auth.signInWithPopup(provider);
    return this.afAuth.auth.signInWithRedirect(provider);
          // this.appService.sessionUserEmit({});
          
          //   this.router.navigate([this.adminRedirect]);
  }

  // loginEmail(formData) {
  //   if(formData.valid) {
  //     console.log(formData.value);
  //     this.af.auth.signInWithEmailAndPassword(formData.value.email,  formData.value.password)
  //     .then(
  //       (success) => {
  //       console.log(success);
  //        this.appService.sessionUserEmit({});
  //       this.router.navigate([this.adminRedirect]);
  //     }).catch(
  //       (err) => {
  //       console.log(err);
  //       this.error = err;
  //     })
  //   }
  // }

   //private user: SocialUser;
    // signInWithGoogle(): void {
    // this.authService.login("google").subscribe( results => {
    //   this.signIn(results, "google");
    // });
  //}
 
  // signInWithFB(): void {
  //   this.authService.login("facebook").subscribe( results => {
  //     this.signIn(results, "facebook");
  //   });
  // }
 
  signInEmail(): void {
    this.provider = "email";
    if(this.myForm.valid) {
      const emailForm: any = {};
      emailForm.email = this.auth.email;
      emailForm.password = this.auth.password;
      this.signIn(emailForm);
    } else {
      this.appService.showMessage('Please provide valid email and password.');
    }
  }

  signOut(): void {
    //this.authService.signOut();
  }
  signIn(entity: any) {
    entity.provider = this.provider;
    this.restService.signIn(entity)
      .subscribe( results => {
          if(results) {
            //sessionStorage.clear();
           // this.appService.setSessionItem('user', results);
            //this.appService.sessionUserEmit(results);
            this.router.navigate([this.adminRedirect]);
          }

      });
      return null;
  }
}
