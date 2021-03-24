import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CryptoDetailHeaderModule} from 'components/crypto/crypto-detail-header/crypto-detail-header.module';
import {CryptoDetailPage} from './cyrypto-detail.page';
import {cryptoRoutingConfig} from './crypto-detail.routing';

@NgModule({
  imports: [
    CryptoDetailHeaderModule,
    cryptoRoutingConfig,
    CommonModule,
  ],
  declarations: [CryptoDetailPage],
})
export class CryptoDetailModule {
}
