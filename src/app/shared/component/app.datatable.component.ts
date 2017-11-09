import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, SimpleChange, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-datatable',
    styles:[' [hidden] { display: none !important; }'],
    template: `
        <main>
        <aside  class="padding-side" >
           <div  class="row center-xs">
            <md-toolbar class="col-xs-12 col-sm-6">
            <input
               type='text'
               class="filter-search"
              placeholder='Search'
              (keyup)='updateFilter($event)'
            />
          </md-toolbar>
        </div>
            <md-card *ngFor="let eachRow of tempData" style="margin-bottom: 1rem">
                <div (click)="onSelect(eachRow)">
                    <div *ngIf="eachRow['img']" style="float: left; margin-right: 1rem; ">
                        <img src="{{eachRow['img']}}" height=100px width=100px>
                    </div>
                    <div class="flex-container">
                       <div *ngFor="let eachColumn of dataColumns" class="flex-item" [hidden]=" (!eachColumn.name) || eachColumn.hidden">
                            <div class="mpair">
                                <div>{{eachColumn.name}}</div>
                                <div>{{eachRow[eachColumn.prop]}}</div>
                            </div>
                        </div>                 
                    </div>

                </div>
            </md-card>
            <p></p>
            </aside>
        </main>
    `
})
export class AppDataTableComponent implements OnInit {
    @Input() loadingIndicator = true;
    @Input()  dataColumns;
    @Input()  dataRows: any[];
    @Output() selectedData: EventEmitter<any>  = new EventEmitter( );
     tempData = [];
  constructor() {

  }
  ngOnInit(){

  }
  ngOnChanges(changes: SimpleChanges) {
     if(changes['dataRows'] && changes['dataRows'].currentValue.length > 0) {
       //this.temp = [ ...this.dataRows ];
       this.displayData([ ...this.dataRows ])
     }
  }
  dataRowValue(row: any, item:any){
    if( !item) return '';  
    if(item && item.indexOf('.') < 0)  return row[item];
    
    let splitItems = item.split('.');  
    let length = splitItems.length;
    switch(length) {
        case 2: {
            if(row[splitItems[0]]) {
                return row[splitItems[0]][splitItems[1]];
            }
            return '';
        }
        case 3: {
            if(row[splitItems[0]]) {
                 if(row[splitItems[0]][splitItems[1]]) {
                    return row[splitItems[0]][splitItems[1]][splitItems[2]];
                 }
            }
            return '';
        }
        case 4: {
            if(row[splitItems[0]]) {
                 if(row[splitItems[0]][splitItems[1]]) {
                     if(row[splitItems[0]][splitItems[1]][splitItems[2]]) {
                        return row[splitItems[0]][splitItems[1]][splitItems[2]][splitItems[3]];
                     }
                 }
            }
            return '';
        }
        default: return '';
    }
  }
  displayData(dataList: any) {
      let tempData = [];
      let data = {};
      for(let item of dataList){
          data = {};
          for(let keyItem of this.dataColumns){
               if(keyItem['name']){
                    data[keyItem.prop] = this.dataRowValue(item, keyItem.prop);
               } else {
                   data['img'] = this.dataRowValue(item, keyItem.img);
               }
          }
          tempData.push(data);
      }
      this.tempData = tempData; 
     
      this.filterData = [...tempData];
  }

  onSelect( item) {
    this.selectedData.emit(item);
  }
   filterData: any;
  updateFilter(event) {
    const value = ( event.target.value ? event.target.value.toLowerCase(): null);
    const temp = this.filterData.filter( (it) => {
                if(value && value != ""){
                    // for(let column of this.dataColumns){
                    //     let item = column.prop ? column.prop : null;
                    //      console.log(it);
                    //     let data = this.dataRowValue(it, item);
                    //     console.log(data);
                    //     if(data.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    //         return true;
                    //     } else {
                    //         return false;
                    //     }
                        // console.log(column);
                        // console.log(item);
                        // if(item && !column.hidden && item.indexOf('.') > 0 ) {
                        //      const splitItems: any = item.split('.');
                        //      if(splitItems.length == 2){
                        //         if(it[splitItems[0]][splitItems[1]].toString().toLowerCase().indexOf(value.toLowerCase()) > -1){
                        //             return true;
                        //           }
                        //      } else {
                        //          return true;
                        //      }
                        //     // if(it[splitItems[0]] === 'Object'){

                        // } else {
                        //     if (item && it[item].toString().toLowerCase().indexOf(value.toLowerCase()) > -1) {
                        //         return true;
                        //     }
                        // }


                  //  }
                  for(let item in it){
                      if(item != 'img'){
                          if(it[item].toString().toLowerCase().indexOf(value.toLowerCase()) > -1) {
                              return true;
                          }
                      }
                  }
                  //return true;
                } else {
                    return true;
                }
                return false;

    });

    // update the rows
    this.tempData = [...temp];
  }


}

