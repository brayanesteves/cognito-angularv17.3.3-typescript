// The file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production:false,
       cognito: {
                 userPoolId:'ca-central-1_BOuEICOAG',
        userPoolWebClientId:'6sr792c21js0umq2n1fku6qp6r',
    }
};

/**
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 * 
 * This import should be commented out in production mode because it will have a negative
 * on perfomance if an error is throw.
 */
// import 'zone.js/plugins/zone-error'; // Included with Angular CLI. 