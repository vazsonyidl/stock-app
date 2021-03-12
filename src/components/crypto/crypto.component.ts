import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import {BehaviorSubject, } from 'rxjs';
import {tap} from 'rxjs/operators';

import {CryptoService} from './crypto.service';
import {CryptoDataInterface} from './crypto-card/crypto-card.model';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.template.html',
  styleUrls: ['./crypto.style.scss']
})
export class CryptoComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource!: MatTableDataSource<CryptoDataInterface>;
  cryptoData!: BehaviorSubject<Array<CryptoDataInterface>>;

  constructor(private readonly optionsService: CryptoService) {
    this.optionsService.getCryptocurrencyInfo().pipe(
      tap((cryptoData) => this.dataSource = new MatTableDataSource(cryptoData)),
      tap(() => this.setUpPaginator())
    ).subscribe();
  }

  private setUpPaginator(): void {
    this.dataSource.paginator = this.paginator;
    this.cryptoData = this.dataSource.connect();
  }
}
