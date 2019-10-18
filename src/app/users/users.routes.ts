import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list.component';
import { SignupComponent } from './signup.component';
import { LoginComponent } from './login.component';
import { EditUserComponent } from './edit-user.component';
import { ProfileComponent } from './profile.component';

export const userRoutes: Routes = [
  { path: '', component: UsersListComponent },
  { path: ':id/edit', component: EditUserComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent }
];
