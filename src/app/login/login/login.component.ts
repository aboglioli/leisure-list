import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { LoginService } from '../../shared/services';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loading: boolean;

  private loginSubscription: Subscription;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loading = true;

    this.loginSubscription = this.loginService.user.subscribe(user => {
      if(user && user.email && user.uid) {
        this.loading = false;

        this.router.navigate(['lists']);
      }

      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }

  login() {
    this.loading = true;

    const values = this.loginForm.value;
    console.log('Login', values);

    this.loginService.login(values.email, values.password);
  }

}
