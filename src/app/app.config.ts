import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: 'AIzaSyAZSo2M-sKHO_pKSrZyWbeduCy8QbkAphU',
  authDomain: 'colabvista-e484c.firebaseapp.com',
  projectId: 'colabvista-e484c',
  storageBucket: 'colabvista-e484c.appspot.com',
  messagingSenderId: '498718176297',
  appId: '1:498718176297:web:97dd1f4d3725f5a57b5838',
  measurementId: 'G-TD05WXD6W4',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
};
