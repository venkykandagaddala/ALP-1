import { Component } from '@angular/core';
import { IUser } from './user.model';

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
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  };

  signupFormSubmit(form) {

  }

}
