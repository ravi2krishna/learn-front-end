import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ApexService } from "./service/apex.service";
import { HttpService } from "./service/http.service";
import { AppService } from "./service/app.service";
import { RestService } from "../common/rest.service";

import { AppDataTableComponent } from "./component/app.datatable.component";
import { AppImgUploadComponent } from "./component/app.imgupload.component";
import { AppImgLoadComponent } from "./component/app.imgload.component";
import { FormMessagesComponent } from "./component/form.messages.component";
import { InfinateScrollComponent } from './component/app.infinatescroll.component';
import { FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe } from './utils/pipes';

import { MaterialModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk'
//import { CovalentStepsModule,  CovalentDataTableModule, CovalentSearchModule, CovalentLayoutModule} from '@covalent/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NguiMapModule } from '@ngui/map';

@NgModule({
    imports: [CommonModule, FlexLayoutModule, MaterialModule, CdkTableModule, HttpModule, InfiniteScrollModule,NguiMapModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDJpndR1PgCcaqAdZEnX4wR-wDTXIEAgpU'})],
    declarations: [FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe, AppDataTableComponent, FormMessagesComponent, AppImgUploadComponent, AppImgLoadComponent,InfinateScrollComponent],
    exports: [CommonModule,FlexLayoutModule, MaterialModule, CdkTableModule, FilterPipe, KeyValuesPipe, DecodeURIPipe, DatePipe, DateTimePipe, FlagPipe, CurrencyPipe, FormMessagesComponent, AppDataTableComponent, AppImgUploadComponent, AppImgLoadComponent,InfinateScrollComponent,NguiMapModule]

 })
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ApexService, HttpService, AppService, RestService],
        };
    }
}