import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable'
import {CATEGORY_LIST_END_PARAMS, CATEGORY_LIST_HEAD_URL} from "./Constants";

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpServiceProvider {

  constructor(public http: Http) {
    console.log('Hello HttpServiceProvider Provider');
  }
  public getCategoryLists(str): Observable<string> {
    return this.http.get(CATEGORY_LIST_HEAD_URL+str+CATEGORY_LIST_END_PARAMS)
      .map(this.extractData)
      .catch(this.handleError);
  }
  private  extractData(res: Response) {
    let body = res.json().results;
    return body || {};
  }
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
