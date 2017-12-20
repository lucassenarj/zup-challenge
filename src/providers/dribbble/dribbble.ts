import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class DribbbleProvider {

  private baseApiPath = "https://api.dribbble.com/v1";

  constructor(private http: Http) {
    
  }

  getShots(){
    return this.http.get(this.baseApiPath + '/shots?per_page=32&access_token=' + this.getApiKey());
  }

  getShotDetails(shotId){
    return this.http.get(this.baseApiPath + `/shots/${shotId}?access_token=` + this.getApiKey());
  }

  likeShot(shotId){
    return this.http.post(this.baseApiPath + `/shots/${shotId}/like?access_token=` + this.getApiKey(), { 
      //headers: this.setHeaders() 
    });
  }

  getApiKey() :string{
    return '';
  }

}
