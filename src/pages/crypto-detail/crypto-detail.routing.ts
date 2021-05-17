import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {CryptoDetailPage} from './cyrypto-detail.page';

const routes: Routes = [
  {path: '', component: CryptoDetailPage},
  {path: '**', redirectTo: '404'},
];

export const cryptoRoutingConfig: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
