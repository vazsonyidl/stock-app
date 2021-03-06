import {HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ApiService} from 'services/api.service';
import {environment} from 'environments/environment';
import {ForexRate} from './header.model';

@Injectable()
export class HeaderService {
  private readonly baseUrl: string = `${environment.finnHubBaseUrl}/forex/rates`;

  constructor(private readonly apiService: ApiService) {
  }

  public getForexBadgeRate(): Observable<ForexRate> {
    const queryParams: HttpParams = new HttpParams({fromObject: {token: environment.finnHubApiKey}});
    return this.apiService.get<ForexRate>(this.baseUrl, {params: queryParams});
  }
}
