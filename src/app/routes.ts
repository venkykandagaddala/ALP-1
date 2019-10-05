import { Routes } from '@angular/router';
import { AboutUsComponent } from './common/about-us.component';

const newLocal = 'users';
export const appRoutes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: newLocal, loadChildren: './users/users.module#UsersModule' },
  { path: '', redirectTo: 'about', pathMatch: 'full' }
];
