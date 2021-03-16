import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ApiService} from 'services/api.service';
import {environment} from 'environments/environment';
import {CryptoDataInterface} from './crypto-card/crypto-card.model';

const defaultHttpParams: {[key: string]: string} = {
  vs_currency: 'usd',
  order: 'market_cap_desc',
  per_page: '100',
  page: '1',
  sparkline: 'false',
};

@Injectable()
export class CryptoService {
  constructor(private readonly apiService: ApiService) {
  }

  public getCryptocurrencyInfo(): Observable<Array<CryptoDataInterface>> {
    const endpointUrl = `${environment.coinGeckoBaseUrl}/coins/markets`;
    const httpParams = new HttpParams({fromObject: defaultHttpParams});
    return this.apiService.get<Array<CryptoDataInterface>>(endpointUrl, {params: httpParams});
  }
}
