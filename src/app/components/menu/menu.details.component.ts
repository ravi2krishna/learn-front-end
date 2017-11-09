import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { Link } from '../../entities/link.entity';
import { Menu } from '../../entities/menu.entity';
import { MenuFormGroup } from '../../forms/menu.form';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu.details.component.html'

})
export class MenuDetailsComponent {

  // myForm: any;
  data: any;
  showSide: boolean = false;
  showSideLinks: boolean = false;
  menuItems: any[] = []; 
  selectedMenuItems : any;
  link :  any = new Link();
  myForm: any = MenuFormGroup.init();
  @Input() menuData: Link[];
  @Output() close: EventEmitter<any> = new EventEmitter();
  
  constructor(private appService: AppService, private restService: RestService) {
    console.log(this.menuData)
    // this.myForm = AdminFormGroup.MenuLinksFormGroup();
    MenuFormGroup.edit(this.myForm);
    
    this.search();

  }
  search(){
    this.restService.link(this.data)
      .subscribe( results => {
        this.menuItems = results;
        // this.filterMenus(results)
        console.log(this.menuItems)
      })
  }
  onClose() {
    this.close.emit();
  }

  // filterMenus(results: any) {
  //   this.menuItems = [];
  //   console.log(results);
  //   results.forEach( item => {
  //     let isFound = false;
  //     this.menuData.forEach( eachMenuList => {
  //       console.log(eachMenuList);
  //       // if(eachMenuList.link.id == item.id){
  //       //   isFound = true;
  //       // }
  
  //     });
  //     if(!isFound){
  //       this.menuItems.push(item);
  //     }
  //   })
    
  // }
  save() {
     let selectedItems: any[] = [];
    this.menuItems.forEach(element => {
      if(element.checked){
        delete element.checked;
        selectedItems.push(element)
      }
    });
    console.log(selectedItems);
    this.close.emit(selectedItems);
  }
  }