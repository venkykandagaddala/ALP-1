import { Component } from "@angular/core";

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
  SubmitLoginForm(formValues) {
    console.log(formValues);
  }
}
