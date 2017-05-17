import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  private _uid: string;

  constructor(private afAuth: AngularFireAuth) {
    this.user.subscribe(user => {
      if(user && user.email && user.uid) {
        this._uid = user.uid
      } else {
        this._uid = null;
      }
    });
  }

  get user(): Observable<firebase.User> {
    return this.afAuth.authState;
  }

  get uid(): string {
    return this._uid;
  }

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

}
