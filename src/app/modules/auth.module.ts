import { NgModule }                  from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {  ReactiveFormsModule }        from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { LoginComponent } from './../components/login/login.component';
 import { SignupComponent } from './../components/signup/signup.component';

import 'rxjs/add/operator/switchMap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
// import * as SocialLoginModule from "angular4-social-login";
// import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
//import { Angular2SocialLoginModule } from "angular2-social-login";
 //import { AuthService } from "angular2-social-login";
// let config = new AuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider("862150383732-d5s74uibnhorhf97ad5n0q1oe0kdbto1.apps.googleusercontent.com")
//   },
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider("245860502593988")
//   }
// ]);

// let providers = {
//     "google": {
//       "clientId": "872680875625-3vd4hfjvmn63hl5eu7kl3u9j6m8g9avh.apps.googleusercontent.com"
//     },
//     "facebook": {
//       "clientId": "245860502593988",
//       "apiVersion": "v2.10"
//     }
//   };
//Angular2SocialLoginModule.loadProvidersScripts(providers);
export const firebaseConfig = {
    // apiKey: "AIzaSyAn8thZN51NjwcNUnkuQ64jlVG1MJr0iHY",
    // authDomain: "si-test-55167.firebaseapp.com",
    // databaseURL: "https://si-test-55167.firebaseio.com",
    // projectId: "si-test-55167",
    // storageBucket: "si-test-55167.appspot.com",
    // messagingSenderId: "427111056412",
    apiKey: "AIzaSyC5olIjkW-a6NplvA72uOqHyW5QFo6tiuY",
    authDomain: "dledu-175810.firebaseapp.com",
    databaseURL: "https://dledu-175810.firebaseio.com",
    projectId: "dledu-175810",
    storageBucket: "dledu-175810.appspot.com",
    messagingSenderId: "872680875625"
};

const routes: Routes = [
   { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
   { path: 'signup', component: SignupComponent },
    // { path: 'authuser', component: AuthUserComponent }  
];

@NgModule({
  declarations: [
    LoginComponent,
     SignupComponent,
    // AuthUserComponent,
    // LandingpageComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    SharedModule,
    RouterModule.forChild(routes) 
  ],
  providers: [],
})
export class AuthModule { }
