import { NgModule }                  from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import { BranchesComponent } from './../components/branch/branch.component';
import { BranchetailsComponent } from './../components/branch/branch.details.component';



const routes: Routes = [
    { path: '',  			                component: BranchesComponent},
];

@NgModule({
  imports: [  CommonModule,MaterialModule, FormsModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(routes) ],

  declarations: [BranchesComponent, BranchetailsComponent],
  exports : [CommonModule]
})

export class BranchesModule { }
