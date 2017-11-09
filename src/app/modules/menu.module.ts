import { NgModule }                  from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

import { MaterialModule } from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import { MenuComponent } from '../components/menu/menu.component';
import { MenuDetailsComponent } from '../components/menu/menu.details.component';



const routes: Routes = [
    { path: '',  			                component: MenuComponent},
];

@NgModule({
  imports: [  CommonModule,MaterialModule, FormsModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(routes) ],

  declarations: [MenuComponent,MenuDetailsComponent],
  exports : [CommonModule]
})

export class MenuModule { }
