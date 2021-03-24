// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pokeApiEndpoint: 'https://pokeapi.co/api/v2/',
  firebaseConfig : {
    apiKey: "AIzaSyB1Luyzg250FflmRYjleiPjEaCZzJX0LG8",
    authDomain: "pokemon-23e36.firebaseapp.com",
    projectId: "pokemon-23e36",
    storageBucket: "pokemon-23e36.appspot.com",
    messagingSenderId: "211864835699",
    appId: "1:211864835699:web:189548dfe3b4cffc52fc06"
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
