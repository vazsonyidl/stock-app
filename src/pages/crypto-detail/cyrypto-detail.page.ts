import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CryptoService} from 'components/crypto/crypto.service';
import {pluck, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'crypto-detail-page',
  templateUrl: './crypto-detail.template.html',
})
export class CryptoDetailPage {
  public cryptoDetails: Observable<any>;

  constructor(route: ActivatedRoute, private readonly cryptoService: CryptoService) {
    this.cryptoDetails = route.params
      .pipe(
        pluck('id'),
        switchMap((cryptoId: string) => this.cryptoService.getCryptocurrencyDetails(cryptoId)),
      );
  }
}
