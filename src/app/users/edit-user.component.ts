import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { IUser } from './user.model';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html'
})
export class EditUserComponent implements OnInit {

  editUserForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  userId: number;
  constructor(
    private activeRouter: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userId = +this.activeRouter.snapshot.params['id'];
    this.editUserForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required])
    });

    this.userService.getUser(this.userId).subscribe((resp) => {
      this.editUserForm.patchValue({
        firstName: resp.data.firstName,
        lastName: resp.data.lastName
      });
    });
  }

  updateUser(formValues) {
    this.userService.updateUser(formValues.firstName);
  }

  cancle() {
    this.router.navigate(['users']);
  }
}
