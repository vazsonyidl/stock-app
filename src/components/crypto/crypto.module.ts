import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';

import {CryptoComponent} from './crypto.component';
import {CryptoService} from './crypto.service';
import {CryptoCardComponent} from './crypto-card/crypto-card.component';

@NgModule({
  declarations: [CryptoComponent, CryptoCardComponent],
  imports: [
    MatCardModule,
    CommonModule,
    MatPaginatorModule
  ],
  providers: [CryptoService]
})
export class CryptoModule {
}
