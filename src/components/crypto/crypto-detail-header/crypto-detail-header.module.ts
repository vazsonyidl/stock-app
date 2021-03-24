import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CryptoDetailHeaderComponent} from './crypto-detail-header.component';

@NgModule({
  declarations: [CryptoDetailHeaderComponent],
  exports: [CryptoDetailHeaderComponent],
  imports: [CommonModule],
})
export class CryptoDetailHeaderModule {
}
