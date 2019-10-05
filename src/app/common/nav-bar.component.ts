import { Component } from '@angular/core';
import { AuthService } from '../users/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  constructor(private auth: AuthService) {}
}
