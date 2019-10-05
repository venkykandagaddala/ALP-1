import { Component, Inject } from '@angular/core';
import { AuthService } from '../users/auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from './toastr.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private tostr: Toastr
  ) {}

  logout() {
    this.auth.logout();
    this.tostr.success('Signed out successfully.');
    this.router.navigate(['users/login']);
  }
}
