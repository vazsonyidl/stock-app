import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';

import {NavigationComponent} from './navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
  ],
  exports: [NavigationComponent],
})
export class NavigationModule {
}
