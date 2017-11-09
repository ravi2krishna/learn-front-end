import { NgModule }                  from '@angular/core';
import { Routes, RouterModule }      from '@angular/router';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

import { MaterialModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './../components/homepage/homepage.component';
import { HeaderComponent } from './../components/homepage/header/header.component';
import { BodyComponent } from './../components/homepage/body/body.component';
import { FooterComponent } from './../components/homepage/footer/footer.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';



const routes: Routes = [
    { path: '',  			                  component: HomePageComponent },
    { path: 'homepage',  			          component: HomePageComponent },
    { path: 'dashboard',  			          component: DashboardComponent }
    
];

@NgModule({
  imports: [  CommonModule,MaterialModule, FormsModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(routes) ],
  declarations: [HomePageComponent, HeaderComponent, BodyComponent, FooterComponent,DashboardComponent],
  exports : [CommonModule]
})

export class HomePageModule { }
