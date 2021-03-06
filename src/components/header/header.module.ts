import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {ApiService} from 'services/api.service';
import {HeaderComponent} from './header.component';
import {BadgeComponent} from './+badge/badge.component';
import {HeaderService} from './header.service';

@NgModule({
  declarations: [
    HeaderComponent,
    BadgeComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [HeaderService, ApiService],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
