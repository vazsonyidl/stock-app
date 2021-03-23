import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-crypto-detail',
  template: '<div>crypto detail works</div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoDetailComponent {
  constructor() {
    console.log('futok');
  }
}
