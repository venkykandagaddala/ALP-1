import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  selector: 'user-profile',
  templateUrl: './profile-component.html',
  styles: [`span {
    color: red;
  }`]
})
export class ProfileComponent implements OnInit {
  canEdit = true;
  editUserForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  userId: number;
  user: any;
  constructor(
    private userService: UserService,
    private auth: AuthService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {}

  ngOnInit() {
    this.userId = this.auth.currentUser.id;
    this.editUserForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    });

    this.userService.getUser(this.userId).subscribe((resp) => {
      this.editUserForm.patchValue({
        firstName: resp.data.firstName,
        lastName: resp.data.lastName
      });
      this.user = resp.data;
    });

  }
  toggleEdit() {
    return this.canEdit = !this.canEdit;
  }

  updateUserDetails(formValues) {
    this.userService.updateUser(formValues.firstName, formValues.lastName, this.user.id).subscribe((resp) => {
      this.user = resp.data;
      this.toastr.success(resp.message);
    });
  }

  cancle() {
    this.canEdit = !this.canEdit;
  }
}
