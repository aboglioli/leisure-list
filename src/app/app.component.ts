import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './shared/services';

@Component({
  selector: 'll-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router,
              private loginService: LoginService) { }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }
}
