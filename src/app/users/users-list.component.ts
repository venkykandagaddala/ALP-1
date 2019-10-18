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
  _listFilter: string;
  filteredUsers: IUser[];
  _sortBy: string;

  get sortBy(): string {
    return this._sortBy;
  }

  set sortBy(value: string) {
    this._sortBy = value;
    console.log(this.sortBy);
    if (this.sortBy === '0') {
      this.filteredUsers = this.filteredUsers.sort((a, b) => b.firstName.localeCompare(a.firstName)).reverse();
    } else if (this.sortBy === '1') {
      this.filteredUsers = this.filteredUsers.sort((a, b) => b.lastName.localeCompare(a.lastName)).reverse();
    } else {
      this.filteredUsers = this.filteredUsers.sort((a, b) => b.email.localeCompare(a.email)).reverse();
    }
  }

  get listFilter(): string {
    return this._listFilter;

  }



  set listFilter(value: string) {
    this._listFilter = value;
    if (this.listFilter) {
      this.filteredUsers = this.performFilter(this.listFilter);
    } else {
      this.filteredUsers = this.users;
    }
  }

  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter((user) => user.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
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
}
