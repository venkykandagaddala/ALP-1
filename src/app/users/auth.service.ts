import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {
  currentUser: any;
  mapUser = {};
  constructor(private http: HttpClient) {}

  login(formValues) {
    const url = 'http://localhost:3000/api/v1/users/login';
    this.mapUser = {
      email: formValues.email,
      password: formValues.password
    };
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<any>(url, {'user': this.mapUser}, options)
      .pipe(tap(data => {
        this.currentUser = data.user;
      }))
      .pipe(catchError(err => {
        return of(false);
      }));
  }

  isAuthenticate() {
    return !!this.currentUser;
  }
}
