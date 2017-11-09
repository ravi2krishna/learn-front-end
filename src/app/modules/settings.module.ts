import { NgModule }                  from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import { SettingComponent } from '../components/settings/setting.component';



const routes: Routes = [
    { path: '',  			                component: SettingComponent},
];

@NgModule({
  imports: [  CommonModule,MaterialModule, FormsModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(routes) ],

  declarations: [SettingComponent],
  exports : [CommonModule]
})

export class SettingsModule { }
