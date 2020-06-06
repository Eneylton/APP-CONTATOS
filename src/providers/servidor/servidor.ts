import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';


@Injectable()
export class ServidorProvider {

  basepath = "/php";

  constructor(public http: Http, private platform: Platform) {
    if(this.platform.is("cordova")){
      this.basepath = "http://enecrud-com.umbler.net";
    }
  }

  postData(body,file){
    let type = "application/json; charset=UTF-8";
    let headers = new Headers({ 'Content-Type': type});
    let options = new RequestOptions({ headers:headers});

    return this.http.post(this.basepath + file,
           JSON.stringify(body),options).map(res => res.json());
  }

}
