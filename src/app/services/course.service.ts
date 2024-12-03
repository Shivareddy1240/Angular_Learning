import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public courseDetails = []
  private _url = '/data/courseData.json'
  constructor(private _http: HttpClient) { }
  //New
  getCourseInfo() : Observable<any>{
    return this._http.get<any>(this._url)
    .pipe(catchError(this.incomingError))
  }
  //Old 
  // getCourseInfo() : Observable<any>{
  //   return this._http.get<any>(this._url)
  //   .pipe(catchError(this.incomingError))
  // }

  incomingError(err: HttpErrorResponse){
    //Old
    // return throwError(err.message);
    //New
    return throwError(() => new Error(err.message));
    // return throwError(function() {
    //   return new Error(err.message);
    // });
  }
}
