import {NgModule} from '@angular/core';
import {CryptoDetailComponent} from './crypto-detail.component';
import {cryptoRoutingConfig} from './crypto-detail.routing';

@NgModule({
  imports: [cryptoRoutingConfig],
  declarations: [CryptoDetailComponent],
})
export class CryptoDetailModule {
}
