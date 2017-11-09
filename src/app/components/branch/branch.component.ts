import { Component, OnInit } from '@angular/core';
import { AppService } from '../../shared/service/app.service';
import { AnimationService } from '../../shared/service/animation.service';
import { RestService } from '../../common/rest.service';
// import { MenuAccess } from '../../entities/menuaccess.entity';
import { DataSource } from '@angular/cdk';
import { Branch } from '../../entities/branch.entity';


@Component({
  selector: 'app-branches',
  templateUrl: './branch.component.html'

})
export class BranchesComponent {

  myForm: any;
  data: any;
  displayedColumns: any[] = ["name", "location", "area", "city", "action"];
  topicList: any[] = [];
  showSide: boolean = false;
  branch: any = new Branch();
  branchData: any[] = [];
  selectedItem: any;

  constructor(private appService: AppService, private restService: RestService) {
    this.dataLoad(this.branchData);
  }
  dataLoad(searchObj: any) {
    searchObj = {};
    this.restService.branchSearch(searchObj)
      .subscribe(results => {
        if (results) {
          this.branchData = results;
          console.log(this.branchData)
        }
      })
  }


  open(item: any) {
    this.showSide = true;
    if (!item) {
      item = new Branch();
      console.log(this.branchData);

    }
    this.branch = Object.assign({}, item);
    console.log(this.branch)
  }
  onClose(action: any) {
    this.showSide = false;
  }
  selectItem(item: any) {
    this.selectedItem = item;
  }
}