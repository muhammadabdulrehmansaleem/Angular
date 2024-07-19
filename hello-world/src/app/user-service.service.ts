import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  _url = 'http://localhost:3000/enroll';
  public enroll(user: User) {
    return this.http.post<any>(this._url, user)
      .pipe(
        catchError(error => {
          console.log("error", error);
          return throwError(error);
        })
      );
  }
}
