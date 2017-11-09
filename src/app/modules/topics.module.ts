import { NgModule }                  from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import { TopicsComponent } from './../components/topics/topics.component';
import { TopicDetailsComponent } from './../components/topics/topics.details.component';
import { TopicLinksComponent } from '../components/topics/topics.links.component';



const routes: Routes = [
    { path: '',  			                component: TopicsComponent},
];

@NgModule({
  imports: [  CommonModule,MaterialModule, FormsModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(routes) ],

  declarations: [TopicsComponent, TopicDetailsComponent,TopicLinksComponent],
  exports : [CommonModule]
})

export class TopicsModule { }
