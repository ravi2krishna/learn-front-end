export class HttpReq {
     url: string;
     type: string;
     showLoader: boolean = false;
     body: any = {};
}
export interface ErrorMessage{
    code: string;
    message: string;
}
export interface Menu{
    id: string;
    name: string;
    link: string;
    show: boolean;
    icon: string;
}

export class SessionUser{
     id: string;
     firstName: string;
     lastName: string;
     email: string;
     role: string;
	 mobile : string;
     loginUser: boolean;
     photo: string;
     branchId: string = 'NONE';
	 branchName: string = 'NONE';
     menuList: Menu[];
}

export class KeyValue{
     id: any;
     name: any;
}
export class LoadMore {
     orderBy: string = "UPDATED_DATE";
     isAsc: boolean = false;
     limit: number = 10;
     offset: number = 0;
}
export class NameList {
     name: string;
     list: KeyValue[] = [];
}
export class ReportData {
	id : string;
	name: string;
	status: boolean = false;
}
export class Report {
	id : string;
	name: string;
	reportUrl: string;
	reportDataList: ReportData [];
}
// export class DataSourceData extends DataSource<any> {
//   constructor(private _exampleDatabase: ExampleDatabase) {
//     super();
//   }

//   /** Connect function called by the table to retrieve one stream containing the data to render. */
//   connect(): Observable<UserData[]> {
//     return this._exampleDatabase.dataChange;
//   }

//   disconnect() {}
// }