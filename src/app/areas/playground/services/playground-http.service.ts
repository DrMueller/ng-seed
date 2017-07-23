import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { HttpBaseService, ApiEndpoint } from 'app/common/core-services/http';
import { EnvironmentService } from 'app/common/core-services/environment';

@Injectable()
export class PlaygroundHttpService extends HttpBaseService {
  public get apiEndpoint() {
    return ApiEndpoint.TestMicroservice;
  }

  constructor(http: Http, environmentService: EnvironmentService) {
    super(http, environmentService.microserviceBaseUrl);
  }
}
