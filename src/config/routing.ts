import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {CryptoComponent} from 'components/crypto/crypto.component';

const routes: Routes = [
  {path: '', redirectTo: 'cryptocurrency', pathMatch: 'full'},
  {
    path: 'cryptocurrency',
    component: CryptoComponent,
  },
  {
    path: 'cryptocurrency/:id',
    loadChildren: () => import('../pages/crypto-detail/crypto-detail.module')
      .then(m => m.CryptoDetailModule),
  },
  {
    path: '404',
    loadChildren: () => import('../components/not-found/not-found.module')
      .then(m => m.NotFoundModule),
  },
  {path: '**', redirectTo: '404'},
];

export const rootRoutingConfig: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes, {useHash: true});
