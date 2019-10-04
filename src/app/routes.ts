import { Routes } from '@angular/router';
import { AboutUsComponent } from './common/about-us.component';

export const appRoutes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: '', redirectTo: 'about', pathMatch: 'full' }
];
