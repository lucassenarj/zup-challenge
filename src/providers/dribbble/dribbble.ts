import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class DribbbleProvider {

  private baseApiPath = "https://api.dribbble.com/v1";

  constructor(private http: Http) {
    console.log('Hello DribbleProvider Provider');
  }

  getShots(){
    return this.http.get(this.baseApiPath + '/shots?access_token=' + this.getMyApiKey());
  }

  getMyApiKey(){
    return 'b05b4be327cf3df76df20bb02fd6b31f4ded3e267f130c9510494df7c3ccbf9e';
  }

}
