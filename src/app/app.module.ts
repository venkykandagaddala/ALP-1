import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './common/nav-bar.component';
import { AboutUsComponent } from './common/about-us.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { AuthService } from './users/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './users/user.service';

declare let toastr: Toastr;
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: TOASTR_TOKEN, useValue: toastr },
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
