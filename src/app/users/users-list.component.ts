import { Component, OnInit, Inject} from '@angular/core';
import { IUser } from './user.model';
import { UserService } from './user.service';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  selector: 'users-list',
  templateUrl: './users.list.component.html'
})
export class UsersListComponent implements OnInit {
  users: IUser[];
  constructor(
    private userService: UserService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((resp) => {
      this.users = resp.data;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((resp) => {
      console.log(this.users);
      console.log(resp);
      this.users.filter(user => user.id === id);
      this.toastr.success(resp.message);
    });
  }
}
