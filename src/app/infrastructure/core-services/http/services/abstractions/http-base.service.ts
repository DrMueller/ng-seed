import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { JsObjUtilities, JsObjFactory } from 'app/infrastructure/utilities';
import { IParameterlessConstructor } from 'app/infrastructure/types/interfaces';
import { ContentType, ApiEndpoint } from '../../enums';

export abstract class HttpBaseService {
  public abstract get apiEndpoint(): ApiEndpoint;

  protected constructor(private http: Http, private baseUrl: string) { }

  public getAsync<T>(relativeUrl: string, ctor: IParameterlessConstructor<T> | null = null): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const requestOptions = this.createRequestOptions();
    return this.processResponse(this.http.get(completeUrl, requestOptions), ctor);
  }

  public async getArrayAsync<T>(
    relativeUrl: string,
    ctor: IParameterlessConstructor<T>): Promise<T[]> {
    const completeUrl = this.createCompleteUrl(relativeUrl);

    const requestOptions = this.createRequestOptions();
    const array = await this.processResponse<any[]>(this.http.get(completeUrl, requestOptions));

    const arrayResult = array.map(item => {
      const newObj = JsObjFactory.create(item, ctor);
      return newObj;
    });

    return arrayResult;
  }

  public postAsync<T>(
    relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> | null = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const headers = new Headers();

    const requestOptions = this.createRequestOptions(contentType);
    return this.processResponse(this.http.post(completeUrl, body, requestOptions), ctor);
  }

  public deleteAsync(relativeUrl: string): Promise<void> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const requestOptions = this.createRequestOptions();
    const result = this.processResponse<void>(this.http.delete(completeUrl, requestOptions));

    return result;
  }

  public putASync<T>(
    relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> | null = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const headers = new Headers();

    const requestOptions = this.createRequestOptions(contentType);
    return this.processResponse(this.http.put(completeUrl, body, requestOptions), ctor);
  }

  public patchAsync<T>(relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> | null = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);

    const requestOptions = this.createRequestOptions(contentType);
    return this.processResponse(this.http.patch(completeUrl, body, requestOptions), ctor);
  }

  private processResponse<T>(response: Observable<Response>, ctor: IParameterlessConstructor<T> | null = null): Promise<T> {
    let mappedResult = response.map(this.extractData);

    if (ctor) {
      mappedResult = mappedResult.map(f => {
        const newObj = JsObjFactory.create(f, ctor);
        return newObj;
      });
    }

    const result = mappedResult.toPromise();
    return result;
  }

  private mapContentType(contentType: ContentType): string {
    switch (contentType) {
      case ContentType.ApplicationJson:
        return 'application/json';
      default:
        throw new RangeError(contentType.toString() + ' is not recognized');
    }
  }

  private createRequestOptions(contentType?: ContentType | null): RequestOptions {
    const headers = new Headers();

    if (contentType) {
      headers.append('Content-Type', this.mapContentType(contentType));
    }

    const s = new URLSearchParams();
    const requestOptions = new RequestOptions({
      headers: headers,
      withCredentials: true,
    });

    return requestOptions;
  }

  private extractData(res: Response): any {
    let body;
    if (res.text()) {
      body = res.json();
    }

    if (!JsObjUtilities.isNullOrUndefined(body)) {
      return body;
    }

    return {};
  }

  private createCompleteUrl(relativeUrl: string) {
    const result = this.baseUrl + '/' + relativeUrl;
    return result;
  }
}
