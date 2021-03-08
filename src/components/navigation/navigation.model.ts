export interface NavigationItem {
  link: string;
  displayName: string;
}

export const navigationItems: Array<NavigationItem> = [
  {link: 'crypto', displayName: 'Cryptocurrencies'},
  {link: 'etf', displayName: 'ETFs'}
];
