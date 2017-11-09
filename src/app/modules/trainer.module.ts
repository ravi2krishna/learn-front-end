import { NgModule }                  from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import { TrainerBatchesComponent } from '../components/trainerbatch/trainer.batch.component';
import { TrainerBatchDetailsComponent } from '../components/trainerbatch/batch.details.component';
import { TrainerCoursesComponent } from '../components/trainercourses/courses.component';
import { BatchVedioComponent } from '../components/studentbatches/batchvideo.component';


const routes: Routes = [
  { path: 'batches',  			                  component: TrainerBatchesComponent },
  { path: 'courses',  			                  component: TrainerCoursesComponent },
  { path:'batchDetails',                     component:TrainerBatchDetailsComponent},
  { path: 'batchvedio',              component: BatchVedioComponent}
 ]

@NgModule({
  imports: [  CommonModule,MaterialModule, FormsModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(routes) ],
  declarations: [TrainerBatchesComponent,TrainerCoursesComponent,TrainerBatchDetailsComponent,BatchVedioComponent],
  exports : [CommonModule]
})

export class TrainerModule { }
