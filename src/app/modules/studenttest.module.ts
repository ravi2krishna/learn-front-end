import { NgModule }                  from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import { StudentTestComponent } from './../components/studenttest/student.test.component';





const routes: Routes = [
{ path: '',  			                  component: StudentTestComponent },

]

@NgModule({
  imports: [  CommonModule,MaterialModule, FormsModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(routes) ],
  declarations: [StudentTestComponent],
  exports : [CommonModule]
})

export class StudentTestModule { }