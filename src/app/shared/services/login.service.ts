import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class LoginService {
  private loggedIn: boolean;

  constructor(private fb: AngularFire) {
  }

  getState() {
    return this.fb.auth.asObservable();
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  login(email: string, password: string) {
    this.fb.auth.login({email, password},
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      });
  }

  logout() {
    this.fb.auth.logout();
  }

}
