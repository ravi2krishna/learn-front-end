import { Component, OnInit , Input, Output, SimpleChanges, EventEmitter} from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { CourseFormGroup } from './../../forms/course.form';
import { Course } from '../../entities/course.entity';
// import { CourseFormGroup } from '../../forms/course.form';


@Component({
  selector: 'app-course-details',
  templateUrl: './course.details.component.html'
 
})
export class CoursesDetailsComponent implements OnInit{
   codesList: any[] = [];
   selectedIndex  = 0;
     myForm: any = CourseFormGroup.init();
    // myForm:any;

  @Input() course: any;
  @Output() close: EventEmitter<any> =  new EventEmitter()

  constructor(private appService: AppService, private restService: RestService) {
     CourseFormGroup.edit(this.myForm);
    // this.myForm = AdminFormGroup.CoursesFormGroup();
      this.course = new Course();
        if(! this.course.img) {
          this.course.img = {};
        }
  }

    ngOnInit(){

    }
    ngOnChanges(changes: SimpleChanges) {
      if(changes['course']) {
        //this.temp = [ ...this.dataRows ]; this.displayData([ ...this.dataRows ])
        this.course = changes['course'].currentValue;
        let imgObject  = this.course.img;
        if(! this.course.img && this.course.id) {
          this.course.img = {};
          this.restService.imgload(this.course.id)
            .subscribe( result => {
              if(result) {
                this.course.img = result;
              }
              
            });
        }

        //this.course.img = {};
        //if(typeof imgObject != 'object'){
          // this.course.img.id = imgObject.id;
          // this.course.img.src = imgObject.src;  
          // console.log(this.course.img.src);
          // this.restService.imgload(imgObject)
          //     .subscribe( result =>{
          //         this.course.img.src = result;
          // })
        //}

      }
    }

    onClose() {
      this.close.emit();
    }

    save() {debugger;
      this.restService.courseSave(this.course)
        .subscribe( result =>{
            this.onClose();
            console.log(this.course);
        })
    }
    open(item: any) {
          this.course = new Course();
    }

  }
