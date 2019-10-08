import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUser } from './user.model';

@Injectable()
export class UserService {
  updateUser(firstName: any) {
    throw new Error("Method not implemented.");
  }
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/v1/users')
      .pipe(catchError(this.handleError<any>('getusers', [])));
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/v1/users/' + id)
      .pipe(catchError(this.handleError<any>('getuser')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
