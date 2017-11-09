import { NgModule }                  from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import { MyProfileComponent } from './../components/myprofile/myprofile.component';



const routes: Routes = [
    { path: '',  			                component: MyProfileComponent},
];

@NgModule({
  imports: [  CommonModule,MaterialModule, FormsModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(routes) ],

  declarations: [MyProfileComponent],
  exports : [CommonModule]
})

export class MyProfileModule { }
