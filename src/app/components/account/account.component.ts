import { AppComponent } from '../../app.component';

import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { User } from './../../entities/user.entity';
import { trigger, style, state} from '@angular/animations';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  animations:[
    trigger('clickedState',[
      state('default', style({
  
      })),
      state('clicked', style({
        backgroundColor:'#ccc',
        width:'150px',
        height:'150px',
      }))
    ])
  ] 

})
export class AccountComponent {

  myForm: any;
  isMenu: Boolean;
  accountRolesList: any[] = [];
  // dataSource: DataSource<any> = null
  // displayedColumns: any[] = ["name", "mobile", "email", "action"];
  selectedIndex = 0;
  showSide: boolean = false;
  user: any = new User();
  resultData: any;
  accountData: any[] = [];
  selectedItem: any;
  sessionUser:any = [];
  isAdmin:string;
  isAdminRole: any = [];
  iFilter: string = "";

  constructor(private appService: AppService, private restService: RestService) {
    this.isMenu = true;
    this.rolesLoad();
    this.sessionUser = this.appService.getSessionUser();
    console.log(this.sessionUser);
    this.isAdmin = this.sessionUser.role;
    console.log(this.user)
  }

  rolesLoad() {
    this.restService.dataload('roles')
      .subscribe(results => {
        if (results) {
          this.accountRolesList = results;
          if (this.accountRolesList.length > 0) {
            this.dataLoad(this.accountRolesList[0], 0);

          }
          if(this.isAdmin == 'ROLE_ADMIN'){
            console.log(this.accountRolesList.splice(3,1)) 
            this.isAdminRole = this.accountRolesList
            console.log(this.isAdminRole)
            
           }
           else{
             this.accountRolesList = results;
           }
        }
      })
  }
  dataLoad(searchObj: any, index) {
    this.selectedIndex = index;
    searchObj = {};
    searchObj.role = this.accountRolesList[this.selectedIndex].id;
    this.restService.userDataSearch(searchObj)
      .subscribe(results => {
        if (results) {
          this.accountData = results;
        }
      })
  }
  open() {
    console.log(this.selectedItem);
    this.showSide = true;
    this.user = Object.assign({}, this.selectedItem);
  }

  add(){
      let item = new User();
      console.log(this.accountRolesList[this.selectedIndex]);
      //item.role = this.accountRolesList[this.selectedIndex].name;
      this.showSide = true;
      this.user = Object.assign({}, item);
  }
  deleteAccount(){
    this.restService.delete('user',this.selectedItem.id)
      .subscribe( result =>{
          this.dataLoad(this.accountRolesList[this.selectedIndex], this.selectedIndex);
        })
  }

  onClose(action: any) {
    if (action) {
      this.dataLoad({}, this.selectedIndex);
    }
    this.showSide = false;
  }

  selectItem(item: any) {
    this.selectedItem = item;
  }
  filter() {

  }
}