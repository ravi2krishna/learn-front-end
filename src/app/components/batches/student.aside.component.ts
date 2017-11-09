import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
// import { UserFormGroup } from '.././../forms/user.form';

@Component({
  selector: 'app-student-aside',
  templateUrl: './student.aside.component.html'

})
export class StudentAsideComponent {

  myForm: any;
  data: any;
  showSide: boolean = false;
  showSideLinks: boolean = false;
  menuItems: any[] = []; 
   studentList: any;
  @Output() close: EventEmitter<any> = new EventEmitter();
  
  constructor(private appService: AppService, private restService: RestService) {
    this.studentListLoad();
    // UserFormGroup.edit(this.myForm);
  }

  onClose() {
    this.close.emit();
  }
  // save() {
  //   this.restService.menuSave(this.menuAccess)
  //     .subscribe(result => {
  //       this.onClose();
  //     })
  // }

  // open(item: any) {
  //   // let code = this.appData.code;
  //   // this.appData = new AppData()
  //   // this.appData.code = code;

  // }
  studentListLoad(){
    this.restService.dataload('students')
      .subscribe( results => {
        if(results){
          this.studentList = results;
          console.log(this.studentList);
        }
      })
  }
  selectItem(){
    //this.close.emit(item);
    let selectedItems: any[] = [];
    this.studentList.forEach(element => {
      if(element.checked){
        delete element.checked;
        selectedItems.push(element)
      }
    });
    this.close.emit(selectedItems);
  }
}