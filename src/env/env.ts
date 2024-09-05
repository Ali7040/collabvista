export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: process.env['API_KEY'],
    authDomain: process.env['AUTH_D'],
    projectId: process.env['PROJECT_ID'],
    storageBucket: process.env['STORAGE_BUCKET'],
    messagingSenderId: process.env['MESSAGING_SENDER_ID'],
    appId: process.env['APP_ID'],
    measurementId: process.env['M_ID'],
  },
};
