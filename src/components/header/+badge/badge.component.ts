import {Component, Input} from '@angular/core';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-header-badge',
  template: `
    <span class="badge" data-testid="forex-badge">
      {{rate.base}}/{{rate.quote.key}} {{rate.quote.value | number:'1.2-2'}}
    </span>
  `,
  styleUrls: ['./badge.style.scss'],
})
export class BadgeComponent {
  @Input() rate!: {base: string, quote: KeyValue<string, number>};
}
