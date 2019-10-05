import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { userRoutes } from './users.routes';
import { UsersListComponent } from './users-list.component';
import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { SignupService } from './signup.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    UsersListComponent,
    SignupComponent,
    LoginComponent
  ],
  providers: [
    SignupService,
  ],
})

export class UsersModule {}
