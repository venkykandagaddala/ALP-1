import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './users.routes';
import { UsersListComponent } from './users-list.component';
import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    UsersListComponent,
    SignupComponent,
    LoginComponent
  ],
  providers: [],
})

export class UsersModule {}
