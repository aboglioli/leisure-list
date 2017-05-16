import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  private _uid: string;

  constructor(private afAuth: AngularFireAuth) {
    this.user.subscribe(user => this._uid = user.uid);
  }

  get user(): Observable<firebase.User> {
    return this.afAuth.authState;
  }

  get uid(): string {
    return this._uid;
  }

  async login(email: string, password: string) {
    return await this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    return await this.afAuth.auth.signOut();
  }

}
