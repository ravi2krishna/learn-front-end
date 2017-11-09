import { NgModule }                  from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import { AccountComponent } from '../components/account/account.component';
import { AccountDetailsComponent } from '../components/account/account.details.component';



const routes: Routes = [
    { path: '',  			                component: AccountComponent},
];

@NgModule({
  imports: [  CommonModule,MaterialModule, FormsModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(routes) ],

  declarations: [AccountComponent, AccountDetailsComponent],
  exports : [CommonModule]
})

export class AccountModule { }
