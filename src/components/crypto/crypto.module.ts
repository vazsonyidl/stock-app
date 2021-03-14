import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';

import {CryptoComponent} from './crypto.component';
import {CryptoService} from './crypto.service';
import {CryptoCardComponent} from './crypto-card/crypto-card.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatIconModule
  ],
  declarations: [CryptoComponent, CryptoCardComponent],
  providers: [CryptoService]
})
export class CryptoModule {
}
