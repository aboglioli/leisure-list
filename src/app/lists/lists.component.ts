import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../shared/services';

@Component({
  selector: 'll-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  constructor(private router: Router,
              private loginService: LoginService) { }

  ngOnInit() { }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }
}
