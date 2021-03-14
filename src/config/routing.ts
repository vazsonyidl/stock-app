import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {CryptoComponent} from 'components/crypto/crypto.component';

const routes: Routes = [
  {path: '', redirectTo: 'cryptocurrency', pathMatch: 'full'},
  {path: 'cryptocurrency', component: CryptoComponent},
  {path: '**', redirectTo: 'crypto'}
];

export const rootRoutingConfig: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
