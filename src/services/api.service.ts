import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {share} from 'rxjs/operators';
import {Observable} from 'rxjs';

interface RequestOptions {
  headers?: HttpHeaders | {
    [header: string]: string | Array<string>;
  };
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | Array<string>;
  };
  responseType?: 'json';
}

@Injectable()
export class ApiService {
  constructor(private readonly http: HttpClient) {
  }

  public get<T>(url: string, options?: RequestOptions): Observable<T> {
    return this.http.get<T>(url, options).pipe(
      share(),
    );
  }
}
