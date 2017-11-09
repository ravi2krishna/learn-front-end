import { NgModule }                  from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import { CourseComponent } from './../components/course/course.component';
import { CoursesDetailsComponent } from './../components/course/course.details.component';



const routes: Routes = [
    { path: '',  			                component: CourseComponent},
];

@NgModule({
  imports: [  CommonModule,MaterialModule, FormsModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(routes) ],

  declarations: [CourseComponent, CoursesDetailsComponent],
  exports : [CommonModule]
})

export class CourseModule { }
