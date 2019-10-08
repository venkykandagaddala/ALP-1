import { Component, Inject } from '@angular/core';
import { IUser } from './user.model';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styles: [`
    .no-padding {
      padding: 0px;
    }
    span {
      color: red;
    }
  `]
})

export class SignupComponent {
  user: IUser = {
    id: undefined,
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    private signupService: SignupService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  signupFormSubmit(formValues) {
    this.user = formValues;
    this.signupService.register(this.user).subscribe((resp) => {
      if (resp !== undefined && resp.code === 200) {
        console.log(resp);
        this.toastr.success(resp.message);
        this.router.navigate(['users']);
      } else {
        this.toastr.error(resp.message);
      }
    });
  }
}
