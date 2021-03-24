import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'crypto-detail-header',
  templateUrl: './crypto-detail-header.template.html',
  styleUrls: ['crypto-detail-header.style.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptoDetailHeaderComponent {
  @Input() details: any;
}
