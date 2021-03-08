import {BrowserModule} from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CoreModule} from 'modules/core.module';
import {rootRoutingConfig} from 'config/routing';
import {AppComponent} from './app.component';
import {HeaderModule} from '../header/header.module';
import {NavigationModule} from '../navigation/navigation.module';
import {OptionsModule} from '../options/options.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HeaderModule,
    NavigationModule,
    OptionsModule,
    rootRoutingConfig
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
