import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/v1/users')
      .pipe(catchError(this.handleError<any>('getusers', [])));
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/v1/users/' + id)
      .pipe(catchError(this.handleError<any>('getuser')));
  }

  updateUser(firstName: string, lastName: string, id: number): Observable<any> {
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    const user = {
      first_name: firstName,
      last_name: lastName
    };
    return this.http.put<any>('http://localhost:3000/api/v1/users/' + id, {'user': user }, options)
      .pipe(catchError(this.handleError<any>('updateuser')));
  }

  deleteUser(id) {
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.delete<any>('http://localhost:3000/api/v1/users/' + id, options)
      .pipe(catchError(this.handleError<any>('updateuser')));
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
