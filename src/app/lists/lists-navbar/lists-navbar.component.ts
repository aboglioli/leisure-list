import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../shared/services';

@Component({
  selector: 'll-lists-navbar',
  templateUrl: './lists-navbar.component.html',
  styleUrls: ['./lists-navbar.component.scss']
})
export class ListsNavbarComponent implements OnInit {

  constructor(private router: Router,
              private loginService: LoginService) { }

  ngOnInit() { }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }

}
