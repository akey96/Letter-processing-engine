// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverUrl: 'http://3.134.95.249:8080',
  oauthClientId: 'nimeclient',
  oauthSecret: 'nmsecret',
  firebase:  {
    apiKey: 'AIzaSyBN50sVPYUXxFXnC7IoOcmIENauycdBZag',
    authDomain: 'ninio-mensajero.firebaseapp.com',
    databaseURL: 'https://ninio-mensajero.firebaseio.com',
    projectId: 'ninio-mensajero',
    storageBucket: 'ninio-mensajero.appspot.com',
    messagingSenderId: '971919631028',
    appId: '1:971919631028:web:4246c5f6ca573bb8ebede1',
    measurementId: 'G-WJ46776QJ4'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
