import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { JsObjUtilities, JsObjFactory } from '../../utilities';
import { IParameterlessConstructor } from '../../types/interfaces';
import { ApiEndpoint } from '../../types/enums';
import { ContentType } from './enums';
import { IHttpService } from '.';

export abstract class HttpBaseService implements IHttpService {
  public abstract get apiEndpoint(): ApiEndpoint;

  protected constructor(private http: Http, private baseUrl: string) { }

  public get<T>(relativeUrl: string, ctor: IParameterlessConstructor<T> | null = null): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const requestOptions = this.createRequestOptions();
    return this.processResponse(this.http.get(completeUrl, requestOptions), ctor);
  }

  public getArray<T>(
    relativeUrl: string,
    ctor: IParameterlessConstructor<T>): Promise<T[]> {
    const completeUrl = this.createCompleteUrl(relativeUrl);

    const requestOptions = this.createRequestOptions();

    const arrayResult = this.processResponse<any[]>(this.http.get(completeUrl, requestOptions)).then(arr => {
      if (arr) {
        return arr.map(item => {
          const newObj = JsObjFactory.create(item, ctor);
          return newObj;
        });
      }
    });

    return arrayResult;
  }

  public post<T>(
    relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> | null = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const headers = new Headers();

    const requestOptions = this.createRequestOptions(contentType);
    return this.processResponse(this.http.post(completeUrl, body, requestOptions), ctor);
  }

  public delete(relativeUrl: string): Promise<null> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const requestOptions = this.createRequestOptions();
    return this.processResponse(this.http.delete(completeUrl, requestOptions));
  }

  public put<T>(
    relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> | null = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);
    const headers = new Headers();

    const requestOptions = this.createRequestOptions(contentType);
    return this.processResponse(this.http.put(completeUrl, body, requestOptions), ctor);
  }

  public patch<T>(relativeUrl: string,
    body: any,
    ctor: IParameterlessConstructor<T> | null = null,
    contentType: ContentType = ContentType.ApplicationJson): Promise<T> {
    const completeUrl = this.createCompleteUrl(relativeUrl);

    const requestOptions = this.createRequestOptions(contentType);
    return this.processResponse(this.http.patch(completeUrl, body, requestOptions), ctor);
  }

  private processResponse<T>(response: Observable<Response>, ctor: IParameterlessConstructor<T> | null = null): Promise<T | null> {
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
