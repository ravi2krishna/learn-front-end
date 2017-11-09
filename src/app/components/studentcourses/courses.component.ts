import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { User } from './../../entities/user.entity';

@Component({
  selector: 'app-courses-batch',
  templateUrl: './courses.component.html'
 
})
export class StudentCoursesComponent{

   myForm: any;
  courseList:any[]= [];
  searchObj:any;
  user : any = new User();

  constructor(private appService: AppService, private restService: RestService) {
      this.user.id = this.appService.getSessionUser().id;
      this.searchObj = {
      user : this.user.id
    }
    this.courseSearch();
  }
   courseSearch() {
    console.log();
    this.restService.userCourse(this.searchObj)
      .subscribe((results) => {
        this.courseList = results;
        console.log(results);
      })
  }
}