import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {HeaderService} from './header.service';
import {ForexRate} from './header.model';

const requiredForexes = ['USD', 'CHF', 'CAD'];

@Component({
  selector: 'app-header',
  templateUrl: './header.template.html',
  styles: [`
    .badge-area {
      margin: 0 auto;
      overflow: scroll;
    }
  `],
})
export class HeaderComponent {
  public forexBadgeRate: Observable<ForexRate>;

  constructor(headerService: HeaderService) {
    this.forexBadgeRate = headerService.getForexBadgeRate().pipe(
      map(forexRateResponse => HeaderComponent.pluckRequiredForexes(forexRateResponse)),
    );
  }

  private static pluckRequiredForexes(forexRate: ForexRate): ForexRate {
    const quotes = Object.keys(forexRate.quote)
      .filter(quote => requiredForexes.includes(quote))
      .reduce((acc, key) => {
        // @ts-ignore
        acc[key] = forexRate.quote[key];
        return acc;
      }, {});

    return {
      base: forexRate.base,
      quote: quotes,
    };
  }
}
