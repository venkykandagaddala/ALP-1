import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html'
})
export class EditUserComponent implements OnInit {

  editUserForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  userId: number;
  user: any;
  constructor(
    private activeRouter: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
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
      this.user = resp.data;
    });
  }

  updateUserDetails(formValues) {
    console.log(formValues);
    this.userService.updateUser(formValues.firstName, formValues.lastName, this.user.id).subscribe((resp) => {
      this.user = resp.data;
      this.toastr.success(resp.message);
    });
  }

  cancle() {
    this.router.navigate(['users']);
  }
}
