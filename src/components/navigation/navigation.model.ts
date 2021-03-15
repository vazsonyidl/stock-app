export interface NavigationItem {
  link: string;
  displayName: string;
}

export const navigationItems: Array<NavigationItem> = [
  {link: 'cryptocurrency', displayName: 'Cryptocurrencies'},
  {link: 'etf', displayName: 'ETFs'},
];
