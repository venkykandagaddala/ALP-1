import { Component, OnInit, Inject} from '@angular/core';
import { IUser } from './user.model';
import { UserService } from './user.service';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'users-list',
  templateUrl: './users.list.component.html'
})
export class UsersListComponent implements OnInit {
  users: IUser[];
  filterby: string;
  filteredUsers: IUser[];
  constructor(
    private userService: UserService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((resp) => {
      this.users = resp.data;
      this.filteredUsers = this.users;

    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((resp) => {
      if (resp.code === 200) {
        this.users = this.users.filter(user => user.id !== id);
        this.toastr.success(resp.message);
      } else {
        this.toastr.error('something went wrong.');
      }
    });
  }

  search() {
    const term = this.filterby.toLocaleLowerCase();
    if (term) {
      return this.filteredUsers.filter((user) =>
        user.firstName.toLocaleLowerCase().indexOf(term) !== -1);
    } else {
      this.filteredUsers = this.users;
    }
  }
}
