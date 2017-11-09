import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
// import { UserFormGroup } from '../../forms/user.form';

@Component({
  selector: 'app-trainer-aside',
  templateUrl: './trainer.aside.component.html'

})
export class TrainerAsideComponent {

  myForm: any;
  data: any;
  showSide: boolean = false;
  showSideLinks: boolean = false;
  menuItems: any[] = []; 

  trainerList: any;
  @Output() close: EventEmitter<any> = new EventEmitter();
  
  constructor(private appService: AppService, private restService: RestService) {
    this.trainerListLoad();
    // UserFormGroup.edit(this.myForm);
  }

    trainerListLoad(){
    this.restService.dataload('trainers')
      .subscribe( results => {
        if(results){
          this.trainerList = results;
          console.log(this.trainerList);
        }
      })
  }

  onClose() {
    this.close.emit(null);
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
  selectItem(){
    //this.close.emit(item);
    let selectedItems: any[] = [];
    this.trainerList.forEach(element => {
      if(element.checked){
        delete element.checked;
        selectedItems.push(element)
      }
    });
    this.close.emit(selectedItems);
  }
}