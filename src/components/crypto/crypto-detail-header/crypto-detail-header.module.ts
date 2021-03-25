import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CryptoDetailHeaderComponent} from './crypto-detail-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CryptoDetailHeaderComponent],
  exports: [CryptoDetailHeaderComponent],
})
export class CryptoDetailHeaderModule {
}
