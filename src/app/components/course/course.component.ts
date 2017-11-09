import { filter } from 'rxjs/operator/filter';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { Course } from './../../entities/course.entity';
import { ApexService } from '../../shared/service/apex.service';
import { Storage } from '../../shared/utils/storage';



@Component({
  selector: 'app-course',
  templateUrl: './course.component.html'
 
})
export class CourseComponent{

    myForm: any;
    course : Course = new Course();
    courseList: any[] = [];
    selectedIndex  = 0;
    showSide: boolean = false;
    item: Course;
    sessionUser:any = {};
    iFilter: string = "";

  constructor(private apexService: ApexService,private appService: AppService, private restService: RestService) {
   this.search();
  this.sessionUser = this.appService.getSessionUser();
  console.log(this.sessionUser.role)
    
  }

  topic(item: Course){
    this.appService.navigate('/topics', [{courseId: item.id, courseName: item.name}]);
  }
  data:any;
  search(){
    this.restService.courseSearch(this.data)
      .subscribe( results => {
        this.courseList = results;
        console.log(this.courseList)
       

      })
  }
  open(isNew: boolean) {
    if(isNew) {
      this.course = new Course();
    } else {
      this.course = Object.assign({},this.item);
    }
    this.showSide = true;
    //console.log(item);
    // this.showSide = true;
    // if(!item ){
    //   item = new Course();
    // }
    // this.courses = Object.assign({},item);
  }
  onClose(action: any){
    // if(action){
    //   this.dataLoad({}, this.selectedIndex);
    // }
    this.search();
    this.showSide= false;
  }
  delete(item){
    this.restService.delete('course',item.id)
      .subscribe( result =>{
          this.search();
        })
  }
  selectItem(item: Course){
    console.log(item);
    this.item = item;
  }
  filter(){
    
  }

}
