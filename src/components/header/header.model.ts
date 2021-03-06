export interface ForexRate {
  base: string;
  quote: { [key: string]: number };
}
