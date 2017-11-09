import { NgModule }                  from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';
// import { ReviewComponent}   from  './../components/student/review/review.component';
// import { AssignmentComponent } from './../components/student/assignments/assignment.component';
// import { StudentDashboardComponent } from '../components/student/studentdashboard/studentdashboard.component';
import { StudentBatchesComponent } from '../components/studentbatches/student.batches.component';
import { StudentBatchDetailsComponent } from '../components/studentbatches/batch.details.component';
import { StudentCoursesComponent } from '../components/studentcourses/courses.component';
import { BatchVedioComponent } from '../components/trainerbatch/batchvideo.component';




const routes: Routes = [
    // { path: '',  			                  component: StudentDashboardComponent },
    // { path: 'dashboard',  			                  component: StudentDashboardComponent },
    // { path: 'review',  			          component: ReviewComponent },
    // { path: 'assignments',  			          component: AssignmentComponent },
    { path: 'batches',  			          component: StudentBatchesComponent },
    { path:'batchDetails',                     component:StudentBatchDetailsComponent},
    { path: 'courses',  			          component: StudentCoursesComponent },
    { path: 'batchvedio',              component: BatchVedioComponent}
]

@NgModule({
  imports: [  CommonModule,MaterialModule, FormsModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(routes) ],
  declarations: [StudentBatchesComponent,StudentCoursesComponent,StudentBatchDetailsComponent, BatchVedioComponent],
  exports : [CommonModule]
})

export class StudentModule { }
