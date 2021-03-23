import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CryptoDetailComponent} from './crypto-detail.component';

const routes: Routes = [
  {path: '', component: CryptoDetailComponent},
  {path: '**', redirectTo: '404'},
];

export const cryptoRoutingConfig: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
