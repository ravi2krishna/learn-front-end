import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { Menu } from '../../entities/menu.entity';
import { Link } from '../../entities/link.entity';
import { DataSource } from '@angular/cdk';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'

})
export class MenuComponent {

  myForm: any;
  data: any;
  showSide: boolean = false;
  showSideLinks: boolean = false;
  menu :  any = new Menu();
  link :  any = new Link();
  dataSource: DataSource<any> = null
  displayedColumns: any[] = ["icon", "name", "link", "action"];
  rolesList: any[] = [];
  selectedIndex = 0;
  menuItems:any;
  menuData: any[] = [];
  
  constructor(private appService: AppService, private restService: RestService) {
    this.rolesLoad();
    console.log(this.dataSource);

  }
  rolesLoad() {
    this.restService.dataload('roles')  
      .subscribe(results => {
        if (results) {
          this.rolesList = results;
          if (this.rolesList.length > 0) {
             this.dataLoad(this.rolesList[0], 0);             
          }
        }
      })
  }

  dataLoad(searchObj: any, index) {
    this.selectedIndex = index;
    searchObj = {};
    searchObj.role = this.rolesList[this.selectedIndex].id;
    this.restService.menuSearch(searchObj)  
      .subscribe(results => {
        if (results) {
          this.menuData = results;
          console.log(this.menuData);
        }
      })
  }

  open(item: any) {
    console.log(item);
    this.showSide = true;
    if (!item) {
      item = new Menu();
      console.log(this.rolesList[this.selectedIndex]);
      item.role.id = this.rolesList[this.selectedIndex].id;
      item.link = this.rolesList[this.selectedIndex];
    
    }
    this.menu = Object.assign({}, item);
    console.log(this.menu);
    
  }

  onClose($event: any) {
     this.showSide = false;
     if(!$event) return;
     let menuList: any = [];
     $event.forEach(element => {
       let isFound = false;
       this.menuData.forEach( item =>{
          if(item.link.id == element.id){
            isFound = true;
          }
       });
      if(!isFound) {
        menuList.push(element);
        console.log(menuList)
      }
     });
     if(menuList.length > 0){
        let obj: any = Object.assign({}, this.menu);
        obj.link = menuList;
        console.log(obj);
        this.restService.put('menu', obj)
          .subscribe( reuslts => {
             this.dataLoad(this.rolesList[this.selectedIndex], this.selectedIndex);
          })
     }

   
  }
  delete(item){
    this.restService.delete('menu',item.id)
      .subscribe( result =>{
          this.dataLoad(this.rolesList[this.selectedIndex], this.selectedIndex);
        })
  }


}