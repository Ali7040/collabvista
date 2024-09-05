import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';
import { catchError, EMPTY, from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);
  constructor() {}

  signUp(username: string, email: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((response) => {
      return updateProfile(response.user, { displayName: username });
    });

    return from(promise).pipe(
      catchError((error) => {
        console.error('Sign-up error:', error);
        return EMPTY;
      })
    );
  }

  logIn(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {});

    return from(promise).pipe(
      catchError((error) => {
        console.error('Log-in error:', error);
        return EMPTY;
      })
    );
  }
}
