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
        localStorage.setItem('session', JSON.stringify(data.user));
      }))
      .pipe(catchError(err => {
        return of(false);
      }));
  }

  isAuthenticate() {
    return !!this.currentUser;
  }

  logout() {
    this.currentUser = undefined;
    localStorage.clear();
  }

  checkCurrentIdentity() {
    if (localStorage['session'] !== undefined) {
      return this.currentUser = JSON.parse(localStorage['session']);
    }
  }
}
