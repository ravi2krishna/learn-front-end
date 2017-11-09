import { Injectable } from '@angular/core';
import { HttpService } from "../shared/service/http.service";
import { Storage } from "../shared/utils/storage";
import { HttpReq } from "../shared/common/app.entity";
import { Prop } from "./props"

@Injectable()
export class RestService {

    REST_TYPE_GET : string = "GET";
    REST_TYPE_POST : string = "POST";
    REST_TYPE_PUT: string = "PUT";
    REST_TYPE_DELETE: string = "DELETE";

    REST_APP_SERVICE_URL: string = "/rest";
    REST_DATA_LOAD_SERVICE_URL: string = "/dataload";
    REST_REPORT_SERVICE_URL: string = "/report";
    REST_PRINT_SERVICE_URL: string = "/print";
    REST_INVOICE_SERVICE_URL: string = "/invoice";

   constructor(private httpService: HttpService)    {
       httpService.API_ENDPOINT = Prop.API_ENDPOINT;
    }

    dataload(category: string, data?: any){
        data = data ? data : {};
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_GET;
        httpReq.url = "dataload/"+category;
        httpReq.showLoader = false;
        httpReq.body.data =data;
        return this.httpService.restCall(httpReq);
    }
    imgload(id){
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_GET;
        httpReq.url = "img/"+id;
        httpReq.showLoader = false;
        httpReq.body.data ={};
        
        //let img;
        return this.httpService.restCall(httpReq);
        
    }
    signIn(entityData: any) {
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_POST;
        httpReq.url = "auth";
        httpReq.showLoader = true;
        httpReq.body.data =entityData;
        return this.httpService.authMethod(httpReq);
    }

    signUp(entityData: any) {
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_PUT;
        httpReq.url = "auth";
        httpReq.showLoader = true;
        httpReq.body.data =entityData;
        return this.httpService.authMethod(httpReq);
    }

    delete(url: string, id: string, data?: any){
        data = data ? data : {};
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_DELETE;
        httpReq.url = url+"/"+id;
        httpReq.showLoader = true;
        httpReq.body.data =data;
        return this.httpService.restCall(httpReq);
    }

    entity(url: string, id: string, data?: any){
        data = data ? data : {};
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_GET;
        httpReq.url = url+"/"+id;
        httpReq.showLoader = true;
        httpReq.body.data =data;
        return this.httpService.restCall(httpReq);
    }

    put(url: string, data: any){
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_PUT;
        httpReq.url = url;
        httpReq.showLoader = true;
        httpReq.body.data =data;
        return this.httpService.restCall(httpReq);
    }

    post(url: string, data?: any){
        data = data ? data : {};
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_POST;
        httpReq.url = url;
        httpReq.showLoader = true;
        httpReq.body.data =data;
        return this.httpService.restCall(httpReq);
    }

    appDataSearch(data: any){
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_POST;
        httpReq.url = "appdata";
        httpReq.showLoader = true;
        httpReq.body.data =data;
        return this.httpService.restCall(httpReq);
    }
    appDataSave(data: any){
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_PUT;
        httpReq.url = "appdata";
        httpReq.showLoader = true;
        httpReq.body.data =data;
        return this.httpService.restCall(httpReq);
    }
    appDataDelete(data: any){
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_DELETE;
        httpReq.url = "appdata/"+data;
        httpReq.showLoader = true;
        httpReq.body.data = {};
        return this.httpService.deleteMethod(httpReq);
    }
     courseSearch(data:any){
       const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_POST;
        httpReq.url = "course";
        httpReq.showLoader = true;
        httpReq.body.data =data;
        return this.httpService.restCall(httpReq);
   }
    // rolesLoad() {
    //     const httpReq: HttpReq = new HttpReq();
    //     httpReq.url = "roles";
    //     httpReq.body.data = {};
    //     return this.httpService.loadCall(httpReq);
    // }
    userDataSearch(data: any){
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_POST;
        httpReq.url = "user";
        httpReq.showLoader = true;
        httpReq.body.data =data;
        return this.httpService.restCall(httpReq);
    }
    accountDataSave(data: any){
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_PUT;
        httpReq.url = "user";
        httpReq.showLoader = true;
        httpReq.body.data =data;
        return this.httpService.restCall(httpReq);
    }
   courseSave(data: any){
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_PUT;
        httpReq.url = "course";
        httpReq.showLoader = true;
        httpReq.body.data =data;
        return this.httpService.restCall(httpReq);
   }
    courseDelete(data: any){
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_DELETE;
        httpReq.url = "course/"+data;
        httpReq.showLoader = true;
        return this.httpService.restCall(httpReq);
    }
   topicSearch(data:any){
       const httpReq: HttpReq = new HttpReq();
       httpReq.type = this.REST_TYPE_POST;
       httpReq.url = "topic";
       httpReq.showLoader = true;
       httpReq.body.data =data;
       return this.httpService.restCall(httpReq);
  }
  subTopicSearch(data:any){
      const httpReq: HttpReq = new HttpReq();
       httpReq.type = this.REST_TYPE_POST;
       httpReq.url = "topic";
       httpReq.showLoader = true;
       httpReq.body.data =data;
       return this.httpService.restCall(httpReq);
  }
//   topicsLoad(){
//    const httpReq: HttpReq = new HttpReq();
//        httpReq.url = "coursetypes";
//        httpReq.body.data = {};
//        return this.httpService.loadCall(httpReq);
// }
topicDataSave(data: any){
       const httpReq: HttpReq = new HttpReq();
       httpReq.type = this.REST_TYPE_PUT;
       httpReq.url = "topic";
       httpReq.showLoader = true;
       httpReq.body.data =data;
       return this.httpService.restCall(httpReq);
   }

    topicLinkSearch(data:Object){
      const httpReq: HttpReq = new HttpReq();
       httpReq.type = this.REST_TYPE_POST;
       httpReq.url = "topiclink";
       httpReq.showLoader = true;
       httpReq.body.data =data;
       return this.httpService.restCall(httpReq);
  }
    linkDataSave(data: any){
       const httpReq: HttpReq = new HttpReq();
       httpReq.type = this.REST_TYPE_PUT;
       httpReq.url = "topiclink";
       httpReq.showLoader = true;
       httpReq.body.data =data;
       return this.httpService.restCall(httpReq);
   }
    menuSearch(data:any){
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_POST;
        httpReq.url = "menu";
        httpReq.showLoader = true;
        httpReq.body.data =data;
        return this.httpService.restCall(httpReq);
    }   
     menuSave(data: any){
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_PUT;
        httpReq.url = "menu";
        httpReq.showLoader = true;
        httpReq.body.data =data;
        return this.httpService.restCall(httpReq);
    }
    branchSearch(data:any){
      const httpReq: HttpReq = new HttpReq();
       httpReq.type = this.REST_TYPE_POST;
       httpReq.url = "branch";
       httpReq.showLoader = true;
       httpReq.body.data =data;
       return this.httpService.restCall(httpReq);
  }
  branchSave(data:any){
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_PUT;
        httpReq.url = "branch";
        httpReq.showLoader = true;
        httpReq.body.data =data;
        return this.httpService.restCall(httpReq);
    
  }

     link(data:any){
        const httpReq: HttpReq = new HttpReq();
        httpReq.type = this.REST_TYPE_POST;
        httpReq.url = "link";
        httpReq.showLoader = true;
        httpReq.body.data =data;
        return this.httpService.restCall(httpReq);
    
  }

 batchesSearch(data:any){
      const httpReq: HttpReq = new HttpReq();
       httpReq.type = this.REST_TYPE_POST;
       httpReq.url = "batch";
       httpReq.showLoader = true;
       httpReq.body.data =data;
       return this.httpService.restCall(httpReq);
  }
    batchesEntity(data:any){
      const httpReq: HttpReq = new HttpReq();
       httpReq.type = this.REST_TYPE_GET;
       httpReq.url = "batch/"+data;
       httpReq.showLoader = true;
       httpReq.body.data =data;
       return this.httpService.restCall(httpReq);
  }
    // getBatchDetails (data:any){
    //     const httpReq: HttpReq = new HttpReq();
    //    httpReq.type = this.REST_TYPE_GET;
    //    httpReq.url = "batch";
    //    httpReq.showLoader = true;
    //    httpReq.body.data =data;
    //    return this.httpService.restCall(httpReq);

     batchDataSave(data: any){
       const httpReq: HttpReq = new HttpReq();
       httpReq.type = this.REST_TYPE_PUT;
       httpReq.url = "batch";
       httpReq.showLoader = true;
       httpReq.body.data =data;
       return this.httpService.restCall(httpReq);
   }
    batchTopic(data:any){
      const httpReq: HttpReq = new HttpReq();
       httpReq.type = this.REST_TYPE_POST;
       httpReq.url = "batchtopic";
       httpReq.showLoader = true;
       httpReq.body.data =data;
       return this.httpService.restCall(httpReq);
  }
    batchUser(data:any){
      const httpReq: HttpReq = new HttpReq();
       httpReq.type = this.REST_TYPE_POST;
       httpReq.url = "batchuser/user";
       //httpReq.showLoader = true;
       httpReq.body.data =data;
       return this.httpService.restCall(httpReq);
  }
    batchUserSave(data:any){
      const httpReq: HttpReq = new HttpReq();
       httpReq.type = this.REST_TYPE_PUT;
       httpReq.url = "batchuser";
       //httpReq.showLoader = true;
       httpReq.body.data =data;
       return this.httpService.restCall(httpReq);
  }
  deleteMember(id){
      const httpReq: HttpReq = new HttpReq();
       httpReq.type = this.REST_TYPE_DELETE;
       httpReq.url = "batch/"+id;
       httpReq.showLoader = true;
       httpReq.body.data ={};
       return this.httpService.restCall(httpReq);
  }
  myProfile(data:any){
      const httpReq: HttpReq = new HttpReq();
       httpReq.type = this.REST_TYPE_GET;
       httpReq.url = "user/"+data;
       httpReq.showLoader = true;
       httpReq.body.data ={};
       return this.httpService.restCall(httpReq);
  }
 userBatch(data:any){
      const httpReq: HttpReq = new HttpReq();
       httpReq.type = this.REST_TYPE_POST;
       httpReq.url = "batch/user";
       httpReq.showLoader = true;
       httpReq.body.data =data;
       return this.httpService.restCall(httpReq);
  }

  userCourse(data:any){
      const httpReq: HttpReq = new HttpReq();
       httpReq.type = this.REST_TYPE_POST;
       httpReq.url = "course/user";
       httpReq.showLoader = true;
       httpReq.body.data =data;
       return this.httpService.restCall(httpReq);
  }


    topicStatusSave(data: any){
       const httpReq: HttpReq = new HttpReq();
       httpReq.type = this.REST_TYPE_PUT;
       httpReq.url = "batch";
       httpReq.showLoader = true;
       httpReq.body.data =data;
       return this.httpService.restCall(httpReq);
   }
   studentTask(data:any){
       const httpReq: HttpReq = new HttpReq();
       httpReq.type = this.REST_TYPE_POST;
       httpReq.url = "task/student";
       httpReq.showLoader = true;
       httpReq.body.data =data;
       return this.httpService.restCall(httpReq);
   }

}