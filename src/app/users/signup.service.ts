import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SignupService {
  mapUser: any;
  constructor(private http: HttpClient) {}

  register(user): Observable<any> {
    const url = 'http://localhost:3000/api/v1/users';
    this.mapUser = {
      email: user.email,
      password: user.password,
      first_name: user.firstName,
      last_name: user.lastName
    };
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<any>(url, {'user': this.mapUser}, options)
      .pipe(catchError(this.handleError<any>('save user')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}

