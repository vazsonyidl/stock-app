import {Component} from '@angular/core';
import {NavigationItem, navigationItems} from './navigation.model';

@Component({
  selector: 'app-navigation',
  template: `
    <nav mat-tab-nav-bar>
      <a mat-tab-link
         *ngFor="let navigationItem of navigationItemsList"
         [routerLink]="navigationItem.link"
      >
        {{navigationItem.displayName}}
      </a>
    </nav>
  `
})
export class NavigationComponent {
  readonly navigationItemsList: Array<NavigationItem> = navigationItems;
}
