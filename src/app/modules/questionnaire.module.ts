import { NgModule }                  from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import { QuestionnaireComponent } from './../components/questionnaire/questionnaire.component';
import { AddQuestionComponent } from './../components/questionnaire/addquestion.component';
// import { TopicLinksComponent } from '../components/topics/topics.links.component';



const routes: Routes = [
    { path: '',  			                component: QuestionnaireComponent},
    { path: 'addquestion',                   component: AddQuestionComponent},
];

@NgModule({
  imports: [  CommonModule,MaterialModule, FormsModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(routes) ],

  declarations: [QuestionnaireComponent, AddQuestionComponent],
  exports : [CommonModule]
})

export class QuestionnaireModule { }
