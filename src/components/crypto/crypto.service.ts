import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ApiService} from 'services/api.service';
import {environment} from 'environments/environment';
import {CryptoDataInterface} from './crypto-card/crypto-card.model';

@Injectable()
export class CryptoService {
  private readonly baseUrl = `${environment.coinGeckoBaseUrl}/coins`;

  constructor(private readonly apiService: ApiService) {
  }

  public getAllCryptocurrencyInfo(): Observable<Array<CryptoDataInterface>> {
    const endpointUrl = `${this.baseUrl}/markets`;
    const defaultHttpParams: {[key: string]: string} = {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: '100',
      page: '1',
      sparkline: 'false',
    };
    const httpParams = new HttpParams({fromObject: defaultHttpParams});
    return this.apiService.get<Array<CryptoDataInterface>>(endpointUrl, {params: httpParams});
  }

  public getCryptocurrencyDetails(cryptoId: string): any {
    const endpointUrl = `${this.baseUrl}/${cryptoId}`;
    return this.apiService.get(endpointUrl);
  }
}
