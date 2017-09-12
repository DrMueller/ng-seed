import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { EnvironmentService } from '../../environment';
import { ObjectFactoryService } from '../../object-creation';

import { ApiEndpoint } from '../enums';

import { HttpBaseService } from './abstractions';

@Injectable()
export class PlaygroundHttpService extends HttpBaseService {
  public get apiEndpoint() {
    return ApiEndpoint.TestMicroservice;
  }

  constructor(http: Http, objectFactoryService: ObjectFactoryService, environmentService: EnvironmentService) {
    super(http, objectFactoryService, environmentService.microserviceBaseUrl);
  }
}
