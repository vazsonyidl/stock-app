import {Component, Input} from '@angular/core';
import {CryptoDataInterface, TransformedCryptoData} from './crypto-card.model';

@Component({
  selector: 'crypto-card',
  templateUrl: './crypto-card.template.html',
  styleUrls: ['crypto-card.style.scss'],
})
export class CryptoCardComponent {
  public cryptoData!: TransformedCryptoData;

  @Input() set setCryptoData(data: CryptoDataInterface) {
    this.cryptoData = {
      name: data.name,
      imageSrc: data.image,
      currentPrice: data.current_price,
      priceChangePct24h: data.price_change_percentage_24h,
      circulatingSupply: data.circulating_supply,
      maxSupply: data.max_supply,
      marketCapitlz: data.market_cap,
      availablePct: (data.circulating_supply / data.max_supply) * 100,
    };
  }
}
