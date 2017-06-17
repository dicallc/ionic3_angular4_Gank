import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable'
import {CATEGORY_LIST_END_PARAMS, CATEGORY_LIST_HEAD_URL} from "./Constants";


@Injectable()
export class HttpServiceProvider {

  constructor(public http: Http) {
    console.log('Hello HttpServiceProvider Provider');
  }
  public getCategoryLists(str): Observable<string> {
    return this.http.get(CATEGORY_LIST_HEAD_URL+str+CATEGORY_LIST_END_PARAMS)
      .map(res =>this.mapFucntion(res));
    // return this.http.get(CATEGORY_LIST_HEAD_URL+str+CATEGORY_LIST_END_PARAMS)
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }

  private mapFucntion(res):any {
    var actors:any[]=res.json().results;
    for (var i = 0; i < actors.length; i ++) {
      var str:string= actors[i].publishedAt;
      actors[i].publishedAt= str.substring(0,10)
    }
    return  actors;

  }
}
