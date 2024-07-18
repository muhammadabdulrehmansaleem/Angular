import { Injectable } from '@angular/core';
import { IEmployee } from './Employee.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { error } from 'console';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url: string = "https://fakestoreapi.com/users";
  constructor(private http: HttpClient) { }
  getEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
      .pipe(
        tap({
          error: e => console.log(e)
        }),
      );
    ;

  }
}
