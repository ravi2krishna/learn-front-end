import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
import { Storage } from '../../shared/utils/storage';
import { NguiMapComponent } from '@ngui/map';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html'

})
export class SettingComponent implements OnInit{

  myForm: any;
  branches: any = [];
  selectedIndex: number = 0;
  branch: any = {};
  data:any;
  positions:any[] = [];
  lat:any;
  lng:any;
  branchDetails: any;

  constructor(private appService: AppService, private restService: RestService) {
     this.branch = this.appService.getBranch();
     this.branchSearch()
     if(!this.branch) {
       this.branch = {};
     }
     this.getBranchDetails(this.branch.id)

  }

  ngOnInit(){
    this.branchListLoad();
  }
  getBranchDetails(data){
    this.restService.entity('branch', data )
    .subscribe( results =>{
      console.log(results);
      this.branchDetails = results;
      this.lat = this.branchDetails.xCord;
      this.lng = this.branchDetails.yCord;
      this.positions.push(this.lat);
      this.positions.push(this.lng);
      // console.log(this.positions);
    })
  }
  
  selected( item) {
  
  
    this.branch.id = item.id;
    this.branch.name = item.name;
    Storage.setBranch(this.branch);
    this.appService.showMessage('Chnaged to '+item.name+' branch');
    this.getBranchDetails(item.id)
  }




  // dataLoad(searchObj: any, index) {
  //   this.selectedIndex = index;
  //   searchObj = {};
  //   searchObj.role = this.accountRolesList[this.selectedIndex].id;
  //   this.restService.userDataSearch(searchObj)
  //     .subscribe(results => {
  //       if (results) {
  //         this.accountData = results;
  //       }
  //     })
  // }
  branchListLoad(){
    this.restService.dataload('/branches')
      .subscribe( results =>{
        console.log(results);
        this.branches = results;
      })
  } 

  branchSearch(){
    this.restService.branchSearch(this.data)
    .subscribe( results =>{
      console.log(results);
      this.branches = results;
    })
  }

  onMapReady(map) {
    console.log('map', map);
    console.log('markers', map.markers);  // to get all markers as an array 
  }
  onMapClick(event) {
    this.positions.push(event.latLng);
    event.target.panTo(event.latLng);
    console.log(this.positions)
  }
  onMarkerInit(marker) {
    console.log('marker', marker.position.lat);
    
  }

}