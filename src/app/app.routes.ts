import { Routes } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HeroComponent,
  },
];
