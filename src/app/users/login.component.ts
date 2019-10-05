import { Component, Inject } from '@angular/core';
import { AuthService } from './auth.service';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: [`
    .no-padding {
      padding: 0px;
    }
    span {
      color: red;
    }
  `]
})

export class LoginComponent {
  email: string;
  password: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  SubmitLoginForm(formValues) {
    this.auth.login(formValues).subscribe((resp) => {
      if (resp && resp.code === 200) {
        this.toastr.success(resp.message);
        this.router.navigate(['users']);
      } else {
        this.toastr.error(resp.message);
      }
    });
  }
}
