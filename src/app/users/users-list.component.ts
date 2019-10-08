import { Component, OnInit} from '@angular/core';
import { IUser } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'users-list',
  templateUrl: './users.list.component.html'
})
export class UsersListComponent implements OnInit {
  users: IUser[];
  constructor( private userService: UserService ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((resp) => {
      this.users = resp.data;
    });

  }
}
