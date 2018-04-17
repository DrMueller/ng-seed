// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  microserviceBaseUrl: 'http://localhost:2215/api',
  securityServiceBaseUrl: 'http://localhost:2215/api',
  adalConfig: {
    tenant: 'DrMuellersAD.onmicrosoft.com',
    clientId: 'd8fb4ea7-b5f4-426f-874e-919dbfa26852',
    redirectUri: 'http://localhost:4200/'
  }
};
