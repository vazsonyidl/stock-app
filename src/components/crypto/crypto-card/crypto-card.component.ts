import {Component, Input} from '@angular/core';
import {CryptoDataInterface} from './crypto-card.model';

@Component({
  selector: 'crypto-card',
  templateUrl: './crypto-card.template.html',
  styleUrls: ['crypto-card.style.scss', '../crypto.style.scss']
})
export class CryptoCardComponent {
  @Input() cryptoData!: CryptoDataInterface;
}
