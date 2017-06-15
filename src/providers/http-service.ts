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
      .map(res => res.json().results);
    // return this.http.get(CATEGORY_LIST_HEAD_URL+str+CATEGORY_LIST_END_PARAMS)
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }

}
