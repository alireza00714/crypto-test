export interface CommonResponse<T> {
  data: T[];
  status: number;
}

export interface CurrencyName {
  en: string;
  fa: string;
}

interface TVSymbol {
  international: string;
  ramzinex: string;
}

interface Last24hChange {
  base_volume: number;
  change_percent: number;
  close: number;
  highest: number;
  lowest: number;
  open: number;
  quote_volume: number;
}

export interface Pair {
  amount_step: number;
  base_currency_id: number;
  base_currency_symbol: CurrencyName;
  base_precision: number;
  buy: number;
  crypto_box: number;
  financial: {
    last24h: Last24hChange;
  };
  icon: number;
  logo: string;
  name: CurrencyName;
  pair_id: number;
  price_precision: number;
  price_step: number;
  quote_currency_id: number;
  quote_currency_symbol: CurrencyName;
  quote_precision: number;
  sell: number;
  show_order: number;
  tv_symbol: TVSymbol;
  url_name: string;
  web_link: string;
}

export interface Currency {
  color: string;
  crypto_box: number;
  deposit: number;
  factor: number;
  has_tag: boolean;
  icon: string;
  id: number;
  international_price: null;
  logo: string;
  name: string;
  persian_name: string;
  precision: number;
  related_pairs: number[];
  rial_related_pair: number;
  show_order: number;
  show_precision: number;
  symbol: string;
  url_name: string;
  withdraw: number;
  withdraw_fee: number;
}
