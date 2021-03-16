import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
