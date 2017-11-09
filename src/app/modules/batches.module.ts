import { NgModule }                  from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import { BatchesComponent } from '../components/batches/batches.component';
import { AddBatchesComponent } from '../components/batches/addbatches.component';
import { StudentAsideComponent } from './../components/batches/student.aside.component';
import { TrainerAsideComponent } from './../components/batches/trainer.aside.component';
import { BatchTopicLinksComponent } from '../components/batches/batchtopics.links.component';
import { BatchDetailsComponent } from './../components/batches/batchdetails.component';
import { BatchVedioComponent } from '../components/batches/batchvideo.component';

const routes: Routes = [
    { path: '',  			                component: BatchesComponent},
    { path: 'addbatches',                   component: AddBatchesComponent},
    { path: 'batchdetails',            component: BatchDetailsComponent},
    { path: 'batchvedio',              component: BatchVedioComponent}
];

@NgModule({
  imports: [  CommonModule,MaterialModule, FormsModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(routes) ],

  declarations: [BatchesComponent, AddBatchesComponent,StudentAsideComponent,TrainerAsideComponent,BatchDetailsComponent,BatchTopicLinksComponent,BatchVedioComponent],
  exports : [CommonModule]
})

export class BatchesModule { }
