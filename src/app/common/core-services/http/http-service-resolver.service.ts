import { Inject } from '@angular/core';

import { IHttpService, HttpBaseService } from '.';
import { ApiEndpoint } from '../../types/enums';
import { OpaqueTokenConstants } from './infrastructure';

export class HttpServiceResolverService {
  constructor( @Inject(OpaqueTokenConstants.HTTP_SERVICE_TOKEN) private httpServices: HttpBaseService[]) {
  }

  public resolveOffersApiEndpoint(): IHttpService {
    return this.resolve(ApiEndpoint.Offers);
  }

  public resolve(endpoint: ApiEndpoint): IHttpService {
    const service = this.httpServices.find(f => f.apiEndpoint === endpoint);
    if (!service) {
      throw new Error(`Http-Service for Endpoint ${ApiEndpoint[endpoint]} not found`);
    }

    return service;
  }
}
