import { AppService } from './shared/service/app.service';
import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { ApexService } from "./shared/service/apex.service";
import { Storage } from "./shared/utils/storage";
import { Prop } from './common/props';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry, MdSidenav } from '@angular/material';

import { Subscription } from 'rxjs/Subscription';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;

  showLoader: Boolean = true;
  isMenu: Boolean = false;
  showMenuIcon: Boolean = false;
  menuList: any[];
  sessionUser: any;
  _userSubscription: any;
  _loaderSubscription: any;
  mode: string;
  activeMenuObject: any;
  // opened:any;
  constructor(private apexService: ApexService, private appService: AppService, private _iconRegistry: MdIconRegistry,
    private _domSanitizer: DomSanitizer, private media: ObservableMedia) {
    this.isMenu = false;
    this.assetsIcons();
    this.menuList = null;
    this.activeMenuObject = Storage.getSessionItem('activeMenuObject');
    this.apexService.showLoader(false);




  }

  sideMenuMode(isOver: boolean) {
    if (!isOver) {
      this.sidenav.mode = 'side';
      this.showMenuIcon = false;
      this.sidenav.opened = true;
    } else {
      this.sidenav.mode = 'over';
      if (this.sessionUser) {
        setTimeout( ()=> {
          this.showMenuIcon = true;
        }, 100);
        
      } else {
        this.showMenuIcon = false;
      }
      this.sidenav.opened = false;
    };

  }
  ngOnInit() {
    this._loaderSubscription = this.apexService.loaderEvent.subscribe(data => {
      if (data != this.showLoader) {
        this.showLoader = data;
      }

    });
    this._userSubscription = this.apexService.sessionUserEvent.subscribe(data => {
      this.menuChange(data);

    });
    this.apexService.sessionUserEmit(Storage.getSessionUser());
    this.apexService.showLoader(false);
    if (window.innerWidth < 600) {
      this.sideMenuMode(true);
    } else {
      this.sideMenuMode(false);
    }
    this.media.subscribe((change: MediaChange) => {
      console.log(change.mqAlias);
      if (change.mqAlias == 'gt' || change.mqAlias == 'gt-lg' || change.mqAlias == 'md') {
        this.sidenav.mode = 'side';
        this.sideMenuMode(false);
      } else if (change.mqAlias == 'xs' || change.mqAlias == 'sm' ) {
        this.sidenav.mode = 'over';
        this.sideMenuMode(true);
      }
      console.log("mode: " + this.sidenav.mode);

    });

  }
  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //     // console.log(event)
  //     if (event.target.innerWidth < 600) {

  //         this.sidenav.mode = "over";
  //         this.showMenuIcon = true;
  //     }
  //     if (event.target.innerWidth > 600) {

  //         this.sidenav.mode = "side";
  //         this.showMenuIcon = false;
  //     }
  // }


  menuChange(data: any) {
    console.log(data);
    if (data) {
      this.sessionUser = data;
      
      this.isMenu = true;
      // if(this.sessionUser.role == 'ADMIN'){
      //    this.menuList = this.menus();
      // }
      // if(this.sessionUser.role == 'STUDENT'){
      //    this.menuList = this.menusStudent();
      // }
      // if(this.sessionUser.role == 'TRAINER'){
      //    this.menuList = this.menusTrainer();
      // }
      this.menuList = Storage.getMenuList();
      console.log(this.menuList)
    } else {
      this.sessionUser = data;
      this.isMenu = false;
    }


    // console.log(this.sessionUser);
    // if (this.sessionUser) {
    //   //this.menuList = this.appService.getSessionItem('menu');
    //   this.menuList = this.menus();
    //   if(this.menuList.length > 0){
    //     // console.log()
    //     this.isMenu = true;
    //    this.showMenuIcon = true;
    //    this.ngOnInit();
    //   }
    // } else {
    //   this.isMenu = false;
    //   this.showMenuIcon = false;
    //   this.ngOnInit();
    // }
    // this.menuList = this.menus();
    // // console.log(this.menuList.length);
    // if(this.menuList.length > 0){
    //   this.isMenu = true;
    // }
    if(this.sessionUser){
        this.isMenu = true;
      } else {
        this.isMenu = false;
      }
  }
  menuToggle(isOpen: boolean) {
    // console.log("menuToggle")
    setTimeout( ()=>{
      if (isOpen) {
        this.showMenuIcon = false;

      } else {
        if (this.sessionUser) {
          this.showMenuIcon = true;
        } else {
          this.showMenuIcon = false;
        }

      }
    }, 10);

  }

  assetsIcons() {
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'logo',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/logo.svg')
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'logo1',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/logo1.svg')
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'fb',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/fb.svg')
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'logo2',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/logo2.svg')
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'logo3',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/logo3.svg')
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'logoblack',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/logoblack.svg')
    );
    this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'logowhite',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/logowhite.svg')
    );
     this._iconRegistry.addSvgIconInNamespace(
      'assets',
      'banner',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/banner.svg')
    );
  }
  ngOnDestroy() {
    this._userSubscription.unsubscribe();
  }
  logout() {
    this.menuToggle(false);
    Storage.clearSession();
    sessionStorage.clear();
    this.menuList = null;
    this.appService.navigate('/homepage', null);
    this.sessionUser = null;

    this.isMenu = false;
    this.apexService.sessionUserEmit(null);
    this.showMenuIcon = false;
  }
  login() {
    this.appService.navigate(Prop.SIGN_IN_PAGE, null);
  }
  dashboard() {
    if (this.sessionUser) {
      if (this.sessionUser.role == 'Admin') {
        this.appService.navigate(Prop.ADMIN_DASHBOARD_PAGE, null);
      } else if (this.sessionUser.role == 'user') {
        this.appService.navigate(Prop.USER_DASHBOARD_PAGE, null);
      }
    }
  }
  navigate(item) {
    this.activeMenuObject = item.name;
    Storage.setSessionItem('activeMenuObject', item.name);
    this.toggleSideNav();
    this.appService.navigate(item.url, []);
    event.stopPropagation();
    console.log(item.url)
  }
  toggleSideNav() {
    if (this.sidenav.mode == 'over') {
      this.sidenav.opened = false;
    }
  }
  myProfile() {
    this.activeMenuObject = 'profile';
    Storage.setSessionItem('activeMenuObject', 'profile');
    this.toggleSideNav();
    this.appService.navigate('./myprofile', []);

  }
  settings() {
    this.activeMenuObject = 'settings';
    Storage.setSessionItem('activeMenuObject', 'settings');
    this.toggleSideNav();
    this.appService.navigate('./admin/settings', []);
  }
  // menus() {
  //   return [
  //     // {
  //     //   "_id": null,
  //     //   "name": "App Data",
  //     //   "link": "/apex/appdata",
  //     //   "icon": "perm_data_settings"
  //     // },
  //     {
  //       "_id": null,
  //       "name": "Menu",
  //       "link": "/admin/menu",
  //       "icon": "menu"
  //     },
  //     {
  //       "_id": null,
  //       "name": "Accounts",
  //       "link": "/apex/account",
  //       "icon": "supervisor_account"
  //     },
  //     {
  //       "_id": null,
  //       "name": "Course",
  //       "link": "/admin/course",
  //       "icon": "copyright"
  //     },
  //     {
  //       "_id": null,
  //       "name": "Batches",
  //       "link": "/admin/batches",
  //       "icon": "format_bold"
  //     },
  //     {
  //       "_id": null,
  //       "name": "Settings",
  //       "link": "/admin/settings",
  //       "icon": "perm_data_settings"
  //     }
  //   ]
  // }
  //  menusStudent() {
  //   return [
    
  //     {
  //       "_id": null,
  //       "name": "Course",
  //       "link": "/student/courses",
  //       "icon": "copyright"
  //     },
  //     {
  //       "_id": null,
  //       "name": "Batches",
  //       "link": "/student/batches",
  //       "icon": "format_bold"
  //     }
  //   ]
  // }
  // menusTrainer() {
  //   return [
    
  //     {
  //       "_id": null,
  //       "name": "Course",
  //       "link": "/trainer/courses",
  //       "icon": "copyright"
  //     },
  //     {
  //       "_id": null,
  //       "name": "Batches",
  //       "link": "/trainer/batches",
  //       "icon": "format_bold"
  //     }
  //   ]
  // }
dashboards(){
    this.appService.navigate('/home/dashboard', null);
}

}
